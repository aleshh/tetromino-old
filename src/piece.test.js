import Piece from './piece'
import pieceTypes from './piece-types'
import pieceLayouts from './piece-layouts'

describe('Piece object functions correctly', () => {
  const piece = new Piece

  test('Constructor returns piece with position', () => {
    expect(piece.position.length).toEqual(2)
  })

  test('Constructor returns piece with a valid type', () => {
    expect(pieceTypes[piece.type]).not.toBeUndefined()
  })

  test('10 pieces do not all have the same type', () => {
    const pieces = []
    for (let i = 0; i < 10; i++) {
      pieces.push(new Piece)
    }
    const allPiecesAreIdentical = pieces.every(piece => (
      piece.type === pieces[0].type
    ))
    expect(allPiecesAreIdentical).toBeFalsy()
  })

  test('Constructor returns piece with a valid rotation', () => {
    expect(piece.rotation).toEqual(0)
  })

  test('Piece rotatation updates', () => {
    const piece = new Piece
    for (let i = 0; i < 6; i++) {
      piece.rotate()
    }
    expect(piece.rotation).toEqual(2)
  })

  test('Piece I returns correct squares', () => {

  })
  test('Piece L returns correct squares', () => {

  })
  test('Piece L returns correct squares when rotated', () => {

  })
})