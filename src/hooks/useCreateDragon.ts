import { useMutation, useQueryClient } from "react-query"
import { axiosCreateDragon } from "../services/api/methods"

export const useCreateDragon = () => {
  const queryClient = useQueryClient()
  const {isLoading, mutateAsync} = useMutation(axiosCreateDragon, {
    onSuccess: () => {
      queryClient.invalidateQueries('dragons')
    }
  })
  return {isLoading, mutateAsync}
}
