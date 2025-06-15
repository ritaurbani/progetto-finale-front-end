
import { useState, useEffect } from 'react'
import { BankProduct } from '../types'


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
        } catch (error: unknown) {//di default e unknown-non puoi usare erro senza prima verificare il suo tipo-forza type checking
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

    //oggetto piu flessibili quando ci sono più valori da ritornare (es. dati, loading, errori).
    //se ritorno array poi devo ricordare ordine elems
    return { products: bankProducts, isLoading, error, fetchProducts  }
    //uso proprieta
    

}
