import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`

export const CharactersList = styled.div`
  background-color: ${({ theme }) => theme.colors.background_500};

  display: flex;
  flex-direction: column;
  padding: 2rem 3rem 3rem;
  gap: 1.5rem;

  border-radius: 7px 7px 0 0;

  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 77.5px - 52px - 64px);
    height: auto;
  }
`

export const CharactersListCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
`

export const CharactersListHead = styled.div``
