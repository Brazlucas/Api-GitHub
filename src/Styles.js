import styled from "styled-components";

export const Appstyled = styled.div `
  max-width: 500px;
  margin: 0 auto;
`

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
`

export const Button = styled.div`
  margin-right: 100% !important;
  cursor: pointer;
  text-align: center;
  width: 100px;
  background-color: #2b3566;
  padding: 1rem;
  border-radius: 5px;
  opacity: .8;
  transition: .3s;

  &:hover {
    opacity: 1;
  }
`

export const Footer = styled.div`
  margin-top: 32%;
  display: flex;
  justify-content: center;
  align-items: center;

& p {
  color: #9da5d1;
}
`