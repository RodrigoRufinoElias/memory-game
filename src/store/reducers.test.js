import gameReducer from "./reducers";

const initialState = {
  isLocked: false,
  isVictoryDialogOpen: false,
  cards: [],
};

const testCards = [
  {
    id: 1,
    key: `1`,
    name: `Carta 1`,
    isActive: false,
    hasMatch: false,
  },
  {
    id: 2,
    key: `2`,
    name: `Carta 2`,
    isActive: false,
    hasMatch: false,
  },
];

describe("Reducers", () => {
  it("should return the initial state", () => {
    expect(gameReducer(initialState, {})).toEqual(initialState);
  });

  it("should handle START_GAME", () => {
    const state = gameReducer(initialState, { type: "START_GAME" });

    const expectedState = {
      ...initialState,
      cards: state.cards,
    };

    expect(state).toEqual(expectedState);
  });

  it("should handle SET_MATCH", () => {
    const startedState = {
      ...initialState,
      cards: testCards,
    };

    const expectedState = {
      ...startedState,
      isVictoryDialogOpen: true,
      cards: [
        {
          ...testCards[0],
          hasMatch: true,
        },
        {
          ...testCards[1],
          hasMatch: true,
        },
      ],
    };

    expect(
      gameReducer(startedState, {
        type: "SET_MATCH",
        index1: 0,
        index2: 1,
      }),
    ).toEqual(expectedState);
  });

  it("should handle CLOSE_CARDS", () => {
    const startedState = {
      ...initialState,
      isLocked: false,
      cards: [
        {
          ...testCards[0],
          isActive: true,
        },
        {
          ...testCards[1],
          isActive: true,
        },
      ],
    };

    const expectedState = {
      ...startedState,
      isLocked: false,
      cards: [
        {
          ...testCards[0],
          isActive: false,
        },
        {
          ...testCards[1],
          isActive: false,
        },
      ],
    };

    expect(
      gameReducer(startedState, {
        type: "CLOSE_CARDS",
        index1: 0,
        index2: 1,
      }),
    ).toEqual(expectedState);
  });

  it("should handle LOCK", () => {
    const expectedState = {
      ...initialState,
      isLocked: true,
    };

    expect(gameReducer(initialState, { type: "LOCK" })).toEqual(expectedState);
  });

  it("should handle CLOSE_VICTORY_DIALOG", () => {
    const victoryDialogOpennedState = {
      ...initialState,
      isVictoryDialogOpen: true,
    };

    const expectedState = {
      ...initialState,
      isVictoryDialogOpen: false,
    };

    expect(
      gameReducer(victoryDialogOpennedState, { type: "CLOSE_VICTORY_DIALOG" }),
    ).toEqual(expectedState);
  });
});
