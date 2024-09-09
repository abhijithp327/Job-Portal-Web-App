import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';

const AppliedJobs = () => {
    return (
        <div className='overflow-x-auto'>
            <Table className='min-w-full'>
                <TableCaption className='text-left'>recent applied jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead className='whitespace-nowrap px-4 py-2'>Date</TableHead>
                        <TableHead className='whitespace-nowrap px-4 py-2'>Job Role</TableHead>
                        <TableHead className='whitespace-nowrap px-4 py-2'>Company</TableHead>
                        <TableHead className='whitespace-nowrap px-4 py-2 text-right'>Status</TableHead>
                    </TableRow>
                </TableHeader>
      <TableBody>
                    {[1, 2, 3, 4].map((item, index) => (
                        <TableRow key={index}>
                            <TableCell className='whitespace-nowrap px-4 py-2'>17-04-2025</TableCell>
                            <TableCell className='whitespace-nowrap px-4 py-2'>Software Engineer</TableCell>
                            <TableCell className='whitespace-nowrap px-4 py-2'>Microsoft</TableCell>
                            <TableCell className='whitespace-nowrap px-4 py-2 text-right'>
                                <Badge className='bg-blue-900 text-white' variant='outline'>
                                    Pending
                                </Badge>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default AppliedJobs;