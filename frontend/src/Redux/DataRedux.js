import { createSlice } from "@reduxjs/toolkit";
import { fetchLeads, createLead, editLead, removeLead } from "./leadThunks";
import { fetchCustomers, createCustomer, editCustomer, removeCustomer } from "./customerThunks";

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
        updateCustomer: (state, action) => {
            const { id } = action.payload;
            const index = state.customers.findIndex((c) => c.id === id || c._id === id);
            if (index !== -1) {
                state.customers[index] = {
                    ...state.customers[index],
                    ...action.payload,
                };
            }
        },
        deleteCustomer: (state, action) => {
            state.customers = state.customers.filter(
                (c) => c.id !== action.payload && c._id !== action.payload
            );
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
            .addCase(editCustomer.fulfilled, (state, action) => {
                const updated = action.payload;
                const index = state.customers.findIndex(
                    (c) => c.id === updated.id || c._id === updated._id
                );
                if (index !== -1) {
                    state.customers[index] = updated;
                }
            })

            // delete
            .addCase(removeCustomer.fulfilled, (state, action) => {
                state.customers = state.customers.filter(
                    (c) => c.id !== action.payload && c._id !== action.payload
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
        updateLead: (state, action) => {
            const { id } = action.payload;
            const index = state.leads.findIndex((l) => l.id === id);
            if (index !== -1) {
                state.leads[index] = { ...state.leads[index], ...action.payload };
            }
        },
        deleteLead: (state, action) => {
            state.leads = state.leads.filter((l) => l.id !== action.payload);
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
            })
            .addCase(fetchLeads.fulfilled, (state, action) => {
                state.isLoading = false;
                state.leads = action.payload;
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
            .addCase(editLead.fulfilled, (state, action) => {
                const { id } = action.payload;
                const index = state.leads.findIndex((l) => l.id === id);
                if (index !== -1) {
                    state.leads[index] = { ...state.leads[index], ...action.payload };
                }
            })

            // delete lead
            .addCase(removeLead.fulfilled, (state, action) => {
                state.leads = state.leads.filter((l) => l.id !== action.payload);
            });
    }
})

export const { addCustomer, updateCustomer, deleteCustomer } = customerSlice.actions;
export const { addLead, updateLead, deleteLead } = leadsSlice.actions;


export const customerReducer = customerSlice.reducer;
export const leadsReducer = leadsSlice.reducer;
