import React from 'react'
import { screen, render, fireEvent, waitFor } from '@testing-library/react'
import Form from './Form'

const props = {
  onSubmit: jest.fn(),
  onRSVPclick: jest.fn(),
  loading: false,
}

describe('<Form />', () => {
  test('accept flow', async () => {
    render(<Form {...props} />)
    expect(screen.getByText('Reply now')).toBeDisabled()

    fireEvent.click(screen.getByText('Delighted to accept 😻'))
    expect(screen.getByText('Reply now')).not.toBeDisabled()
    expect(props.onRSVPclick).toHaveBeenCalled()

    fireEvent.click(screen.getByText('Reply now'))

    await waitFor(() =>
      expect(screen.getByText('Full Name is required')).toBeVisible()
    )

    fireEvent.change(screen.getByPlaceholderText('Full Name'), {
      target: {
        value: 'John Doe',
      },
    })

    expect(screen.getByPlaceholderText('Full Name')).toHaveValue('John Doe')

    fireEvent.submit(screen.getByTestId('form'))

    await waitFor(() => {
      expect(props.onSubmit).toHaveBeenCalledWith({
        fullName: 'John Doe',
        rsvp: true,
      })
    })
  })

  test('reject flow', async () => {
    render(<Form {...props} />)
    expect(screen.getByText('Reply now')).toBeDisabled()

    fireEvent.click(screen.getByText('Regret to decline 😿'))
    expect(screen.getByText('Reply now')).not.toBeDisabled()
    expect(props.onRSVPclick).toHaveBeenCalled()

    fireEvent.change(screen.getByPlaceholderText('Full Name'), {
      target: {
        value: 'John Doe',
      },
    })

    expect(screen.getByPlaceholderText('Full Name')).toHaveValue('John Doe')

    fireEvent.submit(screen.getByTestId('form'))

    await waitFor(() => {
      expect(props.onSubmit).toHaveBeenCalledWith({
        fullName: 'John Doe',
        rsvp: false,
      })
    })
  })

  test('complete form', async () => {
    render(<Form {...props} />)
    expect(screen.getByText('Reply now')).toBeDisabled()

    fireEvent.click(screen.getByText('Delighted to accept 😻'))

    expect(screen.getByText('Reply now')).not.toBeDisabled()

    expect(props.onRSVPclick).toHaveBeenCalled()

    fireEvent.change(screen.getByPlaceholderText('Full Name'), {
      target: {
        value: 'John Doe',
      },
    })

    expect(screen.getByPlaceholderText('Full Name')).toHaveValue('John Doe')

    fireEvent.click(screen.getByText('Plus one?'))

    fireEvent.change(screen.getByTestId('diet'), {
      target: {
        value: 'Vegan',
      },
    })

    expect(screen.getByTestId('diet')).toHaveValue('Vegan')

    fireEvent.submit(screen.getByTestId('form'))

    await waitFor(() => {
      expect(props.onSubmit).toHaveBeenCalledWith({
        fullName: 'John Doe',
        rsvp: true,
        diet: 'Vegan',
        plusone: true,
      })
    })
  })
})
