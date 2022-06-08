import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PageNotFound() {
  const router = useRouter()
  const [isCancelled, setIsCancelled] = useState(false)

  useEffect(() => {
    let timer = setTimeout(() => {
      router.push("/")
    }, 3000);

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="not-found">
      <h1>Oops...</h1>
      <h2>This page cannot be found</h2>
      <p>Go back to <Link href="/">Homepage</Link></p>
    </div>
  )
}