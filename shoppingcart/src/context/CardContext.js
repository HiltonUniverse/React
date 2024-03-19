import { createContext, useContext } from "react"

// Initial state of what the user will see when they enter our application
const initialState = {
    cartList: [],
    total: 0
}

//Create context
const CartContext = createContext(initialState)

// Provider that will wrap our App component so the App can access the our state and perform actions on it
// Through provider we will add to cart, remove from cart and such.
export const CartProvider = ({ children }) => {
    //NOTE: WE USE REDUCERS INSIDE THE CONTEXT
    const value = {
        total: 50
    };

    return (
        <CartContext.Provider value={value}>
            {/* We will return {children} with the {value} 
            the value will have entire state and the methods we will define.*/}
            {children}
        </CartContext.Provider>
    )
}

//use context
export const useCart = () => {
    return useContext(CartContext)
}