import Container from '~/components/organisms/container'
import Navbar from '~/components/organisms/navbar'
import Content from './components/content'

export default function HomeScreen({}: any) {
  return (
    <main>
      <Navbar />
      <Container>
        <Content />
      </Container>
    </main>
  )
}
