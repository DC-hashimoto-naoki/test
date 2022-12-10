"use client";
import { useState } from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [count, setCount] = useState(0)

  return (
    <html>
      <head />
      <body>
        <h2>header</h2>
        <button onClick={()=> setCount(count + 1)}>+</button>
        <div>{count}</div>
        {children}
      </body>
    </html>
  )
}
