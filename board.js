'use strict'

const Board = (function() {

  const makeRow = (rowId) => {
    const $row = $('<tr>')
    for (let j = 0; j < boardWidth; j++) {
      const id = cellId(rowId, j)
      $row.append(makeCell(id))
    }
    return $row
  }

  const makeCell = (id) => $('<td>').attr("id", id)

  const cellId = (row, cell) => {
    let id =  (row > 9) ? "" + row : "0" + row
    id += (cell > 9) ? cell : "0" + cell
    return id
  }

  return {
    create: () => {
      const $board = $('<table>')
      for (let i = 0; i < boardHeight; i++) {
        $board.append(makeRow(i))
      }
      return $board
    }
  }

}())
