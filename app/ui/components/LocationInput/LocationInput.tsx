import { redirect } from 'next/navigation'
import { z } from 'zod'

export default async function LocationInput() {
  const handleSubmit = async (data: FormData) => {
    'use server'
    const schema = z.object({
      location: z.string(),
    })
    schema.parse({
      location: data.get('location'),
    })
    redirect(`/?location=${data.get('location')}`)
  }

  return (
    <form action={handleSubmit}>
      <label htmlFor="location">Location</label>
      <input type="text" name="location" />
      <button type="submit">Search</button>
    </form>
  )
}
