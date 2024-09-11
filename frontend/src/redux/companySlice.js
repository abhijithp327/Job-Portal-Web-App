import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
    name: "company",
    initialState: {
        companies: [],
        singleCompany: null,
        searchCompanyName: "",
    },
    reducers: {

        setSingleCompany: (state, action) => {
            state.singleCompany = action.payload;
        },

        setCompanies: (state, action) => {
            state.companies = action.payload;
        },

        setSearchCompanyName: (state, action) => {
            state.searchCompanyName = action.payload;
        },
    },
});


export const { setSingleCompany, setCompanies, setSearchCompanyName } = companySlice.actions;

export default companySlice.reducer;