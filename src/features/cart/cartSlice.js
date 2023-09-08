import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addToCart, deleteItemFromCart, fetchItemsByUserId, updateCart } from './cartAPI';

const initialState = {
    status: 'idle',
    items: []
}

export const addToCartAsync = createAsyncThunk(
    'cart/addToCart',
    async (item) => {
        const response = await addToCart(item)
        return response.data;
    }
)

export const fetchItemsByUserIdAsync = createAsyncThunk(
    'cart/fetchItemsByUserId',
    async (userId) => {
        const response = await fetchItemsByUserId(userId)
        return response.data;
    }
)

export const updateCartAsync = createAsyncThunk(
    'cart/updateItem',
    async (update) => {
        const response = await updateCart(update)
        return response.data;
    }
)

export const deleteItemFromCartAsync = createAsyncThunk(
    'cart/deleteItemFromCart',
    async (itemId) => {
        const response = await deleteItemFromCart(itemId)
        return response.data;
    }
)


export const cartSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(addToCartAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(addToCartAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.items.push(action.payload)
            })
            .addCase(fetchItemsByUserIdAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchItemsByUserIdAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.items = action.payload
            })
            .addCase(updateCartAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(updateCartAsync.fulfilled, (state, action) => {
                const index = state.items.findIndex(item => item.id === action.payload.id)
                state.status = 'idle';
                state.items[index] = action.payload
            })
            .addCase(deleteItemFromCartAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(deleteItemFromCartAsync.fulfilled, (state, action) => {
                const index = state.items.findIndex(item => item.id === action.payload.id)
                state.status = 'idle';
                state.items.splice(index, 1);
            })
    }
})

export const selectItems = (state) => state.cart.items

export default cartSlice.reducer;