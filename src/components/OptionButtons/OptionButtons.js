import Component from '../Component'
import Button from '../Button/Button'

/**
 * Create and set option buttons
 */
class OptionButtons extends Component {
  /**
   * @param {string} tag 
   * @param {Object} attributes 
   * @param {Array} options 
   * @param {Canvas} canvas 
   */
  constructor(tag, attributes, options, canvas) {
    super(tag, attributes)

    this.canvas = canvas
    
    this.canvas.on('mouseup', this.drawEnd.bind(this))

    this.buttons = options.map(option => {
      const button = new Button({ type: 'button', class: 'button' }, option, option)

      button.on('click', this[option].bind(this))

      this[option + 'Button'] = button

      this.element.appendChild(button.element)

      return button
    })

    this.undoButton.element.disabled = true
    this.redoButton.element.disabled = true
  }

  /**
   * Enable undo button and disable redo button
   */
  drawEnd() {
    this.undoButton.element.disabled = false
    this.redoButton.element.disabled = true
  }

  /**
   * Undo canvas line
   */
  undo() {
    if (this.canvas.linesDone.length) {
      this.canvas.linesUndone.push(this.canvas.linesDone.pop())

      if(!this.canvas.linesDone.length) {
        this.undoButton.element.disabled = true
      }

      this.redoButton.element.disabled = false

      this.canvas.redraw()
    }
  }

  /**
   * Redo canvas line
   */
  redo() {
    if (this.canvas.linesUndone.length) {
      this.canvas.linesDone.push(this.canvas.linesUndone.pop())

      this.undoButton.element.disabled = false

      if(!this.canvas.linesUndone.length) {
        this.redoButton.element.disabled = true
      }

      this.canvas.redraw()
    }
  }
}

export default OptionButtons