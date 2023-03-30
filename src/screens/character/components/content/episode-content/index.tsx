import { Text } from '~/components/atoms'
import { Character } from '~/interfaces/api/rickandmorty/character'
import * as S from './styles'

export default function CharacterEpisodeContent({
  characterData,
}: {
  characterData: Character
}) {
  return (
    <S.CharacterEpisodeContent>
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
    </S.CharacterEpisodeContent>
  )
}
