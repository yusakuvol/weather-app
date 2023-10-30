'use client'

import { useState } from 'react'
import { z } from 'zod'

import { redirectByPath } from '~/app/lib/actions'
import { styles } from '~/app/ui/components/LocationInput/LocationInput.css'

type Props = {
  location: string
}

export default function LocationInput({ location }: Props) {
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
    <section className={styles?.section}>
      <h2 className={styles?.h2}>Search location</h2>
      <form action={handleSubmit}>
        <div className={styles?.inputContainer}>
          <input
            type="text"
            name="location"
            placeholder="tokyo"
            className={styles?.input}
            defaultValue={location}
          />
          <button type="submit" className={styles?.button}>
            Search
          </button>
        </div>
        <div className={styles?.errorContainer}>
          {error && <p className={styles?.error}>{error}</p>}
        </div>
      </form>
    </section>
  )
}
