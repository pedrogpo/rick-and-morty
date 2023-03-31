import Link from 'next/link'
import { Heading, Text } from '~/components/atoms'
import Button from '~/components/atoms/button'
import Container from '../container'
import * as S from './styles'

export default function Navbar() {
  return (
    <S.Navbar>
      <Container>
        <S.NavbarRow>
          <S.NavbarText>
            <Heading size="lg" color="gray_100" weight="bold">
              Rick and Morty Characters
              <br />
              <Text size="xl" color="gray_100" weight="medium">
                See all characters and info about them
              </Text>
            </Heading>
          </S.NavbarText>
          <Link href="/favorites">
            <Button hug={false} color="background_500">
              My Favorites
            </Button>
          </Link>
        </S.NavbarRow>
      </Container>
    </S.Navbar>
  )
}
