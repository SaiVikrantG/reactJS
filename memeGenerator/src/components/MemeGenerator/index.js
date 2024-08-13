import {Component} from 'react'
import {MemeStyle, Form, Meme, SubButton} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGen extends Component {
  state = {
    imgUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].displayText,
    display: null,
  }

  handleChange = event => {
    const {id, value} = event.target

    this.setState({[id]: value})
  }

  generate = event => {
    event.preventDefault()
    const {imgUrl, topText, bottomText, fontSize} = this.state
    // console.log(typeof fontSize)
    // const size = parseInt(fontSize, 10)

    if (imgUrl !== '' && topText !== '' && bottomText !== '') {
      this.setState({
        display: (
          <Meme
            data-testid="meme"
            bgImg="https://assets.ccbp.in/frontend/react-js/nature-img.png"
            Size={fontSize}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <p>{topText}</p>
              <p>{bottomText}</p>
            </div>
          </Meme>
        ),
      })
    }
  }

  render() {
    const {imgUrl, topText, bottomText, fontSize, display} = this.state

    return (
      <MemeStyle>
        <Form onSubmit={this.generate}>
          <h1>Meme Generator</h1>
          <label htmlFor="imgUrl">Image URL</label>
          <input
            type="text"
            id="imgUrl"
            placeholder="Enter the Image URL"
            value={imgUrl}
            onChange={this.handleChange}
          />
          <label htmlFor="topText">Top Text</label>
          <input
            type="text"
            id="topText"
            placeholder="Enter the Top Text"
            value={topText}
            onChange={this.handleChange}
          />
          <label htmlFor="bottomText">Bottom Text</label>
          <input
            type="text"
            id="bottomText"
            placeholder="Enter the Bottom Text"
            value={bottomText}
            onChange={this.handleChange}
          />
          <label htmlFor="fontSize">Font Size</label>
          <select id="fontSize" value={fontSize} onChange={this.handleChange}>
            {fontSizesOptionsList.map(each => (
              <option key={each.optionId} value={each.displayText}>
                {each.displayText}
              </option>
            ))}
          </select>
          <SubButton type="submit">Generate</SubButton>
        </Form>
        {display}
      </MemeStyle>
    )
  }
}

export default MemeGen
