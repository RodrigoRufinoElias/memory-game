import * as actions from "./actions";

describe("Actions", () => {
  it("should create an action to close the victory dialog", () => {
    const expectedAction = {
      type: actions.CLOSE_VICTORY_DIALOG,
    };
    expect(actions.closeVictoryDialog()).toEqual(expectedAction);
  });

  it("should create an action to start the game", () => {
    const expectedAction = {
      type: actions.START_GAME,
    };
    expect(actions.startGame()).toEqual(expectedAction);
  });
});
