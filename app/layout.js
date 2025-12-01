export const metadata = {
  title: 'Frontend Development Exam',
  description: 'Fix the issues in the project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
