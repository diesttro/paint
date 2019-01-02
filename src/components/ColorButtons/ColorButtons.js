import Component from '../Component'
import Button from '../Button/Button'

/**
 * Create and set color buttons
 * @extends Component
 */
class ColorButtons extends Component {
  /**
   * @param {string|HTMLElement} tag 
   * @param {Object} attributes 
   * @param {Object} config 
   * @param {Canvas} canvas 
   */
  constructor(tag, attributes, config, canvas) {
    super(tag, attributes)

    const { colors, defaultColor } = config

    this.defaultColor = defaultColor
    this.canvas = canvas

    this.buttons = colors.map(color => {
      const button = new Button({ type: 'button', class: 'button color-' + color.slice(1) }, color)
      
      button.on('click', this.setCanvasColor.bind(this))
      
      if (color === this.defaultColor) {
        this.buttonSelected = button

        button.element.classList.add('selected')
      }

      this.element.appendChild(button.element)

      return button
    })
  }

  /**
   * Set color button selected and change canvas color
   * @param {MouseEvent} event 
   * @param {Button} button 
   */
  setCanvasColor(event, button) {
    this.buttonSelected.element.classList.remove('selected')

    this.buttonSelected = button

    this.buttonSelected.element.classList.add('selected')

    this.canvas.color = this.buttonSelected.value
  }
}

export default ColorButtons