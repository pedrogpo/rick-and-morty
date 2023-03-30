import styled from 'styled-components'

export const CharacterEpisodeContent = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;

  background: ${({ theme }) => theme.colors.background_800};
  border-radius: 8px;
`

export const CharacterEpisodeCards = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`

export const CharacterEpisodeCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 30px;
  width: 65px;

  color: ${({ theme }) => theme.colors.primary_500};
  background-color: ${({ theme }) => theme.colors.primary_800};

  font-size: ${({ theme }) => theme.typography.text.sm};

  border-radius: 5px;
`
