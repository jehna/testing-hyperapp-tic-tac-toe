import { h, app } from "https://unpkg.com/hyperapp"
import board from "./board.js"
import check from "./board-checker.js"

const INITIAL_STATE = {
  board: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ],
  next: "X",
  won: false
}

const Restart = () => INITIAL_STATE

const CheckIfWon = (dispatch, board) => {
  const won = check(board)
  if (won) dispatch((state) => ({ ...state, won }))
  return () => {}
}

app({
  init: INITIAL_STATE,
  view: (state) =>
    h("div", {}, [
      board(state),
      state.won && [
        `${state.won} WON!`,
        h("button", { type: "button", onclick: Restart }, "Restart")
      ]
    ]),
  node: document.getElementById("app"),
  subscriptions: (state) => [!state.won && [CheckIfWon, state.board]]
})
