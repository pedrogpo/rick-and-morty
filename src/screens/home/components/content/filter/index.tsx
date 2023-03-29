import * as S from './styles'

import { BiFemaleSign, BiMapPin, BiSearchAlt, BiVideoRecording } from 'react-icons/bi'
import { Input, Select, Text } from '~/components/atoms'

export default function FilterCharacters() {
  return (
    <S.FilterCharacters>
      <Input
        sizeOf="m"
        placeholder="Search by name"
        type="text"
        icon={<BiSearchAlt size={20} />}
      />
      <Select placeholder="Location" sizeOf="m" icon={<BiMapPin size={20} />}>
        <option selected disabled>
          Select a Location
        </option>
        <option value="Earth">Earth</option>
      </Select>
      <Select placeholder="Gender" sizeOf="m" icon={<BiFemaleSign size={20} />}>
        <option selected disabled>
          Select a Gender
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </Select>
      <S.Divider />
      <Text size="xl" color="gray_100" weight="medium">
        Filter by episode:
      </Text>
      <Select placeholder="Episode" sizeOf="m" icon={<BiVideoRecording size={20} />}>
        <option selected disabled>
          Select an episode
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
      </Select>
    </S.FilterCharacters>
  )
}
