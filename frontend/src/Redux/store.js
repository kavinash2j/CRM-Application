import { configureStore } from "@reduxjs/toolkit";
import { customerReducer, leadsReducer, userReducer } from "./DataRedux";

export const store = configureStore({
    reducer: {
        customers: customerReducer,
        leads: leadsReducer,
        user: userReducer
    },
});
