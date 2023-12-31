import { takeEvery, select, put, delay } from "redux-saga/effects";
import {
  CLOSE_CARDS,
  LOCK,
  OPEN_CARD,
  SELECT_CARD,
  SET_MATCH,
} from "./actions";

function* selectCard(action) {
  const delayTime = 1000;
  const { key } = action;
  const cards = yield select((state) => state.cards);
  const isLocked = yield select((state) => state.isLocked);
  const index = cards.findIndex((c) => c.key === key);
  const otherCardIndex = cards.findIndex((c) => c.isActive && !c.hasMatch);

  if (!isLocked && index > -1 && !cards[index].isActive) {
    yield put({ type: OPEN_CARD, index });

    if (otherCardIndex > -1) {
      if (cards[index].id === cards[otherCardIndex].id) {
        yield put({ type: SET_MATCH, index1: index, index2: otherCardIndex });
      } else {
        yield put({ type: LOCK });
        yield delay(delayTime);
        yield put({
          type: CLOSE_CARDS,
          index1: index,
          index2: otherCardIndex,
        });
      }
    }
  }
}

function* gameSaga() {
  yield takeEvery(SELECT_CARD, selectCard);
}

export default gameSaga;
