import Board from './board'

const init = () => {
  $('body').append(Board.create())
}

init()

export default init