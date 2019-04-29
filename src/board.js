import config from './config.js'
import $ from 'jquery'

const Board = (function() {

  const makeRow = (rowId) => {
    const $row = $('<tr>')
    for (let j = 0; j < config.boardWidth; j++) {
      const id = cellId(rowId, j)
      $row.append(makeCell(id))
    }
    return $row
  }

  const makeCell = (id) => $('<td>').attr("id", id)

  const cellId = (row, cell) => {
    let id = (cell > 9) ? cell : "0" + cell
    id +=  (row > 9) ? "" + row : "0" + row
    return id
  }

  return {
    create: () => {
      const $board = $('<table>')
      for (let i = 0; i < config.boardHeight; i++) {
        $board.append(makeRow(i))
      }
      return $board
    }
  }

}())

export default Board