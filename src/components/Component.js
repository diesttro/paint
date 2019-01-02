/**
 * Create HTMLElement and/or set it
 */
class Component {
  /**
   * @param {string|HTMLElement} tagOrElement 
   * @param {Object} attributes
   * @param {string} text 
   */
  constructor(tagOrElement, attributes, text) {
    if (typeof tagOrElement === 'string') {
      this.element = document.createElement(tagOrElement)
    } else if (tagOrElement instanceof HTMLElement) {
      this.element = tagOrElement
    } else {
      throw Error('tag or element must be a string or HTMLElement')
    }

    if (attributes) {
      if (attributes instanceof Object) {
        const elementAttributes = Object.entries(attributes)

        elementAttributes.forEach(attribute => {
          const [name, value] = attribute

          this.addAttribute(name, value)
        })
      } else {
        throw Error('attributes must be an object')
      }
    }

    if (text) {
      if (typeof text !== 'string') throw Error('text must be a string')

      this.element.appendChild(document.createTextNode(text))
    }
  }

  /**
   * Add child to the element
   * @param {string|HTMLElement} tagOrElement 
   * @param {Object} attributes
   * @param {string} text
   */
  addChild(tagOrElement, attributes, text) {
    const child = new Component(tagOrElement, attributes, text)

    this.element.appendChild(child.element)

    return this
  }
  
  /**
   * Add attribute to the element
   * @param {string} name 
   * @param {string} value 
   */
  addAttribute(name, value) {
    this.element.setAttribute(name, value)
  }

  /**
   * Remove attribute to the element
   * @param {string} name 
   */
  removeAttribute(name) {
    this.element.removeAttribute(name)
  }

  /**
   * Add event listener to the element
   * @param {string} event 
   * @param {Function} callback 
   */
  on(event, callback) {
    this.element.addEventListener(event, function(event) {
      callback(event, this)
    }.bind(this))
  }

  // toString() {
  //   return this.element.outerHTML
  // }
}

export default Component