import Board from './board'
import config from './config'

const $board = Board.create()
const $tableRows = $board.children()
const $tableCells = $tableRows.children()

describe('Correctly build the game board', () => {
  test('Builds board with correct number of cells', () => {
    const expectedNumberOfCells = config.boardHeight * config.boardWidth
    expect($tableCells.length).toBe(expectedNumberOfCells)
  })
  test('first cell has correct ID', () => {
    const firstCellId = $tableCells.first().attr('id')
    expect(firstCellId).toEqual('0000')
  })
  test('last cell has correct ID', () => {
    const lastCellRow = "0" + (config.boardHeight - 1)
    const lastCellColumn = "0" + (config.boardWidth - 1)
    const expectedId = lastCellColumn.slice(-2) + lastCellRow.slice(-2)

    const lastCellId = $tableCells.last().attr('id')
    expect(lastCellId).toEqual(expectedId)
  })
})
