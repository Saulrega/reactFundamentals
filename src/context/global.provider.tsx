import { ReactNode, useState } from "react";
import { GlobalContext } from "./global.context";

export const EmptyGlobalState: number = 0;

interface GlobalProps {
    children: 
    ReactNode;
}

export const GlobalProvider = ({ children }:GlobalProps ) => {
    const [value, setValue] = useState<number>(EmptyGlobalState)

    return(
        <GlobalContext.Provider value={{ value, setValue}}>{children}</GlobalContext.Provider>
    )
}
