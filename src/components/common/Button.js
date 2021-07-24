import styled from "styled-components"

export const Button = styled.button`
  border: none;
  padding: 1rem;
  margin: 1rem;
  font-family: arial;
  font-size: 1.5em;
  cursor: pointer;
  white-space: nowrap;
  transition: ease-in 0.5s;
  border-radius: 5px;
  ${props => (props.block ? `display:block; width: 100%;` : ``)}
  &:hover {
    background: #312d6f;
    color: #fff;
  }
`
