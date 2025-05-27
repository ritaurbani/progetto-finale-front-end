
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
            if (response.ok) {
            }
            const data = await response.json()

            setBankProducts(data)
        } catch (error: unknown) {//di default e unknown-non puoi usare erro senza prima verificare il suo tipo-forza type checking
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

    //oggetto piu flessibili quando ci sono più valori da ritornare (es. dati, loading, errori).
    //se ritorno array poi devo ricordare ordine elems
    return { products: bankProducts, isLoading, error, fetchProducts  }
    //products → Nome della proprietà nell'oggetto ritornato (quello che vedrà chi usa il hook).
    // bankProducts → Variabile interna al hook.
    // Se hai definito un tipo per il ritorno del hook(es.UseProductsReturnType), devi assicurarti che i nomi delle proprietà coincidano:
    // type UseProductsReturnType = {
    //     products: BankProduct[]; // Tipo atteso
    // };

    // return {
    //     prodotti: bankProducts // ❌ ERRORE: "prodotti" non è una proprietà del tipo!
    //   };

}

// type inline
//se ritorni solo array no oggetto-const useProducts = (): BankProduct[] 
// export const useProducts = (): { products: BankProduct[] } => {
//     const [products, setProducts] = useState<BankProduct[]>([]);
//     return { products };
// };

// tipi complessi
// type UseProductsReturnType = {
//     products: BankProduct[];
//     isLoading: boolean;
//     error: string | null;
//     refresh: () => void;
// };

// export const useProducts = (): UseProductsReturnType => {
//     const [products, setProducts] = useState<BankProduct[]>([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState<string | null>(null);

//     const refresh = () => { /* ... */ };

//     return { products, isLoading, error, refresh }; // Ora il tipo separato è utile
// };