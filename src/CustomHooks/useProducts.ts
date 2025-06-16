
import { useState, useEffect } from 'react'
import { BankProduct } from '../types'

// export type BankProduct = {
//     id: number,
//     img: string,
//     title: string;
//     category: string;
//     bankName: string;
//     description: string;
//     rate: number;
//     durationInYears: number;
//     canRemove?: boolean
// }

type UseProductsReturnType = {
    isLoading: boolean,
    error: string | null,
    products: BankProduct[],
    fetchProducts: ()=>void
}

const API_URL = "http://localhost:3001"

export const useProducts = (): UseProductsReturnType => {
    const [bankProducts, setBankProducts] = useState<BankProduct[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    // const getProducts = () => {
    //     fetch(`${apiUrl}/bankproducts`)
    //         .then(resp => resp.json())
    //         .then(data => setBankProducts(data))
    //         .catch(error => console.error(error))
    // }

    const fetchProducts = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(`${API_URL}/bankproducts`)
            const data = await response.json()
            setBankProducts(data)
        } catch (error: unknown) {//verifico tipo
            if (error instanceof Error) {
                setError(error.message)
            }else{
                setError('errore sconosciuto')
            }
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return { products: bankProducts, isLoading, error, fetchProducts  }
    //uso proprieta
    

}
