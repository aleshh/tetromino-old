import Board from './board'
import config from './config'

test('Builds board with correct number of cells', () => {
  const expectedNumberOfCells = config.boardHeight * config.boardWidth
  const $board = Board.create()
  const $tableRows = $board.children()
  const $tableCells = $tableRows.children()
  expect($tableCells.length).toBe(expectedNumberOfCells)
})