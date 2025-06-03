import { createContext, useState, useEffect } from "react";
import { BankProduct } from "../types";
import { useProducts } from "../CustomHooks/useProducts";

type FavouriteContextType = {
    favourites:BankProduct[];
    addToFavourites: (title:string) => void;
    removeFromFavourites: (title:string) => void;
    red: boolean
}


export const GlobalContext = createContext<FavouriteContextType>({

    favourites: [],
    addToFavourites: () => {},
    removeFromFavourites: () => {},
    red:false

}) ;//creo contesto accessibile da altri componenti

export function GlobalProvider({ children }: { children: React.ReactNode }) {//qualsiasi children che inserisco all interno di questo componente

 const [favourites, setFavourites] = useState<BankProduct[]>([])
 const [red, setRed] =useState<boolean>(false)

    const products = useProducts();

 const addToFavourites = (title:string) => {
    setRed(true)
    const favouriteItem = products.find((item:string) => item.title === title)
    if(favourites.includes(favouriteItem)){
        return favourites
    }
    setFavourites([...favourites, favouriteItem])

 }

 const removeFromFavourites = (title:string) => {
    setRed(false)
    const newArray = products.filter((item) => item.title !== title)
    setFavourites(newArray)
 }


    
 const favouritesValues = {favourites, red, setRed, addToFavourites, removeFromFavourites}
    // const globalProviderValue = { tasks }

    return (
        //value={globalProviderValue}
        <GlobalContext.Provider value={{...favouritesValues}}>
            {children}
        </GlobalContext.Provider>
    )
}

//const {posts} = useContext(GlobalContext)