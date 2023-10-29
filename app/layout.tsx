import { styles } from '~/app/layout.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={styles.body}>{children}</body>
    </html>
  )
}
