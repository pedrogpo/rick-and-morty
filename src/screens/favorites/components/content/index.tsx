import * as S from './styles'
import Link from 'next/link'
import { BiChevronLeft } from 'react-icons/bi'
import { Heading, Text } from '~/components/atoms'
import { CharacterCard } from '~/components/molecules'
import { favoritesCharacters } from '~/store/favorites'
import useClientSideStore from '~/hooks/useClientSideStore'
import { observer } from 'mobx-react'

function Content() {
  const store = useClientSideStore(favoritesCharacters)

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
          {store && store.favoritesList.length > 0 ? (
            store.favoritesList.map((character, index) => {
              return (
                <CharacterCard
                  key={index}
                  character={character}
                  isFavorite={store.isFavorite(character)}
                  onFavoriteClick={() => store.toggleFavorite(character)}
                />
              )
            })
          ) : (
            <Text size="lg" weight="medium" color="gray_400">
              You don't have any favorite character yet
            </Text>
          )}
        </S.CharacterCards>
      </S.CharacterList>
    </S.Content>
  )
}

export default observer(Content)
