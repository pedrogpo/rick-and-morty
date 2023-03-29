import styled from 'styled-components'

export const CharacterCard = styled.div`
  position: relative;
  width: 100%;

  @media (min-width: 576px) {
    width: calc(50% - 15px); // 20px padding (20*3)/4
    flex: 0 0 auto;
  }

  @media (min-width: 992px) {
    width: calc(33% - 15px); // 20px padding (20*3)/4
    flex: 0 0 auto;
  }

  @media (min-width: 1440px) {
    width: calc(25% - 15px); // 20px padding (20*3)/4
    flex: 0 0 auto;
  }

  height: 200px;
  border-radius: 8px;

  transition: 0.3s ease all;

  cursor: pointer;

  &:hover {
    transform: scale(1.05);

    filter: brightness(1.05);
  }
`

export const CharacterInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  padding: 0.375rem 0.625rem;

  background: rgba(0, 0, 0, 0.65);
  border-radius: 0px 0px 8px 8px;

  backdrop-filter: blur(1px);

  z-index: 1;
`

export const CharacterInfoContent = styled.div`
  // text ellips if it pass 100%
  width: 100%;

  & > * {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export const CharacterInfoButton = styled.button`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  width: 22px;
  height: 22px;

  background: ${({ theme }) => theme.colors.primary_500};
  border-radius: 50px;

  outline: none;
  border: none;

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary_600};
  }

  transition: 0.3s ease all;
`

export const CardUnderlayImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`

export const CardTopInfo = styled.div`
  position: absolute;
  top: 0.625rem;
  left: 0;
  width: 100%;
  padding: 0 0.625rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 22px;

  flex-wrap: wrap;

  z-index: 2;

  gap: 0.25rem;
`

interface IFavoriteButton {
  isFavorite: boolean
}

export const FavoriteButton = styled.div<IFavoriteButton>`
  display: flex;
  padding: 6px;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 100px;

  cursor: pointer;

  transition: 0.3s ease all;

  &:hover {
    background: rgba(0, 0, 0, 0.85);

    svg {
      fill: #fcc400;
    }
  }

  svg {
    fill: #fcc400;
    fill: ${({ isFavorite, theme }) => !isFavorite && theme.colors.gray_100};
  }
`

interface ICharacterStatus {
  status: string
}

export const CharacterStatus = styled.div<ICharacterStatus>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 16px;

  ${({ status }) =>
    status === 'Alive' &&
    `
    background: rgba(29, 93, 48, 0.6);
  `}
  ${({ status }) =>
    status === 'Dead' &&
    `
    background: rgba(93, 29, 29, 0.6);
  `}
  ${({ status }) =>
    status === 'unknown' &&
    `
    background: rgba(20, 20, 20, 0.6);
  `}

  backdrop-filter: blur(10px);

  height: 22px;

  border-radius: 5px;

  font-size: ${({ theme }) => theme.typography.text.xs};
`

export const CharacterGender = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 6px;

  background: rgba(20, 21, 26, 0.54);
  backdrop-filter: blur(5px);

  border-radius: 100px;
`
