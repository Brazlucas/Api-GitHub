import styled from 'styled-components';

export const UserCard = styled.div`
  background-color: #2b3566;
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`

export const UserLink = styled.div`
  text-align: center;
  background-color: #644aff;
  padding: 1rem;
  border-radius: 5px;
  opacity: .8;
  transition: .3s;

  &:hover {
    opacity: 1;
  }
`

export const ImgCard = styled.img`
  width: 140px;
  height: 140px;
  border: 4px solid #644aff;
  border-radius: 50%;
`

export const Location = styled.span`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`

export const LocationSvg = styled.img`
  fill: #4ed8c7;
  font-size: 1.5rem;
`

export const LocationText = styled.span`
  color: #9da5d1;
  font-weight: bold;
`

export const StatsContainer = styled.div`
  display: flex;
`

export const Stats = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: .4rem;

  &:first-child {
    border-right: 1px solid #9da5d1;
  }
`

export const Number = styled.div`
  background-color: #4ed8c7;
  padding: .2rem .4rem;
  border-radius: 3px;
  display: flex;
  justify-content: center;
`