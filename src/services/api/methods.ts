import {useMutation, useQuery, useQueryClient} from 'react-query';
import { Dragon } from '../../core/constants/types/dragon';

import { dragonsClient } from './axios'

const getDragons = (dragonId?: string) => {
  const url = dragonId ? `/api/v1/dragon/${dragonId}` : '/api/v1/dragon'

  const { data, isFetching } = useQuery(
    'dragons', async () => await dragonsClient.get(url), {
      refetchOnWindowFocus: false,
    },
  )

  return { data: data?.data, isFetching }
}

const updateDragon = (dragonId?:string) => {
  const queryClient = useQueryClient()
  const {isLoading, mutateAsync} = useMutation(async (value) => await dragonsClient.put(`/api/v1/dragon/${dragonId}`, value), {
    onSuccess: () => {
      queryClient.invalidateQueries('dragons')
    }
  })
  return {isLoading, mutateAsync}
}

const createDragon = () => {
  const queryClient = useQueryClient()
  const {isLoading, mutateAsync} = useMutation(async (data:Dragon) => await dragonsClient.post(`/api/v1/dragon`, data), {
    onSuccess: () => {
      queryClient.invalidateQueries('dragons')
    }
  })
  return {isLoading, mutateAsync}
}

const deleteDragon = () => {
  const queryClient = useQueryClient()
  const {mutateAsync, isLoading} = useMutation(async (dragonId?:string) => await dragonsClient.delete(`/api/v1/dragon/${dragonId}`), {
    onSuccess: () => {
      queryClient.invalidateQueries('dragons')
    }
  })
  return {mutateAsync, isLoading}
}

export const api = {
  getDragons,
  updateDragon,
  createDragon,
  deleteDragon

}
