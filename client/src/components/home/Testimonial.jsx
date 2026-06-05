import { BookUserIcon } from 'lucide-react'
import React from 'react'
import Title from './Title'

const Testimonial = () => {
  return (
    <div id='testimonials' className="  flex flex-col intems-center py-16 px-4 md:px-8 lg:px-16">
      <div className="flex justify-center mb-12">
       <div className="inline-flex items-center gap-2 text-sm text-green-600 bg-green-400/10 rounded-full px-4 py-1">
            <BookUserIcon className='size-4.5 stroke-green-600' /> 
            <span>Testimonials</span>
        </div>
        </div>
        <Title
        title="Trusted by Job Seekers"
        description="From students to experienced professionals, users rely on our platform to build resumes that make a lasting impression."
        />
    </div>
  )
}

export default Testimonial
