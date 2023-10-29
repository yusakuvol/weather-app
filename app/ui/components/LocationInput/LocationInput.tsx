'use client'

import { useState } from 'react'
import { z } from 'zod'

import { redirectByPath } from '~/app/lib/actions'

export default function LocationInput() {
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (data: FormData) => {
    try {
      // form data validation
      const schema = z.object({
        location: z
          .string()
          .min(1, { message: 'Please enter a location name.' }),
      })
      schema.parse({
        location: data.get('location'),
      })
    } catch (error: unknown) {
      if (error instanceof z.ZodError) {
        setError(error.errors[0].message)
      } else {
        setError('An error occurred.')
      }
      return
    }

    setError(null)
    redirectByPath(`/?location=${data.get('location')}`)
  }

  return (
    <form action={handleSubmit}>
      <label htmlFor="location">Location</label>
      <input type="text" name="location" placeholder="Enter location name" />
      <button type="submit">Search</button>
      {error && <p>{error}</p>}
    </form>
  )
}
