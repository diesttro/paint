import Component from './Component';

describe('component', () => {
  let component, tagOrElement, attributes, text

  beforeAll(() => {
    tagOrElement = 'p'
    attributes = {
      class: 'my-1 font-weigh-bold'
    }
    text = 'hello world'

    component = new Component(tagOrElement, attributes, text)
  })

  test('should fail on invalid tag or element', () => {
    const newTagOrElement = null

    expect(() => new Component(newTagOrElement, attributes, text)).toThrowError('tag or element must be a string or HTMLElement')
  })

  test('should fail on invalid text', () => {
    const newText = 123

    expect(() => new Component(tagOrElement, attributes, newText)).toThrowError('text must be a string')
  })

  test('should be an instance of Component', () => {
    expect(component).toBeInstanceOf(Component)
  })

  test('should be an instance of Component', () => {
    expect(component.element.tagName.toLowerCase()).toEqual(tagOrElement)
  })

  test('should have the class passed', () => {
    expect(component.element.className).toEqual(attributes.class)
  })

  test('should have the text passed', () => {
    expect(component.element.textContent).toEqual(text)
  })
})