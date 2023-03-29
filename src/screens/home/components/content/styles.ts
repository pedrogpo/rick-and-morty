import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  margin-top: 3.25rem;
  display: flex;
  flex-wrap: wrap;
`

export const FilterContainer = styled.div`
  max-width: 100%;
  width: 100%;

  @media (min-width: 768px) {
    width: 33.33333333%;
    flex: 0 0 auto;
  }

  padding-right: 0.75rem;
`

export const ListContainer = styled.div`
  max-width: 100%;
  width: 100%;

  @media (min-width: 768px) {
    width: 66.66666667%;
    flex: 0 0 auto;
  }

  padding-left: 0.75rem;
`
