import {Component} from 'react'
import {
  MainContainer,
  Heading,
  Para,
  ButtonsContainer,
  GenerateButton,
  ColorValuesContainer,
  ColorInputsContainer,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].value,
    activeColor1: '#8ae323',
    activeColor2: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeColor1 = event => {
    this.setState({activeColor1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({activeColor2: event.target.value})
  }

  onGenerateGradient = () => {
    const {activeDirection, activeColor1, activeColor2} = this.state
    this.setState({
      gradientValue: `to ${activeDirection}, ${activeColor1}, ${activeColor2}`,
    })
  }

  onChangeDirection = value => {
    this.setState({activeDirection: value})
  }

  render() {
    const {
      activeDirection,
      activeColor1,
      activeColor2,
      gradientValue,
    } = this.state

    return (
      <MainContainer
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Para>Choose Direction</Para>
        <ButtonsContainer>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              gradientButtonDetails={eachItem}
              key={eachItem.directionId}
              onChangeDirection={this.onChangeDirection}
              active={eachItem.value === activeDirection}
            />
          ))}
        </ButtonsContainer>
        <Para>Pick the Colors</Para>
        <ColorValuesContainer>
          <Para>{activeColor1}</Para>
          <Para>{activeColor2}</Para>
        </ColorValuesContainer>
        <ColorInputsContainer>
          <input
            type="color"
            value={activeColor1}
            onChange={this.onChangeColor1}
          />
          <input
            type="color"
            value={activeColor2}
            onChange={this.onChangeColor2}
          />
        </ColorInputsContainer>
        <GenerateButton type="button" onClick={this.onGenerateGradient}>
          Generate
        </GenerateButton>
      </MainContainer>
    )
  }
}

export default GradientGenerator
