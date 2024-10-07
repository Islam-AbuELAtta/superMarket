import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function useQueryApi(key, fn ) {

        return useQuery({queryKey: [key] , queryFn: fn, select:(data)=> data?.data})

  return 
}



