import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Edit2, MoreHorizontal } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useGetAllAdminJobs from '@/hooks/useGetAllAdmin';

const AdminJobsTable = () => {

    useGetAllAdminJobs();

    const navigate = useNavigate();

    const { allAdminJobs, searchJobName } = useSelector((state) => state.job);

    console.log("allAdminJobs", allAdminJobs);

    const [filter, setFilter] = React.useState([]);

    React.useEffect(() => {
        // Only filter if companies array is not empty
        if (allAdminJobs.length > 0) {
            const filteredJob = allAdminJobs.filter((job) => {
                if (!searchJobName) {
                    return true; // If no search term, return all jobs
                }
                return job?.title?.toLowerCase().includes(searchJobName?.toLowerCase());
            });
            setFilter(filteredJob);
        } else {
            setFilter([]); // If jobs are empty, set filter to an empty array
        }
    }, [allAdminJobs, searchJobName]);

    return (
        <div className='overflow-x-auto'>
            <Table className='w-full'>
                <TableCaption>Posted Jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className='text-right'>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filter.length === 0 ? (
                        <span>You haven't posted any jobs yet.</span>
                    ) : (
                        filter.map((job, index) => (
                            <TableRow key={index}>
                                <TableCell>{job?.company?.name}</TableCell>
                                <TableCell>{job?.title}</TableCell>
                                <TableCell>{job?.createdAt.split("T")[0]}</TableCell>
                                <TableCell className='text-right'>
                                    <Popover>
                                        <PopoverTrigger className='cursor-pointer'>
                                            <MoreHorizontal />
                                        </PopoverTrigger>
                                        <PopoverContent className='w-20 md:w-32'>
                                            <div onClick={() => navigate(`/admin/companies/${job?._id}`)} className='flex items-center justify-center'>
                                                <Edit2 className='w-4 mr-2 cursor-pointer' />
                                                <span>Edit</span>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default AdminJobsTable;
