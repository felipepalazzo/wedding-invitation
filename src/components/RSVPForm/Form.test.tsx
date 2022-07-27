import React from 'react'
import { screen, render } from '@testing-library/react'
import Form from './Form'

test('<Form />', () => {
  const props = {
    onSubmit: jest.fn(),
    onRSVPclick: jest.fn(),
    loading: false,
  }
  render(<Form {...props} />)
  expect(screen.getByPlaceholderText('Full Name')).toBeInTheDocument()
})
