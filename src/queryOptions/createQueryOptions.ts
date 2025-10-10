import axios  from 'axios'
import { queryOptions } from '@tanstack/react-query'

const BASE_URL: string = import.meta.env.VITE_BASE_URL2;



//sample setup
const getListing = async () => {
    const res = await axios.get(`${BASE_URL}/api/v1/listings`)
    return res.data
}

export const createListingQueryOptions = () => {
    return queryOptions({
        queryKey: ['list'],        
        queryFn: getListing,
        enabled: true,
        staleTime: 1000 * 60 * 5, // 5 minute
        gcTime: 1000 * 60 * 30, // 30 minutes
        refetchOnWindowFocus: true,
        refetchOnReconnect: true, 
    })
}