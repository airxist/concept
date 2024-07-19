import React from 'react'
import Section from '../sharedLayouts/Section'
import Heading from '../components/Heading'
import { member_main, member_span, member_text } from '../constants/members'

const Members = () => {
  return (
    <Section>
      <div>
        <Heading
          mainText={member_main}
          spanText={member_span}
          description={member_text}
        />
      </div>
    </Section>
  )
}

export default Members
