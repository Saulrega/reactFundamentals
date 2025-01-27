import { createContext, ReactNode, useState } from 'react';

const ModalContext = createContext<{
    state: boolean,
    setState: React.Dispatch<React.SetStateAction<boolean>>
}>({
    state: false,
    setState: () => null
});


const ModdalProvider = ({children} : { children: ReactNode}) => {
    const [state, setState] = useState<boolean>(false)

    return <ModalContext.Provider value={{state, setState}}>{children}</ModalContext.Provider>
} 

export {
    ModalContext,
    ModdalProvider
}
