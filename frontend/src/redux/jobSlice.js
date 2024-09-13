import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name: "job",
    initialState: {
        allJobs: [],
        singleJob: null,
        allAdminJobs: [],
        searchJobName: "",
    },
    reducers: {
        setAllJobs: (state, action) => {
            state.allJobs = action.payload;
        },

        setSingleJob: (state, action) => {
            state.singleJob = action.payload;
        },

        setAllAdminJobs: (state, action) => {
            state.allAdminJobs = action.payload;
        },

        setSearchJobName: (state, action) => {  
            state.searchJobName = action.payload;
        }
    }
});

export const { setAllJobs, setSingleJob, setAllAdminJobs, setSearchJobName } = jobSlice.actions;

export default jobSlice.reducer;