import { Heading, Text } from '~/components/atoms'
import Container from '../container'
import * as S from './styles'

export default function Navbar() {
  return (
    <S.Navbar>
      <Container>
        <S.NavbarText>
          <Heading size="lg" color="gray_100" weight="bold">
            Rick and Morty Characters
            <br />
            <Text size="xl" color="gray_100" weight="medium">
              See all characters and info about them
            </Text>
          </Heading>
        </S.NavbarText>
      </Container>
    </S.Navbar>
  )
}
