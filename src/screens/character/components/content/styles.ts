import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  margin-top: 4.25rem;
`

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

export const MainContainer = styled.div`
  margin-top: 2.5rem;

  width: 100%;
  background: ${({ theme }) => theme.colors.background_700};
  border-radius: 24px;

  padding: 2.75rem;

  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 992px) {
    gap: 2rem;
  }
`

export const CharacterInfoCol = styled.div`
  max-width: 100%;
  width: 100%;

  @media (min-width: 992px) {
    width: 65%;
    flex: 0 0 auto;
    padding-right: 0.75rem;
  }

  @media (min-width: 1440px) {
    width: 58%;
    flex: 0 0 auto;
    padding-right: 0.75rem;
  }
`

export const CharacterEpisodesCountCol = styled.div`
  max-width: 100%;
  width: 100%;

  @media (min-width: 992px) {
    width: calc(100% - 65%);
    flex: 0 0 auto;
    padding-left: 0.75rem;
  }

  @media (min-width: 1440px) {
    width: calc(100% - 58%);
    flex: 0 0 auto;
    padding-left: 0.75rem;
  }
`

/// .....................

export const CharacterEpisodeCount = styled.div`
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
