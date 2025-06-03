import { createContext, useState, useEffect } from "react";
import { BankProduct } from "../types";


type FavouriteContextType = BankProduct & {

}


export const GlobalContext = createContext() ;//creo contesto accessibile da altri componenti

export function GlobalProvider({children}) {//qualsiasi children che inserisco all interno di questo componente

 const [favourites, setFavourites] = useState()

 const addToFavourites = () => {
    
 }

 const removeFromFavourites = () => {

 }

 const favouritesValues = {favourites, addToFavourites, removeFromFavourites}
    // const globalProviderValue = { tasks }

    return (
        //value={globalProviderValue}
        <GlobalContext.Provider value={{ favouritesValues }}>
            {children}
        </GlobalContext.Provider>
    )
}

//const {posts} = useContext(GlobalContext)