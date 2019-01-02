import Component from '../Component'

/**
 * Create and set canvas
 * @extends Component
 */
class Canvas extends Component {
  /**
   * @param {Object} config
   */
  constructor(config) {
    super('canvas')

    const { canvas: { width, height }, defaultColor, defaultSize } = config

    if (typeof width !== 'number') throw Error('width must be a number')
    if (typeof height !== 'number') throw Error('height must be a number')
    if (typeof defaultColor !== 'string' || defaultColor.indexOf('#') !== 0 || defaultColor.trim().length < 4) throw Error('default color must be a hex string')
    if (typeof defaultSize !== 'number') throw Error('default size must be a number')

    this.width = width
    this.height = height
    this.color = defaultColor
    this.size = defaultSize
    
    this.context = this.element.getContext('2d')

    this.context.canvas.width = width
    this.context.canvas.height = height

    this.line = []
    this.linesDone = []
    this.linesUndone = []
    this.position = {}
    
    this.on('mousedown', this.drawStart.bind(this))
    this.on('mousemove', this.draw.bind(this))
    this.on('mouseup', this.drawEnd.bind(this))
  }

  /**
   * Starts drawing
   * @param {MouseEvent} event 
   */
  drawStart(event) {
    this.setPosition(event)
    
    this.draw(event)
  }

  /**
   * Sets the user mouse position
   * @param {MouseEvent} event 
   */
  setPosition(event) {
    this.position.x = event.offsetX
    this.position.y = event.offsetY

    this.line.push({ ...this.position })
  }
  
  /**
   * Draw if the mouse left button is pressed
   * @param {MouseEvent} event 
   */
  draw(event) {
    if (event.buttons !== 1) return

    this.context.beginPath()

    this.context.lineCap = 'round'
    this.context.lineWidth = this.size
    this.context.strokeStyle = this.color

    this.context.moveTo(this.position.x, this.position.y)

    this.setPosition(event)

    this.context.lineTo(this.position.x, this.position.y)

    this.context.stroke()
  }

  /**
   * Redraw the canvas with lines done
   */
  redraw() {
    this.context.clearRect(0, 0, this.width, this.height)

    this.linesDone.forEach(line => {
      const { size, color, linePoints } = line

      linePoints.forEach((point, index) => {
        this.context.beginPath()

        this.context.lineCap = 'round'
        this.context.lineWidth = size
        this.context.strokeStyle = color
        
        this.context.moveTo(point.x, point.y)

        if (linePoints[index + 1]) {
          this.context.lineTo(linePoints[index + 1].x, linePoints[index + 1].y)

          this.context.stroke()
        }
      })
    })
  }

  /**
   * Ends drawing
   */
  drawEnd() {
    this.linesUndone = []

    this.linesDone.push({
      size: this.size,
      color: this.color,
      linePoints: [ ...this.line ]
    })

    this.line = []
  }
}

export default Canvas