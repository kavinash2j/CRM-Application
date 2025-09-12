import react, { useState, createContext } from "react"
export const DataContext = createContext();


export function DataProvider({ children }) {
    const [showSearch, setShowSearch] = useState(false);
    const [showModal, setShowModal] = useState(false);
    return (
        <DataContext.Provider value={{ showSearch, setShowSearch, showModal, setShowModal }}>
            {children}
        </DataContext.Provider>
    )
}