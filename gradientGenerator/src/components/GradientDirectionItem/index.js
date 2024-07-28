// Write your code here
import {DirectionButton, DirectionItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientButtonDetails, onChangeDirection, active} = props
  const {displayText, value} = gradientButtonDetails

  const onClickDirectionItem = () => {
    onChangeDirection(value)
  }

  return (
    <DirectionItem>
      <DirectionButton
        type="button"
        active={active}
        onClick={onClickDirectionItem}
      >
        {displayText}
      </DirectionButton>
    </DirectionItem>
  )
}

export default GradientDirectionItem
