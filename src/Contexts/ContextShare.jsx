import React, { createContext, useState } from 'react'
export const personViewContext = createContext()
export const hospitalViewContext = createContext()
export default function ContextShare({ children }) {

    const [personviewresponse, setPersonviewresponse] = useState("donate")
    const [hospitalviewResponse, setHospitalviewresponse] = useState("donate")
    return (

        <>
            <personViewContext.Provider value={{ personviewresponse, setPersonviewresponse }}>
                <hospitalViewContext.Provider value={{ hospitalviewResponse, setHospitalviewresponse }}>
                    {children}
                </hospitalViewContext.Provider>
            </personViewContext.Provider>

        </>)
}
