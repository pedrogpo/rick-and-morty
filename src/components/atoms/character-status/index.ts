import styled from 'styled-components'

interface ICharacterStatus {
  status: string
}

export const CharacterStatus = styled.div<ICharacterStatus>`
  color: white;

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

  border-radius: 5px;

  height: 100%;

  font-size: ${({ theme }) => theme.typography.text.xs};
`
