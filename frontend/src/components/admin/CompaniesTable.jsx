import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Edit2, MoreHorizontal } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CompaniesTable = () => {

  const navigate = useNavigate();

  const { companies, searchCompanyName } = useSelector((state) => state.company);
  const [filter, setFilter] = React.useState([]);

  React.useEffect(() => {
    // Only filter if companies array is not empty
    if (companies.length > 0) {
      const filteredCompanies = companies.filter((company) => {
        if (!searchCompanyName) {
          return true; // If no search term, return all companies
        }
        return company?.name?.toLowerCase().includes(searchCompanyName?.toLowerCase());
      });
      setFilter(filteredCompanies);
    } else {
      setFilter([]); // If companies are empty, set filter to an empty array
    }
  }, [companies, searchCompanyName]);

  return (
    <div className='overflow-x-auto'>
      <Table className='w-full'>
        <TableCaption>Registered Companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className='text-right'>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filter.length === 0 ? (
            <span>You haven't registered any companies yet.</span>
          ) : (
            filter.map((company, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Avatar className='w-10 h-10'>
                    <AvatarImage src={company?.logo} />
                  </Avatar>
                </TableCell>
                <TableCell>{company?.name}</TableCell>
                <TableCell>{company?.createdAt.split("T")[0]}</TableCell>
                <TableCell className='text-right'>
                  <Popover>
                    <PopoverTrigger className='cursor-pointer'>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className='w-20 md:w-32'>
                      <div onClick={() => navigate(`/admin/companies/${company?._id}`)} className='flex items-center justify-center'>
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

export default CompaniesTable;
