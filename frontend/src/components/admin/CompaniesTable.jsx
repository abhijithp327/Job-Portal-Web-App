import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Edit2, MoreHorizontal } from 'lucide-react';

const CompaniesTable = () => {
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
          <TableRow>
            <TableCell>
              <Avatar className='w-10 h-10'>
                <AvatarImage src='https://i.pinimg.com/736x/b0/33/c1/b033c1e388efef133716a5364a056ed9.jpg' />
              </Avatar>
            </TableCell>
            <TableCell>Microsoft</TableCell>
            <TableCell>17-04-2025</TableCell>
            <TableCell className='text-right'>
              <Popover>
                <PopoverTrigger className='cursor-pointer'>
                  <MoreHorizontal />
                </PopoverTrigger>
                <PopoverContent className='w-20 md:w-32'>
                  <div className='flex items-center justify-center'>
                    <Edit2 className='w-4 mr-2 cursor-pointer' />
                    <span>Edit</span>
                  </div>
                </PopoverContent>
              </Popover>
            </TableCell>
          </TableRow>
          {/* Add more rows as needed */}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
