import { forwardRef, SelectHTMLAttributes } from 'react'
import { ColorThemeType } from '~/core/constants/theme'
import * as S from './styles'

type SelectAppProps = SelectHTMLAttributes<HTMLSelectElement> & {
  sizeOf?: 'm' | 'l'
  icon?: JSX.Element
  iconSize?: number
  className?: string
  background?: ColorThemeType
  error?: string
}

// eslint-disable-next-line react/display-name
const Select = forwardRef<HTMLSelectElement, SelectAppProps>(
  (
    {
      sizeOf = 'm',
      icon,
      iconSize,
      className,
      background = 'background_700',
      error,
      ...props
    },
    ref
  ) => {
    return (
      <S.SelectBox hasError={!!error} className={className}>
        {icon && (
          <S.SelectIcon sizeOf={sizeOf} iconSize={iconSize}>
            {icon}
          </S.SelectIcon>
        )}
        <S.Select
          background={background}
          iconSize={iconSize}
          sizeOf={sizeOf}
          autoComplete="none"
          {...props}
          ref={ref}
        >
          {props.children}
        </S.Select>
        {error && <S.SelectError>{error}</S.SelectError>}
      </S.SelectBox>
    )
  }
)

export default Select
