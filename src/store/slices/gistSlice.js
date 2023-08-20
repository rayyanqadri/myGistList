import { createSlice } from "@reduxjs/toolkit";

const gistSlice = createSlice({
    name: "gists",
    initialState: {
        gistList: [],
        loading: true
    },
    reducers: {
        setGistList(state, action){
            state.gistList = action.payload
        },
        setLoading(state, action) {
            state.loading = action.payload
        }
    }
})

export const { setGistList, setLoading } = gistSlice.actions
export default gistSlice.reducer