import OptionButtons from './OptionButtons'
import Canvas from '../Canvas/Canvas'
import 'jest-canvas-mock'

describe('option buttons', () => {
  let options, optionButtons

  beforeAll(() => {
    options = [
      'undo',
      'redo'
    ]

    const canvas = new Canvas({
      canvas: {
        width: 300,
        height: 300
      },
      defaultColor: '#212121',
      defaultSize: 18
    })

    optionButtons = new OptionButtons(
      'section',
      { class: 'toolbox' },
      options,
      canvas
    )
  })

  test('should be an instance of OptionButtons', () => {
    expect(optionButtons).toBeInstanceOf(OptionButtons)
  })

  test('should contain the class toolbox', () => {
    expect(optionButtons.element.getAttribute('class')).toEqual('toolbox')
  })

  test('should contain all colors buttons', () => {
    expect(optionButtons.buttons.length).toEqual(options.length)
  })

  test('should contain all option buttons', () => {
    optionButtons.buttons.forEach((button, index) => {
      expect(button.value).toEqual(options[index])  
    })
  })
})