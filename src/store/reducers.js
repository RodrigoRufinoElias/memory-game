import {
  CLOSE_CARDS,
  LOCK,
  OPEN_CARD,
  SET_MATCH,
  CLOSE_VICTORY_DIALOG,
  START_GAME,
} from "./actions";
import ListBuilder from "builders/ListBuilder";

const cardsTotal = 7;

const initialState = {
  isLocked: false,
  isVictoryDialogOpen: false,
  cards: new ListBuilder().createList(cardsTotal).shuffle().build(),
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME: {
      return {
        ...state,
        isVictoryDialogOpen: false,
        cards: new ListBuilder().createList(cardsTotal).shuffle().build(),
      };
    }
    case LOCK:
      return {
        ...state,
        isLocked: true,
      };
    case OPEN_CARD: {
      const cards = state.cards.slice();
      cards[action.index].isActive = true;

      return {
        ...state,
        cards,
      };
    }
    case SET_MATCH: {
      const cards = state.cards.slice();
      let isVictoryDialogOpen = false;

      cards[action.index1].hasMatch = true;
      cards[action.index2].hasMatch = true;

      if (cards.every((c) => c.hasMatch)) {
        isVictoryDialogOpen = true;
      }

      return {
        ...state,
        isVictoryDialogOpen,
        cards,
      };
    }
    case CLOSE_CARDS: {
      const cards = state.cards.slice();
      cards[action.index1].isActive = false;
      cards[action.index2].isActive = false;

      return {
        ...state,
        isLocked: false,
        cards,
      };
    }
    case CLOSE_VICTORY_DIALOG: {
      return {
        ...state,
        isVictoryDialogOpen: false,
      };
    }
    default:
      return state;
  }
};

export default gameReducer;
