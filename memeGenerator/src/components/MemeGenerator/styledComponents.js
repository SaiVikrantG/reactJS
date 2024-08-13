import styled from 'styled-components'

export const MemeStyle = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 70%;
  height: 70%;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-family: Roboto;
  width: 40%;
`
export const SubButton = styled.button`
  color: white;
  background-color: blue;
  padding: 10px;
  width: 20%;
  border-type: solid;
  border-width: 0px;
  border-radius: 10px;
  margin-top: 10px;
`

export const Meme = styled.div`
  width: 40%;
  background-size: cover;
  color: white;
  font-size: ${props => {
    console.log(typeof props.Size)

    return props.Size
  }}px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nature-img.png');
`
