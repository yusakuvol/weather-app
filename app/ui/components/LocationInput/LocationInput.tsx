'use client'

import { useEffect, useRef, useState } from 'react'
import { z } from 'zod'

import { redirectByPath } from '~/app/lib/actions'
import { fetchLocationByWord } from '~/app/lib/data'
import { styles } from '~/app/ui/components/LocationInput/LocationInput.css'

type Props = {
  location: string
}

export default function LocationInput({ location }: Props) {
  const [error, setError] = useState<string | null>(null)
  const [text, setText] = useState<string>(location)
  const [isFocus, setIsFocus] = useState<boolean>(false)
  const [options, setOptions] = useState<Array<{ text: string }> | null>(null)

  const containerRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setIsFocus(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleChange = async (text: string) => {
    setText(text)
    const locations = text ? (await fetchLocationByWord(text)) || [] : []
    setOptions(
      locations.map((location: { name: string }) => ({
        text: location.name,
      }))
    )
  }

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
          <div className={styles.inputWrapper} ref={containerRef}>
            <input
              type="text"
              name="location"
              placeholder="tokyo"
              className={styles?.input}
              value={text}
              onFocus={() => setIsFocus(true)}
              onChange={(e) => handleChange(e.target.value)}
            />
            {isFocus && (
              <div className={styles.inputBox}>
                {options?.map((option, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setText(option.text)
                      setIsFocus(false)
                    }}
                  >
                    {option.text}
                  </div>
                ))}
              </div>
            )}
          </div>
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
