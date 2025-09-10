import { createSlice } from "@reduxjs/toolkit";



export const customerSlice = createSlice({
    name: "customers",
    initialState: {
        customers: [
            {
                id: 1,
                name: "Deanna Annis",
                email: "deannannis@gmail.com",
                phone: "999-999-9999",
                address: "475 Spruce Drive, Pittsburgh, PA 23592",
            },
            {
                id: 2,
                name: "George Gamble",
                email: "goergegamble@gmail.com",
                phone: "999-999-9999",
                address: "2213 Thorn Street, Glenrock, WY 12345",
            },
            {
                id: 3,
                name: "Andrea Willis",
                email: "andreawillis@gmail.com",
                phone: "999-999-9999",
                address: "1952 Chicago Avenue, Fresno, CA 93711",
            },
            {
                id: 4,
                name: "Michael Johnson",
                email: "michael.johnson@gmail.com",
                phone: "888-555-1212",
                address: "742 Evergreen Terrace, Springfield, IL 62704",
            },
            {
                id: 5,
                name: "Sophia Brown",
                email: "sophia.brown@gmail.com",
                phone: "777-444-3333",
                address: "1600 Pennsylvania Avenue, Washington, DC 20500",
            },
            {
                id: 6,
                name: "Daniel Lee",
                email: "daniel.lee@gmail.com",
                phone: "666-222-1111",
                address: "99 Market Street, San Francisco, CA 94105",
            },
            {
                id: 7,
                name: "Olivia Martinez",
                email: "olivia.martinez@gmail.com",
                phone: "555-111-2222",
                address: "120 Broadway, New York, NY 10005",
            },
            {
                id: 8,
                name: "James Anderson",
                email: "james.anderson@gmail.com",
                phone: "444-333-2222",
                address: "500 Lakeshore Drive, Chicago, IL 60611",
            },
            {
                id: 9,
                name: "Emma Davis",
                email: "emma.davis@gmail.com",
                phone: "333-222-1111",
                address: "15 Ocean View Road, Miami, FL 33101",
            },
            {
                id: 10,
                name: "William Thompson",
                email: "william.thompson@gmail.com",
                phone: "222-999-8888",
                address: "78 Hilltop Avenue, Denver, CO 80202",
            },
        ]
    },
    reducers: {
        addCustomer: (state, action) => {
            state.customers.push(action.payload);
        },
        updateCustomer: (state, action) => {
            // console.log(action);
            const { id } = action.payload;
            const index = state.customers.findIndex((c) => c.id === id);
            // console.log(JSON.stringify(state.customers[index], null, 2));
            if (index !== -1) {
                state.customers[index] = {
                    ...state.customers[index],
                    ...action.payload
                };
            }
        },
        deleteCustomer: (state, action) => {
            state.customers = state.customers.filter((c) => c.id !== action.payload);
        },
    },
});
export const leadsSlice = createSlice({
    name: "leads",
    initialState: {
        leads: [
            {
                id: 1,
                customerId: 1,
                title: "Website Redesign Project",
                address: "2893 Austin Secret Lane",
                description: "Redesign corporate website to improve user experience.",
                status: "Contacted",
                value: "5000",
                createdAt: "2025-09-01",
            },
            {
                id: 2,
                customerId: 1,
                title: "Mobile App Development",
                address: "2893 Austin Secret Lane",
                description: "New iOS & Android app for online booking system.",
                status: "New",
                value: "12000",
                createdAt: "2025-09-05",
            },
            {
                id: 3,
                customerId: 1,
                title: "SEO Optimization",
                address: "2893 Austin Secret Lane",
                description: "Improve search engine ranking for client websites.",
                status: "Converted",
                value: "3000",
                createdAt: "2025-09-07",
            },
            {
                id: 4,
                customerId: 1,
                title: "Cloud Migration",
                address: "1105 Silicon Valley Drive",
                description: "Migrate legacy applications to AWS cloud.",
                status: "In Progress",
                value: "15000",
                createdAt: "2025-09-08",
            },
            {
                id: 5,
                customerId: 2,
                title: "E-commerce Platform",
                address: "2213 Thorn Street",
                description: "Build a scalable e-commerce platform with payment integration.",
                status: "New",
                value: "25000",
                createdAt: "2025-08-25",
            },
            {
                id: 6,
                customerId: 2,
                title: "Digital Marketing Campaign",
                address: "2213 Thorn Street",
                description: "Launch ads on Google & Facebook for product promotion.",
                status: "Contacted",
                value: "7000",
                createdAt: "2025-08-30",
            },
            {
                id: 7,
                customerId: 2,
                title: "Data Analytics Dashboard",
                address: "2213 Thorn Street",
                description: "Develop BI dashboard with charts & KPIs.",
                status: "Converted",
                value: "10000",
                createdAt: "2025-09-03",
            },
            {
                id: 8,
                customerId: 3,
                title: "HR Management System",
                address: "475 Spruce Drive",
                description: "Custom HRMS with leave & payroll features.",
                status: "In Progress",
                value: "18000",
                createdAt: "2025-09-04",
            },
            {
                id: 9,
                customerId: 3,
                title: "Cybersecurity Audit",
                address: "475 Spruce Drive",
                description: "Audit company network for vulnerabilities.",
                status: "Closed",
                value: "9000",
                createdAt: "2025-09-06",
            },
            {
                id: 10,
                customerId: 3,
                title: "AI Chatbot Integration",
                address: "475 Spruce Drive",
                description: "Integrate chatbot into customer support system.",
                status: "New",
                value: "12000",
                createdAt: "2025-09-09",
            },
        ]
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
    },
})

export const { addCustomer, updateCustomer, deleteCustomer } = customerSlice.actions;
export const { addLead, updateLead, deleteLead } = leadsSlice.actions;


export const customerReducer = customerSlice.reducer;
export const leadsReducer = leadsSlice.reducer;
