import Canvas from './Canvas'
import 'jest-canvas-mock'

describe('canvas', () => {
  let canvas,
      config = {
        canvas: {
          width: 300,
          height: 300
        },
        defaultColor: '#212121',
        defaultSize: 18
      }

  beforeAll(() => {
    canvas = new Canvas(config)
  })

  test('should fail on invalid width or height', () => {
    const newConfig = {
      canvas: {
        width: 300,
        height: true
      },
      defaultColor: '#212121',
      defaultSize: 18
    }

    expect(() => new Canvas(newConfig)).toThrowError('height must be a number')
  })

  test('should fail on invalid default color', () => {
    const newConfig = {
      canvas: {
        width: 300,
        height: 300
      },
      defaultColor: '212121',
      defaultSize: 18
    }

    expect(() => new Canvas(newConfig)).toThrowError('default color must be a hex string')
  })

  test('should fail on invalid default color', () => {
    const newConfig = {
      canvas: {
        width: 300,
        height: 300
      },
      defaultColor: '#212121'
    }

    expect(() => new Canvas(newConfig)).toThrowError('default size must be a number')
  })

  test('should be an instance of Canvas', () => {
    expect(canvas).toBeInstanceOf(Canvas)
  })

  test('should have the specified width and height', () => {
    expect(canvas.width).toEqual(config.canvas.width)
    expect(canvas.height).toEqual(config.canvas.height)
  })

  test('should have the specified default color', () => {
    expect(canvas.defaultColor).toEqual(config.canvas.defaultColor)
  })

  test('should have the specified default size', () => {
    expect(canvas.defaultSize).toEqual(config.canvas.defaultSize)
  })
})