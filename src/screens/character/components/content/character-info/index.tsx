import * as S from './styles'
import Image from 'next/image'
import { Heading, Text } from '~/components/atoms'
import { Character } from '~/interfaces/api/rickandmorty/character'
import { Location } from '~/interfaces/api/rickandmorty/location'
import { BiStar } from 'react-icons/bi'

import { observer } from 'mobx-react'
import { favoritesCharacters } from '~/store/favorites'

const FavoriteButton = observer(({ characterData }: { characterData: Character }) => {
  return (
    <S.CharacterFavoriteButton
      onClick={() => {
        favoritesCharacters.toggleFavorite(characterData)
      }}
      favorited={favoritesCharacters.isFavorite(characterData)}
    >
      <BiStar size={18} />
      {favoritesCharacters.isFavorite(characterData)
        ? 'Remove from favorites'
        : 'Add to favorites'}
    </S.CharacterFavoriteButton>
  )
})

export default function CharacterInfoContent({
  characterData,
  originData,
}: {
  characterData: Character
  originData: Location
}) {
  return (
    <>
      <S.CharacterInfo>
        <S.CharacterInfoPicture>
          <Image
            src={characterData.image}
            alt={`${characterData.name} - ${characterData.species} - ${characterData.status}`}
            width={240}
            height={240}
          />
        </S.CharacterInfoPicture>
        <S.CharacterInfoDetails>
          <S.CharacterInfoDetailsHead>
            <Heading size="lg" weight="bold" color="gray_100">
              {characterData.name}
            </Heading>
            <Text size="lg" weight="medium" color="gray_100">
              {`Origin: ${characterData.origin.name} - Status: `}
              <Text as="span" color="primary_500">
                {characterData.status}
              </Text>
            </Text>
            <Text size="lg" weight="medium" color="gray_100">
              Species:{' '}
              <Text as="span" color="primary_500">
                {characterData.species}
              </Text>
            </Text>
          </S.CharacterInfoDetailsHead>
          <S.CharacterInfoDetailsBottom>
            <Heading size="sm" weight="bold" color="gray_100">
              Last know location endpoint:
            </Heading>
            <Text size="lg" weight="medium" color="gray_300">
              {characterData.location.name}
            </Text>
          </S.CharacterInfoDetailsBottom>
        </S.CharacterInfoDetails>
      </S.CharacterInfo>
      <S.CharacterOriginInfo>
        <Heading size="sm" color="gray_100" weight="bold">
          More info about the Origin Location:
        </Heading>
        <Text size="lg" color="gray_300" weight="medium">
          Name: {originData?.name || 'unknown'}
          <br />
          Type: {originData?.type || 'unknown'}
          <br />
          Dimension: {originData?.dimension || 'unknown'}
        </Text>
      </S.CharacterOriginInfo>
      <S.CharacterButtons>
        <FavoriteButton characterData={characterData} />
        <S.CharacterWikiButton
          href={`https://rickandmorty.fandom.com/wiki/${characterData.name.replace(
            ' ',
            '_'
          )}`}
          target="_blank"
        >
          View this character in Rickipedia
        </S.CharacterWikiButton>
      </S.CharacterButtons>
    </>
  )
}
