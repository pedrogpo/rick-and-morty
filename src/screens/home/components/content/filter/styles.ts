import styled from 'styled-components'

export const FilterCharacters = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Divider = styled.div`
  width: 100%;
  height: 5px;
  background: ${({ theme }) => theme.colors.background_800};
`

export const FilterCards = styled.div`
  margin-top: 1rem;

  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`

export const FilterCard = styled.div`
  width: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.25rem 1rem;

  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.primary_800};
  color: ${({ theme }) => theme.colors.primary_500};

  font-size: ${({ theme }) => theme.typography.text.sm};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
`
