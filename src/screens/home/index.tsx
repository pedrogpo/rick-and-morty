import Container from '~/components/organisms/container'
import Navbar from '~/components/organisms/navbar'
import { Characters } from '~/interfaces/api/rickandmorty/character'
import Content from './components/content'

export default function HomeScreen({ charactersData }: { charactersData: Characters }) {
  return (
    <main>
      <Navbar />
      <Container>
        <Content charactersData={charactersData} />
      </Container>
    </main>
  )
}
