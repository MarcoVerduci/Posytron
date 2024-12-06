import React from "react";
import { createContext, useState, useContext } from "react";

const daysContext = createContext();

export const days = () => {
    useContext(daysContext)
}

export const provider = ({ children }) => {
    const [giorni, setGiorni] = useState(
        Array.from({ lenght: 31 }), (_, i) => ({
            data: `${i+1} Ottobre`,
            stato: 'nessuno',
            orario: ""
        })
    )

    return (
        <daysContext.Provider value={{ giorni, setGiorni }}>{children}</daysContext.Provider>
    )
}