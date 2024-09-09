import React from 'react';
import Navbar from './shared/Navbar';
import { Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Contact, Mail, Pen } from 'lucide-react';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import AppliedJobs from './AppliedJobs';
import EditUserProfileModal from './EditUserProfileModal';

const skills = ["Html", "Css", "Javascript", "React", "Tailwind", "Node"]


const Profile = () => {

    const [open, setOpen] = React.useState(false);

    const isResume = true;

    return (
        <div className='min-h-screen'>

            <Navbar />

            <div className="max-w-4xl mx-auto bg-white border-0 md:border border-gray-200 rounded-2xl my-12 p-5 md:my-20 md:p-8">
                <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-6'>

                    {/* Avatar and Details */}
                    <div className='flex flex-col md:flex-row items-center gap-4'>
                        <Avatar className="w-20 h-20 md:w-24 md:h-24">
                            <AvatarImage src="https://i.pinimg.com/736x/b0/33/c1/b033c1e388efef133716a5364a056ed9.jpg" alt="Avatar image" />
                        </Avatar>
                        <div className='text-center md:text-left'>
                            <h1 className='font-medium text-xl md:text-xl'>Full Name</h1>
                            <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus impedit enim autem deleniti.</p>
                        </div>
                    </div>

                    {/* Edit Button */}
                    <Button variant='outline' className='rounded-full flex-shrink-0' onClick={() => setOpen(true)}>
                        <Pen />
                    </Button>
                </div>

                {/* Contact Information */}
                <div className='mt-4'>
                    <div className='flex items-center gap-2 mt-2'>
                        <Mail w-5 h-5 />
                        <span className='text-sm md:text-base'>abhijith@gmail.com</span>
                    </div>
                    <div className='flex items-center gap-2 mt-2'>
                        <Contact className='w-5 h-5' />
                        <span className='text-sm md:text-base'>1234567890</span>
                    </div>
                </div>

                {/* Skills Section */}
                <div className='mt-5'>
                    <h2 className='text-lg font-semibold'>Skills</h2>
                    <div className='flex flex-wrap gap-2 mt-2'>
                        {skills.length !== 0 ? (
                            skills.map((item, index) => <Badge key={index} className='text-xs md:text-sm'>{item}</Badge>)
                        ) : (
                            <span className='text-sm text-gray-500'>NA</span>
                        )}
                    </div>
                </div>

                {/* Resume Section */}
                <div className='mt-5'>
                    <Label className='text-md font-bold'>Resume</Label>
                    {
                        isResume ?
                            <a target='blank' href="https://www.youtube.com/watch?v=F5EYXc91Cpo&t=21531s"
                                className='text-blue-700 hover:underline cursor-pointer text-sm md:text-base ml-2'
                            > View Resume</a>
                            : <span className='text-sm text-gray-500'>NA</span>
                    }
                </div>
            </div>

            <div className='max-w-4xl mx-auto bg-white rounded-2xl my-10 p-5 md:p-8 '>
                <h1 className='text-lg font-bold mb-4'>Applied Jobs</h1>
                {/* Application table */}
                <AppliedJobs />
            </div>

            {/* Edit Modal */}
            <EditUserProfileModal open={open} setOpen={setOpen} />
        </div>
    )
}

export default Profile;