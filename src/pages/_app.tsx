import type { AppProps } from "next/app"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState, useEffect } from "react"
import Navbar from "@/components/Navbar"
import "@/styles/globals.css"

import { loadCart } from "@/features/cart/cartStore"

export default function App({ Component, pageProps }: AppProps) {

  const [queryClient] = useState(() => new QueryClient())

  useEffect(() => {

    loadCart()

  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}