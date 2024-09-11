import { setSingleCompany } from '@/redux/companySlice';
import { setAllJobs } from '@/redux/jobSlice';
import { COMPANY_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';


const useGetCompanyById = (companyId) => {

    const dispatch = useDispatch();

    useEffect(() => {
        const getSingleCompany = async () => {
            try {

                const response = await axios.get(`${COMPANY_API_END_POINT}/get-company/${companyId}`, {
                    withCredentials: true
                });

                console.log("checking",response.data);

                if (response.data.status === 200) {
                    dispatch(setSingleCompany(response.data.result));
                };

            } catch (error) {
                console.log(error);
            }
        }
        getSingleCompany();
    }, [companyId, dispatch]);
};

export default useGetCompanyById;