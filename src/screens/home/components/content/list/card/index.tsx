import Image from 'next/image'
import { BiChevronRight, BiRightArrowAlt } from 'react-icons/bi'
import { Text } from '~/components/atoms'
import { Character } from '~/interfaces/api/rickandmorty/character'
import * as S from './styles'

interface ICharacterCard {
  character: Character
}

export default function CharacterCard({ character }: ICharacterCard) {
  return (
    <S.CharacterCard>
      <S.CardUnderlayImage>
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
