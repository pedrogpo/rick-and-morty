import * as S from './styles'

import {
  BiFemaleSign,
  BiMapPin,
  BiSearchAlt,
  BiStats,
  BiUniversalAccess,
  BiVideoRecording,
} from 'react-icons/bi'
import { Input, Select, Text } from '~/components/atoms'
import Button from '~/components/atoms/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import * as zod from 'zod'
import Toast from '~/core/toast'
import { charactersStore } from '~/store/characters'

import { observer } from 'mobx-react'
import { filterSchema } from '~/core/schemas/filter'
import { useMemo } from 'react'

type FilterData = zod.infer<typeof filterSchema>

function FilterCharacters() {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, isValid, errors },
    reset,
  } = useForm<FilterData>({
    resolver: zodResolver(filterSchema),
    mode: 'onChange',
  })

  const onApplyFilter = async (data: FilterData) => {
    // check if all values are empty
    const isAllEmpty = Object.values(data).every((value) => value === '')

    if (isAllEmpty) {
      Toast({
        type: 'error',
        message: 'You need to fill at least one field to apply a filter',
      })
      return
    }

    await charactersStore.applyFilter({
      name: data.name || '',
      status: data.status || '',
      gender: data.gender || '',
      species: data.species || '',
    })
  }

  const renderFilterForm = () => (
    <S.FilterCharacters onSubmit={handleSubmit(onApplyFilter)}>
      <Input
        sizeOf="m"
        placeholder="Search by name"
        type="text"
        {...register('name')}
        icon={<BiSearchAlt size={20} />}
        error={errors.name?.message}
      />
      <Select
        {...register('status')}
        placeholder="Status"
        sizeOf="m"
        icon={<BiStats size={20} />}
        error={errors.status?.message}
        defaultValue=""
      >
        <option value="" disabled>
          Select a status
        </option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </Select>
      <Select
        {...register('gender')}
        placeholder="Gender"
        sizeOf="m"
        icon={<BiFemaleSign size={20} />}
        error={errors.gender?.message}
        defaultValue=""
      >
        <option value="" disabled>
          Select a gender
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </Select>
      <Select
        {...register('species')}
        placeholder="Species"
        sizeOf="m"
        icon={<BiUniversalAccess size={20} />}
        error={errors.species?.message}
        defaultValue=""
      >
        <option value="" disabled>
          Select a specie's
        </option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
        <option value="mythological">Mythological</option>
        <option value="unknown">Unknown</option>
      </Select>
      <S.Divider />
      <Text size="xl" color="gray_100" weight="medium">
        Filter by episode:
      </Text>
      <Select
        {...register('episode')}
        placeholder="Episode"
        sizeOf="m"
        icon={<BiVideoRecording size={20} />}
        error={errors.episode?.message}
        defaultValue=""
      >
        <option value="" disabled>
          Select an episode
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
      </Select>

      <Button disabled={isSubmitting} color="primary_500" hug={true}>
        Apply filter
      </Button>
    </S.FilterCharacters>
  )

  const filterForm = useMemo(() => renderFilterForm(), [])

  return (
    <>
      {!charactersStore.hasFilter() ? (
        filterForm
      ) : (
        <>
          <Button
            color="primary_500"
            hug={true}
            onClick={() => {
              reset()
              charactersStore.removeFilter()
            }}
          >
            Remove filter
          </Button>
          <S.FilterCards>
            {Object.entries(charactersStore.getOptions)
              .filter(([, value]) => value)
              .map(([key, value]) => (
                <S.FilterCard key={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                </S.FilterCard>
              ))}
          </S.FilterCards>
        </>
      )}
    </>
  )
}

export default observer(FilterCharacters)
