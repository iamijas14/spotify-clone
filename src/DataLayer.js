import { useReducer, useContext, createContext} from "react";
import reducer, { initialState } from "./reducer";

export  const spotifyDataLayerContext = createContext();

export const DataLayer = ({children}) => {
    return(
        <spotifyDataLayerContext.Provider value ={useReducer(reducer, initialState)}>
            {children}
        </spotifyDataLayerContext.Provider>
    )};

export const useDataLayerContext = () => useContext(spotifyDataLayerContext);