import { Dragon } from '../../core/constants/types/dragon';

import { dragonsClient } from './axios'

export const axiosGetDragons = async () => {
  const dragons = await dragonsClient.get('/api/v1/dragon')

  return dragons
}

export const axiosGetDragon = async (dragonId: string) => {
  const dragon = await dragonsClient.get(`/api/v1/dragon/${dragonId}`)

  return dragon
}

export const axiosUpdateDragon = async (dragonId: string, value: Dragon) => {
  const dragon = await dragonsClient.put(`/api/v1/dragon/${dragonId}`, value)

  return dragon
}

export const axiosCreateDragon = async (value: Dragon) => {
  const dragon = await dragonsClient.post(`/api/v1/dragon`, value)

  return dragon
}

export const axiosDeleteDragon = async (dragonId: string) => {
  const dragon = await dragonsClient.delete(`/api/v1/dragon/${dragonId}`)

  return dragon
}
