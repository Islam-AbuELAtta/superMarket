import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function useMutationApi(fn) {
    const queryClient = useQueryClient()
          return  useMutation({mutationFn: fn , onSuccess:()=>{
            queryClient.invalidateQueries({ queryKey: ['cstCart'] })
        }})
}
