import React, { createContext, useState } from 'react';

const FoodContext = createContext();

const FoodProvider = ({ children }) => {
    const [timeoutId, setTimeoutId] = useState();   

    return (
        <FoodContext.Provider value={{timeoutId, setTimeoutId}}>
            {children}
        </FoodContext.Provider>
    )
}

export {FoodContext, FoodProvider}