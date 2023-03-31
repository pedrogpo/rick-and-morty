import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  margin-top: 4.25rem;
`

// that shit should be an component on atomic design lol

export const BackButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const BackButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.25rem;
  height: 3.25rem;

  border-radius: 10px;

  background: ${({ theme }) => theme.colors.background_600};
`

export const CharacterList = styled.div`
  margin-top: 2rem;

  background-color: ${({ theme }) => theme.colors.background_500};

  display: flex;
  flex-direction: column;
  padding: 2rem 3rem 3rem;
  gap: 1.5rem;

  border-radius: 7px;
`

export const CharacterCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
`
