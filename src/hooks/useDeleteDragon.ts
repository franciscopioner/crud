import { useMutation, useQueryClient } from "react-query"
import { axiosDeleteDragon } from "../services/api/methods"

export const useDeleteDragon = () => {
  const queryClient = useQueryClient()
  const {mutateAsync, isLoading} = useMutation((dragonId:string) => axiosDeleteDragon(dragonId) , {
    onSuccess: () => {
      queryClient.invalidateQueries('dragons')
    }
  })
  return {mutateAsync, isLoading}
}
