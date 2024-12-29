import './globals.css'

export const metadata = {
  title: 'Games Browser',
  description: 'Browse games across different platforms',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

