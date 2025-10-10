import axios from "axios"
import { useEffect, useState } from "react"
import type { MyOffersData } from "@/types"


const useOffer = () => {

    const BASE_URL: string = import.meta.env.VITE_BASE_URL2

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)
    const [offers, setOffers] = useState<MyOffersData['data']>([])

    useEffect(() => {
 const getOffers = async () => {
        setLoading(true)
        try {
            const tokenObject  = localStorage.getItem('user-store')
            if(!tokenObject){
                console.error("No Auth token found, try logging in again")
                return
            }
           
                const refresh_token = JSON.parse(tokenObject )
                const token = refresh_token.state.tokens.refresh_token
            
           
               
            
            
            const response = await axios.get(`${BASE_URL}/api/v1/listings`, {
            headers: {
              Authorization: `Bearer ${token}`, 
            },
        }
    )
            
            console.log(response.data)
            setOffers(response.data)

        } catch (error: any) {
            console.error("Error fetching my offers",error)
            setError(error)
        }
        finally{
             setLoading(false)
        }
           
        
       
    }
     getOffers()
    },[])
   
  return { loading, offers, error}
}

export default useOffer