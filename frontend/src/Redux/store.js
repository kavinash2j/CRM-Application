import { configureStore } from "@reduxjs/toolkit";
import { customerReducer, leadsReducer } from "./DataRedux";

export const store = configureStore({
    reducer: {
        customers: customerReducer,
        leads: leadsReducer,
    },
});
