import { useMutation, useQueryClient } from "react-query"
import { Dragon } from "../core/constants/types/dragon"
import { axiosCreateDragon } from "../services/api/methods"

export const useCreateDragon = () => {
  const queryClient = useQueryClient()
  const {isLoading, mutateAsync} = useMutation((value:Dragon) => axiosCreateDragon(value), {
    onSuccess: () => {
      queryClient.invalidateQueries('dragons')
    }
  })
  return {isLoading, mutateAsync}
}
