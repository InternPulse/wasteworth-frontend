import axios  from 'axios'
import { queryOptions } from '@tanstack/react-query'


//sample setup
const getItem = async () => {
    const res = await axios.get('url')
    return res.data
}

export const createTodoQueryOptions = () => {
    return queryOptions({
        queryKey: ['list'],        
        queryFn: getItem,
        enabled: true,
        staleTime: 1000 * 60 * 5, // 5 minute
        gcTime: 1000 * 60 * 30, // 30 minutes
        refetchOnWindowFocus: true,
        refetchOnReconnect: true, 
    })
}