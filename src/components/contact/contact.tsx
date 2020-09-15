import React from 'react'
import { ContactWapper, ContactFooter, SubmitButton } from './contact.style'
import { Input, Textarea } from 'components/inputs/inputs'

export const Contact = () => (
  <ContactWapper>
    <Input />
    <Input />
    <Textarea />
    <ContactFooter>
      <SubmitButton color1="light100" color2="dark100">
        Wyślij
      </SubmitButton>
    </ContactFooter>
  </ContactWapper>
)
