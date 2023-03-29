import styled from 'styled-components'
import { ColorThemeType, TitleFontSize, WeightFont } from '~/core/constants/theme'

interface HeadingProps {
  size: TitleFontSize
  color: ColorThemeType
  weight: WeightFont
}

export const Heading = styled.h1<HeadingProps>`
  color: ${({ theme, color }) => theme.colors[color]};
  font-size: ${({ theme, size }) => theme.typography.heading[size]};
  font-weight: ${({ theme, weight }) => theme.typography.weight[weight]};
  margin-bottom: 0;
  transition: 0.3s ease all;
`
