import Component from '../Component'

/**
 * Create and set button
 * 
 * @extends Component
 */
class Button extends Component {
  /**
   * @param {Object} attributes 
   * @param {string} value 
   * @param {string} text 
   */
  constructor(attributes, value, text) {
    super('button', attributes, text)

    this.value = value
  }
}

export default Button