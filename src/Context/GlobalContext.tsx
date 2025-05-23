// import {createContext} from "react"
// import { useProducts } from "../CustomHooks/useProducts"

// //creo contesto accessibile da altri componenti

// type GlobalContextType = {

// }

// //Dobbiamo dire che cntenuto puo'assumere tramite un parametro di tipo
// export const GlobalContext = createContext,<GlobalContextType | null>(null) 

// type GlobalContextProviderProps = {
//     children: React.ReactNode
// }
// //any children che inserisco all interno di questo componente
// export function GlobalProvider({children}:GlobalContextProviderProps){

//     const resultsUseProducts = useProducts()

//     return (
//         <GlobalContext.Provider value={{...resultsUseProducts}}>
//             {children}
//         </GlobalContext.Provider>
//     )
// }