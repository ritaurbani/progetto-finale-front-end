import { createContext, useState, useEffect } from "react";
import { BankProduct } from "../types";
import { useProducts } from "../CustomHooks/useProducts";

type FavouriteItem = { 
    id: number, 
    title: string }

type FavouriteContextType = {
    favourites: FavouriteItem[];
    addToFavourites: (newElement: FavouriteItem) => void;
    removeFromFavourites: (id: number) => void;
}


export const GlobalContext = createContext<FavouriteContextType>({

    favourites: [],
    addToFavourites: () => { },
    removeFromFavourites: () => { },

});//mi creo contesto accessibile da altri componenti

export function GlobalProvider({ children }: { children: React.ReactNode }) {//qualsiasi children che inserisco all interno di questo componente

    const [favourites, setFavourites] = useState<FavouriteItem[]>([])
    const [showAlert, setShowAlert] = useState(false)



   

    // It should accept a { id: number, title: string } as function parameter and add it to the favourite list
    const addToFavourites = (newItem: FavouriteItem) => {
        setFavourites([...favourites, newItem])
        showAlert ? "added" : "not added"
    }

    const removeFromFavourites = (id: number) => {
        setFavourites(favourites.filter((item) => item.id !== id)
    )
    }

    const favouritesValues = { favourites, addToFavourites,setFavourites, removeFromFavourites, setShowAlert }
    // const globalProviderValue = { tasks }

    return (
        //value={globalProviderValue}
        <GlobalContext.Provider value ={{ ...favouritesValues }}>
            {children}
        </GlobalContext.Provider>
    )
}

//const {posts} = useContext(GlobalContext)