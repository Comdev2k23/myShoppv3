import { createContext } from "react";
import React, {useReducer} from "react";
import reducer, { initialState } from "./Reducer";


export const StoreContext = createContext();


export const StoreProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer,
        initialState)

    const addToCart = (product) => {
        const updatedCart = state.products
        updatedCart.push(product)

        updatePrice(updatedCart)

        dispatch({
            type: "add",
            payload: updatedCart
        })
    }

    const removeFromCart = (product) => {
        const updatedCart = state.products.filter
        ((currentProduct) => currentProduct.name !== product.name)

        updatePrice(updatedCart)

        dispatch({
            type: "remove",
            payload: updatedCart
        })
    }

    const updatePrice = (products) => {
        let total = 0
        products.forEach(product => {
            total += product.price
        })

        dispatch({
            type: "update price",
            payload: total
        })
    }

    const value = {
        total: state.total,
        products: state.products,
        addToCart,
        removeFromCart
    }

    return <StoreContext.Provider value={value}>
        {children}
    </StoreContext.Provider>
}