import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  BiChevronRight,
  BiFemaleSign,
  BiMaleSign,
  BiQuestionMark,
  BiStar,
} from 'react-icons/bi'
import { Text } from '~/components/atoms'
import { CharacterStatus } from '~/components/atoms/character-status'
import { Character } from '~/interfaces/api/rickandmorty/character'
import * as S from './styles'

import { useRouter } from 'next/router'

interface ICharacterCard {
  character: Character
  onFavoriteClick?: (character: Character) => void
  isFavorite: boolean
}

function CharacterCard({ character, onFavoriteClick, isFavorite }: ICharacterCard) {
  const handleFavoriteClick = () => {
    onFavoriteClick?.(character)
  }

  const { push } = useRouter()

  const handleCardClick = () => {
    push(`/character/${character.id}`)
  }

  return (
    <S.CharacterCard>
      <S.CardTopInfo>
        <S.FavoriteButton onClick={handleFavoriteClick} isFavorite={isFavorite}>
          <BiStar size={14} color="white" />
        </S.FavoriteButton>
        <CharacterStatus status={character.status}>{character.status}</CharacterStatus>
        <S.CharacterGender>
          {(() => {
            switch (character.gender) {
              case 'Male':
                return <BiMaleSign size={14} color="white" />
              case 'Female':
                return <BiFemaleSign size={14} color="white" />
              case 'Genderless':
                // workaround
                return (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 24"
                  >
                    <path
                      d="M8 0C3.594 0 0 3.594 0 8C0 12.066 3.066 15.438 7 15.938V24H9V15.937C12.934 15.437 16 12.067 16 8C16 3.594 12.406 0 8 0ZM8 2C11.324 2 14 4.676 14 8C14 11.324 11.324 14 8 14C4.676 14 2 11.324 2 8C2 4.676 4.676 2 8 2Z"
                      fill="white"
                    />
                  </svg>
                )
              default:
                return <BiQuestionMark size={14} color="white" />
            }
          })()}
        </S.CharacterGender>
      </S.CardTopInfo>
      <S.CardUnderlayImage onClick={handleCardClick}>
        <S.CharacterInfo>
          <S.CharacterInfoContent>
            <Text as="h3" size="md" color="gray_100" weight="bold">
              {character.name}
            </Text>
            <Text size="sm" color="gray_300">
              {character.origin.name}
            </Text>
          </S.CharacterInfoContent>
          <S.CharacterInfoButton>
            <BiChevronRight size={22} color="white" />
          </S.CharacterInfoButton>
        </S.CharacterInfo>
        <Image
          src={character.image}
          alt="Rick and morty name"
          quality={85}
          width={200}
          height={200}
        />
      </S.CardUnderlayImage>
    </S.CharacterCard>
  )
}

export default React.memo(CharacterCard, (prevProps, nextProps) => {
  return (
    prevProps.character.id === nextProps.character.id &&
    prevProps.isFavorite === nextProps.isFavorite
  )
})
