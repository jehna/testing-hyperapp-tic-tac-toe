import { h } from "https://unpkg.com/hyperapp"

const SetNext = (state, [x, y]) =>
  state.board[y][x] || state.won
    ? state
    : {
        ...state,
        next: state.next === "X" ? "O" : "X",
        board: state.board.map((row, yy) =>
          yy !== y ? row : row.map((v, xx) => (xx !== x ? v : state.next))
        )
      }

export default (state) =>
  h("table", { border: 1 }, [
    h("link", { rel: "stylesheet", href: "./app/board.css" }),
    state.board.map((row, y) =>
      h(
        "tr",
        {},
        row.map((col, x) => h("td", { onclick: [SetNext, [x, y]] }, col))
      )
    )
  ])
