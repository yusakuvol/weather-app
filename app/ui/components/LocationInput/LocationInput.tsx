'use client'

import { useState } from 'react'
import { z } from 'zod'

import { redirectByPath } from 'lib/actions'

export default function LocationInput() {
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (data: FormData) => {
    try {
      // form data validation
      const schema = z.object({
        location: z.string().min(1, { message: '地名を入力してください。' }),
      })
      schema.parse({
        location: data.get('location'),
      })
    } catch (error: unknown) {
      if (error instanceof z.ZodError) {
        setError(error.errors[0].message)
      } else {
        setError('エラーが発生しました。')
      }
      return
    }

    setError(null)
    redirectByPath(`/?location=${data.get('location')}`)
  }

  return (
    <form action={handleSubmit}>
      <label htmlFor="location">Location</label>
      <input type="text" name="location" placeholder="地名を入力" />
      <button type="submit">Search</button>
      {error && <p>{error}</p>}
    </form>
  )
}
