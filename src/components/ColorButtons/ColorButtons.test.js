import ColorButtons from './ColorButtons'
import Canvas from '../Canvas/Canvas'
import 'jest-canvas-mock'

describe('color buttons', () => {
  let colors, defaultColor, colorButtons, clickResult

  beforeAll(() => {
    colors = [
      '#e53935', '#d81b60', '#8e24aa', '#5e35b1'
    ]

    defaultColor = '#e53935'

    const canvas = new Canvas({
      canvas: {
        width: 300,
        height: 300
      },
      defaultColor: '#212121',
      defaultSize: 18
    })

    colorButtons = new ColorButtons('section',
      { class: 'toolbox' },
      { colors, defaultColor },
      canvas
    )
  })

  test('should be an instance of ColorButtons', () => {
    expect(colorButtons).toBeInstanceOf(ColorButtons)
  })

  test('should contain the class toolbox', () => {
    expect(colorButtons.element.getAttribute('class')).toEqual('toolbox')
  })

  test('should contain the default color', () => {
    expect(colorButtons.defaultColor).toEqual(defaultColor)
  })

  test('should contain all colors buttons', () => {
    expect(colorButtons.buttons.length).toEqual(colors.length)
  })

  test('should have setted all colors values', () => {
    colorButtons.buttons.forEach((button, index) => {
      expect(button.value).toEqual(colors[index])
    })
  })
})