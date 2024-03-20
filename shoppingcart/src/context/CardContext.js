import { createContext, useContext, useReducer } from "react"
import { cartReducer } from "../reducer/cardReducer"

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
    //sate = is the object with all the state (eg: cartList, total).
    //       for useState we had only 1 state, but now state returned by useReducer can have as many state as you want.
    //       basically everythig we have inside our initialStat are available.
    //dispatch = just like set of useState, we can set values to the state just like the setters we had for useState.
    //So both state and dispatch allow to hold and set multiple states.
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (product) => {
        //This does not update the state.cartList, we only created a new cartList our of the old one with a new product added to it.
        const updatedCartList = state.cartList.concat(product);
        updateTotal(updatedCartList)
        dispatch({
            type: "ADD_TO_CART", //this is the type of action we want to perform, we implement the specifics in the cardReducer
            payload: { //this is the new state that will be passed to ADD_To_CART function in reducer
                products: updatedCartList
            }
        })
    }

    const removeFromCart = (product) => {
        const updatedCartList = state.cartList.filter(current => current.id !== product.id);
        updateTotal(updatedCartList)
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedCartList
            }
        })
    }

    const updateTotal = (products) => {
        let total = 0;
        products.forEach(product => total = total + product.price)
        dispatch({
            type: "UPDATE_TOTAL",
            payload: {
                total: total
            }
        })
    }

    const value = {
        total: state.total,
        cartList: state.cartList,
        addToCart,
        removeFromCart
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