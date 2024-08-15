import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #25262c;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TextEditorContainer = styled.div`
  background-color: #1b1c22;
  height: 80vh;
  display: flex;
  flex-direction: row;
  width: 80%;
  padding: 20px;
`
export const BannerLeftPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
`
export const TextEditorHeading = styled.h1`
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
`
export const TextEditorImage = styled.img`
  height: 360px;
  margin-top: 40px;
`
export const BannerRightPart = styled.div`
  background-color: #25262c;
  border: 2px solid #334155;
  width: 50vw;
  border-radius: 10px;
`
export const InputStylesContainer = styled.ul`
  display: flex;
  padding: 5px 10px;
`
export const Button = styled.button`
  background-color: transparent;
  border-style: none;
  outline: none;
  cursor: pointer;
  color: ${props => (props.color ? '#faff00' : '#f1f5f9')};
`
export const Separator = styled.hr`
  border: solid 1px #334155;
  margin: 0;
`
export const TextEditorInput = styled.textarea`
  background-color: transparent;
  border-style: none;
  outline: none;
  height: 63vh;
  width: 40vw;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
  color: #f8fafc;
  font-family: 'Roboto';
  padding: 16px;
  font-size: 24px;
  margin-top: 20px;
`
export const ListItem = styled.li`
  list-style-type: none;
`
