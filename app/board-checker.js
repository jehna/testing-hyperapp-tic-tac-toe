const winning = [
  [
    [true, true, true],
    [false, false, false],
    [false, false, false]
  ],
  [
    [false, false, false],
    [true, true, true],
    [false, false, false]
  ],
  [
    [false, false, false],
    [false, false, false],
    [true, true, true]
  ],
  [
    [true, false, false],
    [true, false, false],
    [true, false, false]
  ],
  [
    [false, true, false],
    [false, true, false],
    [false, true, false]
  ],
  [
    [false, false, true],
    [false, false, true],
    [false, false, true]
  ],
  [
    [false, false, true],
    [false, true, false],
    [true, false, false]
  ],
  [
    [true, false, false],
    [false, true, false],
    [false, false, true]
  ]
]
const flatWins = winning.map((combination) => combination.flat())

export default function check(board) {
  const flatBoard = board.flat()
  for (const combination of flatWins) {
    const matches = flatBoard
      .filter((v, i) => combination[i] && v)
      .filter(Boolean)
    if (matches.length === 3 && matches.reduce((a, b) => a === b && a))
      return matches[0]
  }
  return false
}
