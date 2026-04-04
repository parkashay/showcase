import { ReactNode } from 'react'

const Question = ({children}:{children: ReactNode}) => {
  return (
    <div className='font-body text-base text-[#1C1917] dark:text-[#FAFAF7] my-6 pb-4 border-b border-[#E7E5E4] dark:border-[#44403C] leading-relaxed'>
        {children}
    </div>
  )
}

export default Question
