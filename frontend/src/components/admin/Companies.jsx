import React from 'react';
import Navbar from '../shared/Navbar';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import CompaniesTable from './CompaniesTable';
import { useNavigate } from 'react-router-dom';

const Companies = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/admin/companies/create-company');
  };

  return (
    <div className='pt-16'>
      <Navbar />

      <div className='max-w-full sm:max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto my-10'>
        <div className='flex flex-col sm:flex-row items-center justify-between mb-5 gap-4'>
          <Input
            className='w-full sm:w-fit'
            type='text'
            placeholder='Filter by name'
          />
          <Button className='w-full sm:w-auto' onClick={handleClick}>
            New Company
          </Button>
        </div>
        <CompaniesTable />
      </div>
    </div>
  );
};

export default Companies;
