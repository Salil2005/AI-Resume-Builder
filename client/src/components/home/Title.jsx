import React from 'react'

const Title = ({ title , description}) => {
  return (
    <div className="mt-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            {title}
        </h2>

        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            {description}
        </p>
    </div>
  )
}

export default Title
