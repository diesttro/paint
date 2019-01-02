import Component from '../Component'
import Button from '../Button/Button'

/**
 * Create and set size buttons
 */
class SizeButtons extends Component {
  /**
   * @param {string} tag 
   * @param {Object} attributes 
   * @param {Object} config 
   * @param {Canvas} canvas 
   */
  constructor(tag, attributes, config, canvas) {
    super(tag, attributes)

    const { sizes, defaultSize } = config

    this.defaultSize = defaultSize
    
    this.canvas = canvas

    this.buttons = sizes.map(size => {
      const button =  new Button({ type: 'button', class: 'button button-line-width' }, size)

      button.on('click', this.setCanvasSize.bind(this))

      if (size === this.defaultSize) {
        this.buttonSelected = button

        button.element.classList.add('selected')
      }

      button.addChild('span', { class: 'line-width line-width-' + size })

      this.element.appendChild(button.element)

      return button
    })
  }

  /**
   * Set size button selected and change canvas line width
   * @param {MouseEvent} event 
   * @param {Button} button 
   */
  setCanvasSize(event, button) {
    this.buttonSelected.element.classList.remove('selected')

    this.buttonSelected = button

    this.buttonSelected.element.classList.add('selected')

    this.canvas.size = this.buttonSelected.value
  }
}

export default SizeButtons