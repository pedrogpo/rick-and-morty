import { GetStaticPaths, GetStaticProps } from 'next'
import { rmApi } from '~/core/http/api'
import { Character } from '~/interfaces/api/rickandmorty/character'
import { Location } from '~/interfaces/api/rickandmorty/location'
import CharacterScreen from '~/screens/character'

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const characterId = context.params?.character?.[0]

    const { data: characterData } = await rmApi.get<Character>(`character/${characterId}`)

    const originData =
      characterData.origin.url !== '' && characterData.origin.name !== 'unknown'
        ? await rmApi
            .get<Location>(`location/${characterData.origin.url.split('location/')[1]}`)
            .then((res) => res.data)
        : null

    return {
      props: {
        characterData,
        originData,
      },
      revalidate: 120,
      // we know that this API returns a static response, so it doesn't need to be an ICR
      // but if it was not a static API, we need the revalidate to refresh the startCharacters
    }
  } catch (error) {
    return {
      props: {
        characterData: null,
        originData: null,
      },
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          /*
            This is the path that will be generated at the build time
          */
          character: ['1', '2', '3'],
        },
      },
    ],
    fallback: 'blocking',
  }
}

export default CharacterScreen
