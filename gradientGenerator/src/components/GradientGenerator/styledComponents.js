// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 30px;
  min-height: 100vh;
  background-image: linear-gradient(${props => props.gradientValue});
`
export const Heading = styled.h1`
  color: #ffffff;
`

export const Para = styled.p`
  color: #ffffff;
`
export const ButtonsContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ColorInputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`

export const GenerateButton = styled.button`
  background-color: #00c9b7;
  width: 120px;
  height: 40px;
  border: 0px;
  border-radius: 10px;
  color: #000000;
  margin-top: 30px;
  cursor: pointer;
`
export const ColorValuesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 10px;
  align-items: center;
  width: 200px;
`
