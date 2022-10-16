import { useMutation, useQueryClient } from "react-query"
import { Dragon } from "../core/constants/types/dragon"
import { axiosUpdateDragon } from "../services/api/methods"

export const useUpdateDragon = (dragonId:string) => {
  const queryClient = useQueryClient()
  const {isLoading, mutateAsync} = useMutation((value: Dragon) => axiosUpdateDragon(dragonId, value) , {
    onSuccess: () => {
      queryClient.invalidateQueries('dragons')
    }
  })
  return {isLoading, mutateAsync}
}
