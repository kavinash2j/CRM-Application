import { createSlice } from "@reduxjs/toolkit";
import { fetchLeads, createLead, updateLead, deleteLead } from "./leadThunks";
import { fetchCustomers, createCustomer, updateCustomer, deleteCustomer } from "./customerThunks";

export const customerSlice = createSlice({
    name: "customers",

    initialState: {
        customers: [],
        isLoading: false,
        isError: false,
    },
    reducers: {
        setCustomers: (state, action) => {
            state.customers = action.payload;
        },
        addCustomer: (state, action) => {
            state.customers.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            // fetch
            .addCase(fetchCustomers.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchCustomers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.customers = action.payload;
            })
            .addCase(fetchCustomers.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })

            // create
            .addCase(createCustomer.fulfilled, (state, action) => {
                state.customers.push(action.payload);
            })

            // update
            .addCase(updateCustomer.fulfilled, (state, action) => {
                const updated = action.payload;
                const index = state.customers.findIndex(
                    (c) => c._id === updated._id || c._id === updated._id
                );
                if (index !== -1) {
                    state.customers[index] = updated;
                }
            })

            // delete
            .addCase(deleteCustomer.fulfilled, (state, action) => {
                state.customers = state.customers.filter(
                    (c) => c._id !== action.payload && c._id !== action.payload
                );
            });
    },
});

export const leadsSlice = createSlice({
    name: "leads",
    initialState: {
        leads: [],
        isLoading: false,
        isError: false,
    },
    reducers: {
        addLead: (state, action) => {
            state.leads.push(action.payload);
        },
        setLeads: (state, action) => {
            state.leads = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLeads.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                console.log("this the pending state")
            })
            .addCase(fetchLeads.fulfilled, (state, action) => {
                state.isLoading = false;
                state.leads = action.payload;
                console.log("this the fulfilled state")
            })
            .addCase(fetchLeads.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })

            // create new lead
            .addCase(createLead.fulfilled, (state, action) => {
                state.leads.push(action.payload);
            })

            // update existing lead
            .addCase(updateLead.fulfilled, (state, action) => {
                const { _id } = action.payload;
                const index = state.leads.findIndex((l) => l._id === _id);
                if (index !== -1) {
                    state.leads[index] = { ...state.leads[index], ...action.payload };
                }
            })

            // delete lead
            .addCase(deleteLead.fulfilled, (state, action) => {
                state.leads = state.leads.filter((l) => l._id !== action.payload);
            });
    }
})

export const { addCustomer } = customerSlice.actions;
export const { addLead } = leadsSlice.actions;


export const customerReducer = customerSlice.reducer;
export const leadsReducer = leadsSlice.reducer;
