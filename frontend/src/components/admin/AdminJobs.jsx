import React from 'react';
import Navbar from '../shared/Navbar';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AdminJobsTable from './AdminJobsTable';
import { setSearchJobName } from '@/redux/jobSlice';

const AdminJobs = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = React.useState('');

  const handleClick = () => {
    navigate('/admin/jobs/post-job');
  };

  React.useEffect(() => {
    dispatch(setSearchJobName(input));
  }, [input, dispatch]); 


  return (
    <div className='pt-16'>
      <Navbar />

      <div className='max-w-full sm:max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto my-10'>
        <div className='flex flex-col sm:flex-row items-center justify-between mb-5 gap-4'>
          <Input
            className='w-full sm:w-fit'
            type='text'
            placeholder='Filter by name'
            onChange={(e) => setInput(e.target.value)} 
          />
          <Button className='w-full sm:w-auto' onClick={handleClick}>
           Post New Jobs
          </Button>
        </div>
        <AdminJobsTable />
      </div>
    </div>
  );
};

export default AdminJobs;
