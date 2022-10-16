import { useQuery } from "react-query"
import { Dragons } from "../core/constants/types/dragon"
import { axiosGetDragons } from "../services/api/methods"

export const useGetDragons = () => {
  const { data, isFetching } = useQuery(
    'dragons', () => axiosGetDragons(), {
      refetchOnWindowFocus: false,
    },
  )

  return { data: data?.data as Dragons, isFetching }
}
