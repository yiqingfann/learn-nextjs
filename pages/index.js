import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yonekko | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Hello there! Im yonekko.</p>
        <Link href="/blogs"><a className={styles.btn}>See my blogs</a></Link>
      </div >
    </>
  )
}
