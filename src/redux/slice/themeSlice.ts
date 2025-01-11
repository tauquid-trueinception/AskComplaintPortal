import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
    mode : "light" | "dark";
}

const initialState : ThemeState = {
    mode : typeof window !== "undefined" &&  localStorage.getItem('themeMode') === 'dark' ? 'dark' : 'light',
}

const themeSlice = createSlice({
    name : "theme",
    initialState,
    reducers : {
        toggleTheme : (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
            localStorage.setItem("themeMode" , state.mode);
        },
        setTheme : (state , action: PayloadAction<"light" | "dark">) => {
            state.mode = action.payload;
            localStorage.setItem("themeMode" , state.mode);
        }
    }
})

export const {toggleTheme , setTheme} = themeSlice.actions;

export default themeSlice.reducer;