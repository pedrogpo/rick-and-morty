import styled from 'styled-components'

export const FilterCharacters = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Divider = styled.div`
  width: 100%;
  height: 5px;
  background: ${({ theme }) => theme.colors.background_800};
`
