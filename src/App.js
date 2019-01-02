import Component from './components/Component'
import Canvas from './components/Canvas/Canvas'
import OptionButtons from './components/OptionButtons/OptionButtons'
import ColorButtons from './components/ColorButtons/ColorButtons'
import SizeButtons from './components/SizeButtons/SizeButtons'
import config from './config'

import './normalize.css'
import './style.sass'

/**
 * Prepare and initialize app
 * 
 * @extends Component
 */
class App extends Component {
  constructor() {
    super('main', {class: 'app'})

    const { canvas, options, colors, sizes, defaultColor, defaultSize } = config

    this.canvas = new Canvas(
      { canvas, defaultColor, defaultSize }
    )

    const canvasContainer = new Component(
      'section',
      { class: 'canvas' }
    ).addChild(this.canvas.element)

    this.element.appendChild(canvasContainer.element)

    const toolsContainer = new Component(
      'section',
      { class: 'tools' }
    )

    this.optionButtons = new OptionButtons(
      'section',
      { class: 'toolbox' },
      options,
      this.canvas
    )

    const optionButtonsContainer = new Component(
      'section',
      { class: 'options' }
    )
    .addChild('h3', {}, 'Options')
    .addChild(this.optionButtons.element)

    this.colorButtons = new ColorButtons(
      'section',
      { class: 'toolbox' },
      { colors, defaultColor },
      this.canvas
    )

    const colorButtonsContainer = new Component(
      'section',
      { class: 'colors' }
    )
    .addChild('h3', {}, 'Colors')
    .addChild(this.colorButtons.element)

    this.sizeButtons = new SizeButtons(
      'section',
      { class: 'toolbox' },
      { sizes, defaultSize },
      this.canvas
    )

    const sizeButtonsContainer = new Component(
      'section',
      { class: 'sizes' }
    )
    .addChild('h3', {}, 'Sizes')
    .addChild(this.sizeButtons.element)

    toolsContainer
      .addChild(optionButtonsContainer.element)
      .addChild(colorButtonsContainer.element)
      .addChild(sizeButtonsContainer.element)

    this.element.appendChild(toolsContainer.element)
  }
}

export default App