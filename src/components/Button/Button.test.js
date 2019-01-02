import Button from './Button'

describe('button', () => {
  let button, buttonClick, clickResult

  beforeAll(() => {
    button = new Button({ type: 'button', class: 'button' }, 'test')

    buttonClick = (event, button) => {
      clickResult = button
    }

    button.on('click', buttonClick)
  })

  test('should be an instance of Button', () => {
    expect(button).toBeInstanceOf(Button)
  })

  test('should contain the type button', () => {
    expect(button.element.getAttribute('type')).toEqual('button')
  })

  test('should contain the class button', () => {
    expect(button.element.getAttribute('class')).toEqual('button')
  })

  test('should contain the value test', () => {
    expect(button.value).toEqual('test')
  })

  test('should retrieve the instance of button clicked', () => {
    button.element.dispatchEvent(new Event('click'))

    expect(clickResult).toBeInstanceOf(Button)
    expect(clickResult.value).toEqual(button.value)
  })
})