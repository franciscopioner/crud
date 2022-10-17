import { useMutation, useQueryClient } from "react-query"
import { axiosDeleteDragon } from "../services/api/methods"

export const useDeleteDragon = () => {
  const queryClient = useQueryClient()
  const {mutateAsync, isLoading} = useMutation(axiosDeleteDragon , {
    onSuccess: () => {
      queryClient.invalidateQueries('dragons')
    }
  })
  return {mutateAsync, isLoading}
}
