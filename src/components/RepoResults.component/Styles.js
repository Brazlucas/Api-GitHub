import styled from 'styled-components';

export const UserCard = styled.div`
  background-color: #0E1129;
  border-radius: 1rem;
  padding: 2rem;
  width: 90%;
  border-style: solid;
  border-color: #FFF;
  border-width: 1px;
  margin: .5rem;
`
export const Items = styled.div`
  padding: 1rem;
`

export const CountContainer = styled.div`
  display: flex;
  gap: 10px;
  `

export const Count = styled.div`
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  border: 1px solid #cfcfcf;
  padding: 8px;
  width: 80px;
  height: 40px;
  background: aqua;
  background: -moz-linear-gradient(left, aqua 30%, #0E1129 50%);
  background: -webkit-linear-gradient(left, aqua 30%, #0E1129 50%);
  background: linear-gradient(to right, aqua 30%, #0E1129 50%);
`

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 100% !important;
  margin-top: 20px !important;
  cursor: pointer;
  width: 140px;
  height: 40px;
  background-color: #2b3566;
  padding: 1rem;
  border-radius: 5px;
  opacity: .8;
  transition: .3s;

  &:hover {
    opacity: 1;
  }
  `