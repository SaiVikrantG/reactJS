import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  MainContainer,
  TextEditorContainer,
  BannerLeftPart,
  TextEditorHeading,
  TextEditorImage,
  BannerRightPart,
  InputStylesContainer,
  Button,
  Separator,
  TextEditorInput,
  ListItem,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    isItalicActive: false,
    isBoldActive: false,
    isUnderlineActive: false,
    textInputValue: '',
  }

  changeBoldStatus = () => {
    this.setState(prevState => ({isBoldActive: !prevState.isBoldActive}))
  }

  changeItalicStatus = () => {
    this.setState(prevState => ({isItalicActive: !prevState.isItalicActive}))
  }

  changeUnderlineStatus = () => {
    this.setState(prevState => ({
      isUnderlineActive: !prevState.isUnderlineActive,
    }))
  }

  onChangeText = event => {
    this.setState({textInputValue: event.target.value})
  }

  render() {
    const {
      isItalicActive,
      isBoldActive,
      isUnderlineActive,
      textInputValue,
    } = this.state

    return (
      <MainContainer>
        <TextEditorContainer>
          <BannerLeftPart>
            <TextEditorHeading>Text Editor</TextEditorHeading>
            <TextEditorImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </BannerLeftPart>
          <BannerRightPart>
            <InputStylesContainer>
              <ListItem>
                <Button
                  type="button"
                  onClick={this.changeBoldStatus}
                  data-testid="bold"
                  color={isBoldActive}
                >
                  <VscBold size={30} />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  type="button"
                  onClick={this.changeItalicStatus}
                  data-testid="italic"
                  color={isItalicActive}
                >
                  <GoItalic size={30} />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  type="button"
                  onClick={this.changeUnderlineStatus}
                  data-testid="underline"
                  color={isUnderlineActive}
                >
                  <AiOutlineUnderline size={30} />
                </Button>
              </ListItem>
            </InputStylesContainer>
            <Separator />
            <TextEditorInput
              type="text"
              value={textInputValue}
              onChange={this.onChangeText}
              bold={isBoldActive}
              italic={isItalicActive}
              underline={isUnderlineActive}
            />
          </BannerRightPart>
        </TextEditorContainer>
      </MainContainer>
    )
  }
}

export default TextEditor
