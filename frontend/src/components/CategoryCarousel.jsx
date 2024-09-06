import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';

const category = [
    "Front End",
    "Back End",
    "Full Stack",
    "Data Science",
    "Machine Learning",
    "Data Analytics",
    "Cyber Security",
    "UI/UX",
    "DevOps",
]

const CategoryCarousel = () => {
    return (
        <div className='w-full px-4 sm:px-8 lg:px-0 my-8'>
            <Carousel className='w-full max-w-xl mx-auto'>
                <CarouselContent className='flex items-center justify-center'>
                    {
                        category.map((item, index) => (
                            <CarouselItem key={index} className='basis-full sm:basis-1/3 lg-basis-1/3 flex justify-center'>
                                <Button variant='outline' className='rounded-full text-sm px-4 py-2 w-full sm:w-auto'>{item}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious className="sm:flex hidden"  />
                <CarouselNext className='sm:flex hidden' />
            </Carousel>
        </div>
    )
};

export default CategoryCarousel;