import { GetStaticPaths, GetStaticProps } from 'next'
import { rmApi } from '~/core/http/api'
import { Characters } from '~/interfaces/api/rickandmorty/character'
import HomeScreen from '~/screens/home'

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const { data: charactersData } = await rmApi.get<Characters>('character')

    return {
      props: {
        charactersData,
      },
      revalidate: 120,
      // we know that this API returns a static response, so it doesn't need to be an ICR
      // but if it was not a static API, we need the revalidate to refresh the startCharacters
    }
  } catch (error) {
    return {
      props: {
        charactersData: null,
      },
    }
  }
}

export default HomeScreen
