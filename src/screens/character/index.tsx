import Container from '~/components/organisms/container'
import { Character } from '~/interfaces/api/rickandmorty/character'
import { Location } from '~/interfaces/api/rickandmorty/location'
import Content from './components/content'

export default function CharacterScreen({
  characterData,
  originData,
}: {
  characterData: Character
  originData: Location
}) {
  return (
    <main>
      <Container>
        <Content originData={originData} characterData={characterData} />
      </Container>
    </main>
  )
}
