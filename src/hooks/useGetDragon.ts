import { useQuery } from "react-query"
import { Dragon } from "../core/constants/types/dragon"
import { axiosGetDragon } from "../services/api/methods"

export const useGetDragon = (dragonId: string) => {
  const { data, isFetching } = useQuery(
    'dragons', () => axiosGetDragon(dragonId), {
      refetchOnWindowFocus: false,
    },
  )

  return { data: data?.data as Dragon, isFetching }
}
