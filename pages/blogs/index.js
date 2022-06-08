import Head from 'next/head';
import styles from '../../styles/Blogs.module.css'
import Link from 'next/link';

export const getStaticProps = async () => {
  const rsp = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await rsp.json()

  return {
    props: { blogs: data }
  }
}

export default function Blogs({ blogs }) {
  return (
    <>
      <Head>
        <title>Yonekko | Blogs</title>
      </Head>
      <div>
        <h1>Blogs</h1>
        {blogs.map(blog => (
          <Link href={`/blogs/${blog.id}`} key={blog.id}>
            <a className={styles.single}>
              <h2>{blog.title}</h2>
            </a>
          </Link>
        ))}
      </div>
    </>
  )
}