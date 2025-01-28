import { createSlice } from "@reduxjs/toolkit";

/* understand it before apply it to the project */
/* export const cartMiddleware = (store) => (next) => (action) => {
    // Step 1: Let the action pass to the reducer
    const result = next(action);

    // Step 2: List of actions related to the cart
    const cartActions = [
        'cart/addToCart',
        'cart/removeFromCart',
        'cart/incrementQuantity',
        'cart/decrementQuantity',
    ];

    // Step 3: If the action is cart-related, sync with localStorage
    if (cartActions.includes(action.type)) {
        const cartState = store.getState().cart; // Get updated cart state
        localStorage.setItem('cart', JSON.stringify(cartState)); // Save it to localStorage
    }

    // Step 4: Return the result (optional, for consistency)
    return result;
}; */

const cartSlice = createSlice({
    name: "cart",
    initialState: JSON.parse(localStorage.getItem("cart")) || [],
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1
            } else {
                const updatedItem = { ...action.payload, quantity: 1 }
                state.push(updatedItem);
            }
            localStorage.setItem("cart", JSON.stringify(state))

        },
        removeFromCart: (state, action) => {
            const itemIdToRemove = action.payload.id;
            const updatedCart = state.filter((item) => item.id !== itemIdToRemove);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        },
        clearCart: () => {
            localStorage.removeItem("cart");
            return [];
        },
        incrementQuantity: (state, action) => {
            const target = state.find(item => item.id === action.payload.id);
            if (target) {
                target.quantity += 1;
                localStorage.setItem("cart", JSON.stringify(state))
            }
        },
        decrementQuantity: (state, action) => {
            const target = state.find(item => item.id === action.payload.id);
            if (target.quantity > 1) {
                target.quantity -= 1;
                localStorage.setItem("cart", JSON.stringify(state))
            }
        }
    }
})


export const { addToCart, removeFromCart,clearCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;