import { Badge } from './ui/badge';
import React from 'react';
import { Button } from './ui/button';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { setSingleJob } from '@/redux/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { formatDate } from '@/utils/formatDate';
import { toast } from 'sonner';

const JobDescription = () => {

    const dispatch = useDispatch();

    const params = useParams();
    const jobId = params.id;

    const { singleJob } = useSelector(state => state.job);

    const { user } = useSelector(state => state.auth);

    const isApplied = singleJob?.applications?.some(application => application?.applicant === user?.userId || false);

    React.useEffect(() => {
        const fetchSingleJob = async () => {
            try {

                const response = await axios.get(`${JOB_API_END_POINT}/get-job/${jobId}`, {
                    withCredentials: true
                });

                // console.log(response.data);

                if (response.data.status === 200) {
                    dispatch(setSingleJob(response.data.result));
                };

            } catch (error) {
                console.log(error);
            }
        }
        fetchSingleJob();
    }, [jobId, dispatch]);


    const applyJobHandler = async () => {
        try {

            const response = await axios.post(`${JOB_API_END_POINT}/apply-job`, {
                withCredentials: true
            })

            if (response.data.status === 200) {
                toast(response.data.message);
            }

        } catch (error) {
            toast(error.response.data.message);
            console.log(error);
        }
    };

    return (
        <div className='max-w-7xl mx-auto px-4 my-10'>

            <h1 className='font-bold text-xl md:text-2xl'>{singleJob?.title}</h1>
            {/* Badges and Apply Button */}
            <div className='flex flex-col md:flex-row items-start md:items-center justify-between mt-2 space-y-4 md:space-y-0'>
                {/* Badges */}
                <div className='flex flex-wrap items-center gap-2'>
                    <Badge className='text-blue-700 font-bold' variant='ghost'>{singleJob?.position}Positions</Badge>
                    <Badge className='text-[#F83002] font-bold' variant='ghost'>Job type: {singleJob?.jobType}</Badge>
                    <Badge className='text-[#7209b7] font-bold' variant='ghost'>{singleJob?.salary} LPA</Badge>
                </div>
                {/* Apply Button */}
                <Button
                    variant="outline"
                    disabled={isApplied}
                    className={`rounded-lg ${isApplied ? "bg-gray-800 cursor-not-allowed text-white" : "bg-[#7209b7] text-white hover:bg-[#4e298f] hover:text-white"}`}>
                    {isApplied ? "Already Applied" : "Apply Now"}
                </Button>
            </div>

            {/* Job Description Section */}
            <h1 className='border-b-2 border-b-gray-300 font-medium mt-5 text-lg'>Job Description</h1>
            <div className='mt-4'>
                <h1 className='font-bold mt-2'>Role: <span className='text-gray-800 font-normal pl-4'>{singleJob?.title}</span></h1>
                <h1 className='font-bold mt-2'>Location: <span className='text-gray-800 font-normal pl-4'>{singleJob?.location}</span></h1>
                <h1 className='font-bold mt-2'>Description: <span className='text-gray-800 font-normal pl-4'>{singleJob?.description}</span></h1>
                <h1 className='font-bold mt-2'>Total Applicant: <span className='text-gray-800 font-normal pl-4'>{singleJob?.applications.length}</span></h1>
                <h1 className='font-bold mt-2'>Experience: <span className='text-gray-800 font-normal pl-4'>{singleJob?.experienceLevel} Year</span></h1>
                <h1 className='font-bold mt-2'>Salary: <span className='text-gray-800 font-normal pl-4'>{singleJob?.salary} LPA</span></h1>
                <h1 className='font-bold mt-2'>Posted On: <span className='text-gray-800 font-normal pl-4'>{formatDate(singleJob?.createdAt) === 0 ? "Today" : `${formatDate(singleJob?.createdAt)} Days Ago`}</span></h1>
            </div>

        </div>
    )
}

export default JobDescription;