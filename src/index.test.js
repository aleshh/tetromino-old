import init from './index'

test ('Init statement ', () => {
  document.body.innerHTML = ""
  init()
  expect(document.body.innerHTML).not.toEqual("")
})