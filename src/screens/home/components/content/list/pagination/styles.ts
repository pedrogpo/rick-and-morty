import styled, { css } from 'styled-components'

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`

interface IPaginationButton {
  active?: boolean
  pageLoading?: boolean
}

export const PaginationButton = styled.button<IPaginationButton>`
  background: ${({ theme }) => theme.colors.background_500};
  color: ${({ theme }) => theme.colors.gray_300};
  border-radius: 5px;
  padding: 0.25rem 0.75rem;

  font-size: ${({ theme }) => theme.typography.text.md};
  font-weight: ${({ theme }) => theme.typography.weight.medium};

  ${({ active }) =>
    active &&
    css`
      background: ${({ theme }) => theme.colors.primary_500};
      color: ${({ theme }) => theme.colors.gray_100};
    `}

  outline: none;
  border: none;

  ${({ active, pageLoading }) =>
    !active &&
    !pageLoading &&
    css`
      cursor: pointer;
      &:hover {
        background: ${({ theme }) => theme.colors.gray_800};
      }
    `}

  transition: 0.3s ease all;

  ${({ pageLoading }) =>
    pageLoading &&
    css`
      cursor: default;
    `}

  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoadingButton = styled.div`
  background: ${({ theme }) => theme.colors.background_500};
  color: ${({ theme }) => theme.colors.gray_300};
  border-radius: 5px;
  padding: 0.25rem 0.75rem;
  gap: 0.625rem;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    animation: spin 0.75s ease-in-out infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`
