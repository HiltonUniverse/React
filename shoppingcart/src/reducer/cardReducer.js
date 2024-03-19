//state has all the last updated information
//action holds type of function to call and the all the new updated data to update for state
export const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "ADD_TO_CART":
            return { ...state, cartList: payload.products } //return everything + update cart list

        case "REMOVE_FROM_CART":
            return { ...state, cartList: payload.products }

        default:
            throw new Error("No case found in cartReducer")
    }
}