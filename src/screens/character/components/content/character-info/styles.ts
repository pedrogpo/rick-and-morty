import styled, { css } from 'styled-components'

export const CharacterInfo = styled.div`
  display: flex;

  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`

export const CharacterInfoPicture = styled.div`
  max-width: 80%;
  width: 50%;
  height: auto;

  margin: 0 auto;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 24px;
  }

  @media (min-width: 768px) {
    width: 200px;
    height: 200px;

    min-width: 200px;
    min-height: 200px;

    margin: 0;
  }
`

export const CharacterInfoDetails = styled.div`
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 6px;
`

export const CharacterInfoDetailsHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const CharacterInfoDetailsBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const CharacterOriginInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;

  flex: 1;

  gap: 10px;

  background-color: ${({ theme }) => theme.colors.background_800};
  border-radius: 8px;

  margin-top: 2rem;
`

export const CharacterButtons = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

interface CharacterFavorited {
  favorited: boolean
}

// TODO: this should be a button in atoms

export const CharacterFavoriteButton = styled.button<CharacterFavorited>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 1.25rem;
  gap: 10px;

  background: ${({ theme }) => theme.colors.background_500};
  color: ${({ theme }) => theme.colors.gray_400};
  cursor: pointer;

  ${({ favorited, theme }) =>
    favorited &&
    css`
      &:hover {
        filter: brightness(1.1);
      }
    `}

  ${({ favorited }) =>
    !favorited &&
    css`
      background: rgba(252, 196, 0, 0.05);
      color: #fcc400;
    `}

  border-radius: 7px;

  outline: none;
  border: none;

  font-size: ${({ theme }) => theme.typography.text.lg};
  font-weight: ${({ theme }) => theme.typography.weight.medium};

  transition: 0.3s ease all;
`

export const CharacterWikiButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 1.25rem;
  gap: 10px;

  background: ${({ theme }) => theme.colors.primary_500};
  color: ${({ theme }) => theme.colors.gray_100};
  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }

  border-radius: 7px;

  outline: none;
  border: none;

  font-size: ${({ theme }) => theme.typography.text.lg};
  font-weight: ${({ theme }) => theme.typography.weight.medium};

  transition: 0.3s ease all;
`
