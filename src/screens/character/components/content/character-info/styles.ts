import styled from 'styled-components'

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

  gap: 10px;

  background-color: ${({ theme }) => theme.colors.background_800};
  border-radius: 8px;

  margin-top: 2rem;
`
