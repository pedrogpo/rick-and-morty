import { SelectHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import { ColorThemeType } from '~/core/constants/theme'

const sizeVariants = (size: string) => {
  return {
    m: css`
      padding: 0.85rem 0.75rem;
      font-size: ${({ theme }) => theme.typography.text.sm};
      font-weight: ${({ theme }) => theme.typography.weight.semibold};
    `,
    l: css`
      padding: 1.1rem 1.75rem;
      font-size: ${({ theme }) => theme.typography.text.md};
      font-weight: ${({ theme }) => theme.typography.weight.semibold};
    `,
  }[size]
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>, SelectIconProps {
  background: ColorThemeType
}

interface SelectIconProps {
  sizeOf: 'm' | 'l'
  iconSize?: number
}

export const Select = styled.select<SelectProps>`
  border-radius: 7px;
  width: 100%;
  outline: none;
  border: 1px solid transparent;

  ${({ sizeOf }) => sizeVariants(sizeOf)}

  ${({ sizeOf, iconSize }) =>
    `padding-left: calc(2.15rem + ${
      iconSize ? `${iconSize}px` : sizeOf === 'm' ? '22px' : '24px'
    });`}

  ${({ theme, background }) => css`
    background: url('/icons/arrow-down.png') no-repeat right ${theme.colors[background]};
    background-position-x: 95%;
    border: 1px solid transparent;
    color: ${({ theme }) => theme.colors.gray_500};
  `}

  background-size: 8px;

  height: 51px;

  -webkit-appearance: none;

  &:disabled {
    cursor: text;
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.gray_800};
  }

  transition: 0.3s ease all;
`

interface SelectBoxInterface {
  hasError: boolean
}

export const SelectBox = styled.div<SelectBoxInterface>`
  position: relative;
  width: 100%;

  ${({ hasError }) =>
    hasError &&
    css`
      margin-bottom: 1rem;
    `}
`

export const SelectIcon = styled.span<SelectIconProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  line-height: 0;
  z-index: 1;

  left: 20px;

  svg {
    color: ${({ theme }) => theme.colors.gray_500};

    ${({ sizeOf, iconSize }) =>
      css`
        width: ${iconSize ? `${iconSize}px` : sizeOf === 'm' ? '22px' : '24px'};
        height: ${iconSize ? `${iconSize}px` : sizeOf === 'm' ? '22px' : '24px'};
      `}
  }
`

export const SelectError = styled.div`
  position: absolute;
  margin-top: 0.5rem;

  color: red;
  font-size: ${({ theme }) => theme.typography.text.xs};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
`
