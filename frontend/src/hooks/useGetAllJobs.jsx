import { setAllJobs } from '@/redux/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';


const useGetAllJobs = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAllJobs = async () => {
            try {

                const response = await axios.get(`${JOB_API_END_POINT}/get-all-jobs`, {
                    withCredentials: true
                });

                console.log(response.data);

                if (response.data.status === 200) {
                    dispatch(setAllJobs(response.data.result));
                };

            } catch (error) {
                console.log(error);
            }
        }
        fetchAllJobs();
    }, []);
};

export default useGetAllJobs;