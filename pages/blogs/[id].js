
export const getStaticPaths = async () => {
  const rsp = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await rsp.json()
  const paths = data.map(blog => ({
    params: {
      id: blog.id.toString()
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const rsp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await rsp.json()

  return {
    props: {
      blog: data
    }
  }
}

export default function Blog({ blog }) {
  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.body}</p>
    </div>
  )
}