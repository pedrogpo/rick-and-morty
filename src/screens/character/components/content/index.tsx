import Image from 'next/image'
import Link from 'next/link'
import { BiChevronLeft } from 'react-icons/bi'
import { Heading, Text } from '~/components/atoms'
import { Character } from '~/interfaces/api/rickandmorty/character'
import { Location } from '~/interfaces/api/rickandmorty/location'
import CharacterInfoContent from './character-info'
import * as S from './styles'

export default function Content({
  characterData,
  originData,
}: {
  characterData: Character
  originData: Location
}) {
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
      <S.MainContainer>
        {characterData ? (
          <>
            <S.CharacterInfoCol>
              <CharacterInfoContent
                originData={originData}
                characterData={characterData}
              />
            </S.CharacterInfoCol>
            <S.CharacterEpisodesCountCol>
              <S.CharacterEpisodeCount>
                <Text size="xl" weight="semibold" color="gray_100">
                  Episodes that
                  <Text as="span" color="primary_500">
                    {' '}
                    {characterData.name}{' '}
                  </Text>
                  has been in:
                </Text>
                <S.CharacterEpisodeCards>
                  {characterData.episode.map((episode) => (
                    <S.CharacterEpisodeCard key={episode}>
                      Ep. {episode.split('episode/')[1]}
                    </S.CharacterEpisodeCard>
                  ))}
                </S.CharacterEpisodeCards>
              </S.CharacterEpisodeCount>
            </S.CharacterEpisodesCountCol>
          </>
        ) : (
          <Heading size="md" weight="bold" color="gray_100">
            Something went wrong, please try again later.
          </Heading>
        )}
      </S.MainContainer>
    </S.Content>
  )
}
