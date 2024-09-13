import { setCompanies } from '@/redux/companySlice';
import { setAllAdminJobs } from '@/redux/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';


const useGetAllAdminJobs = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const getAdminJobs = async () => {

            try {

                const response = await axios.get(`${JOB_API_END_POINT}/get-admin-jobs`, {
                    withCredentials: true
                });

                console.log("checking", response);

                if (response.data.status === 200) {
                    dispatch(setAllAdminJobs(response.data.result));
                };

            } catch (error) {
                console.log(error);
            }
        }
        getAdminJobs();
    }, []);
};

export default useGetAllAdminJobs;