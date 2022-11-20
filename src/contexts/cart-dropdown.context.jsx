import { createContext, useState } from "react";

export const CartDropdownContext = createContext({
    isCartDropdown : false,
    setIsCartDropdown : ()=>null
});

export const CartDropdownProvider = ({children}) => {
    const [isCartDropdown, setIsCartDropdown] = useState(false);
    const value = {isCartDropdown, setIsCartDropdown};
    return(
        <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
    )
}
