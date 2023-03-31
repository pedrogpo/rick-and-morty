import Link from 'next/link'
import { BiChevronLeft } from 'react-icons/bi'
import { Heading, Text } from '~/components/atoms'
import { CharacterCard } from '~/components/molecules'
import { favoritesCharacters } from '~/store/favorites'
import * as S from './styles'

export default function Content() {
  return (
    <S.Content>
      <Link href="/">
        <S.BackButtonContainer>
          <S.BackButton>
            <BiChevronLeft color="white" size={36} />
          </S.BackButton>
          <Text size="xl" weight="semibold" color="gray_100">
            Go back
          </Text>
        </S.BackButtonContainer>
      </Link>
      <S.CharacterList>
        <Heading size="lg" color="gray_100" weight="bold">
          My Favorites
        </Heading>
        <S.CharacterCards>
          {favoritesCharacters.favoritesList.map((character) => {
            return (
              <CharacterCard
                character={character}
                isFavorite={true}
                onFavoriteClick={() => favoritesCharacters.toggleFavorite(character)}
              />
            )
          })}
        </S.CharacterCards>
      </S.CharacterList>
    </S.Content>
  )
}
