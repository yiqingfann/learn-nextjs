import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h1>yonekko</h1>
        <Image src="/logo.svg" width="128" height="77" />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blogs">Blogs</Link>
    </nav>
  )
}