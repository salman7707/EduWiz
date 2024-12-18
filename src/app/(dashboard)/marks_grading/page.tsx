import HeadingSection from '@/components/shared/pageSection/addStudentPageSection/HeadingSection'
import MarksAndFailCriteria from '@/components/shared/pageSection/marksGradingPageSection/MarksAndFailCriteria'
import React from 'react'

export default function page() {
  return (
    <div className='py-8 md:px-6 xss:px-2 xs:px-1'>
        <HeadingSection forpage='Settings' heading='Exam Grading' buttonsection={false} />
        <MarksAndFailCriteria />
    </div>
  )
}
