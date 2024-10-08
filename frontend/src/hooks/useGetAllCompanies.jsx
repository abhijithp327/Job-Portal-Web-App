import { setCompanies } from '@/redux/companySlice';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';


const useGetAllCompanies = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const getCompanies = async () => {
            try {

                const response = await axios.get(`${COMPANY_API_END_POINT}/user-company`, {
                    withCredentials: true
                });

                console.log("checking", response);

                if (response.data.status === 200) {
                    dispatch(setCompanies(response.data.result));
                };

            } catch (error) {
                console.log(error);
            }
        }
        getCompanies();
    }, []);
};

export default useGetAllCompanies;