import { Characters } from '~/interfaces/api/rickandmorty/character'
import FilterCharacters from './filter'
import CharactersList from './list'
import * as S from './styles'

export default function Content({ charactersData }: { charactersData: Characters }) {
  return (
    <S.Content>
      <S.FilterContainerCol>
        <FilterCharacters />
      </S.FilterContainerCol>
      <S.ListContainerCol>
        <CharactersList startCharacters={charactersData?.results} />
      </S.ListContainerCol>
    </S.Content>
  )
}
