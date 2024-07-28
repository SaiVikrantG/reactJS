import styled from 'styled-components'

export const DirectionButton = styled.button`
  color: #1e293b;
  background-color: ${props => (props.active ? '#ededed' : '#334155')};
  opacity: ${props => (props.active ? 1 : 0.5)};
  padding: 15px;
  width: 100%;
`

export const DirectionItem = styled.li`
  width: 80px;
  margin: 5px;
`
