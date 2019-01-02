import SizeButtons from './SizeButtons'
import Canvas from '../Canvas/Canvas'
import 'jest-canvas-mock'

describe('option buttons', () => {
  let sizes, defaultSize, sizeButtons

  beforeAll(() => {
    sizes = [
      5, 8, 12
    ]

    defaultSize = 5

    const canvas = new Canvas({
      canvas: {
        width: 300,
        height: 300
      },
      defaultColor: '#212121',
      defaultSize: 18
    })

    sizeButtons = new SizeButtons(
      'section',
      { class: 'toolbox' },
      { sizes, defaultSize },
      canvas
    )
  })

  test('should be an instance of sizeButtons', () => {
    expect(sizeButtons).toBeInstanceOf(SizeButtons)
  })

  test('should contain the class toolbox', () => {
    expect(sizeButtons.element.getAttribute('class')).toEqual('toolbox')
  })

  test('should contain all colors buttons', () => {
    expect(sizeButtons.buttons.length).toEqual(sizes.length)
  })

  test('should contain all option buttons', () => {
    sizeButtons.buttons.forEach((button, index) => {
      expect(button.value).toEqual(sizes[index])  
    })
  })
})