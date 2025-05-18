
import { useState, useEffect } from 'react'
import { BankProduct } from '../types'


type UseProductsReturnType = {
    isLoading: boolean,
    error: string | null,
    products: BankProduct[]
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
            if (response.ok) {
            }
            const data = await response.json()

            setBankProducts(data)
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message)
            }
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

//alias e proprieta
    return {products: bankProducts, isLoading, error }
}
