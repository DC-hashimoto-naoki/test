import Link from "next/link";
import { client } from "../libs/client";
import styles from '../styles/Home.module.scss'

// SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });
  console.log(data);
  return {
    props: {
      blog: data.contents,
    }
  }
}

type blogType = {
  blog: Array<{
    id: string,
    title: string
  }>
}

export default function Home(props: blogType) {
  const {blog} = props;
  return (
    <div>
      {blog.map((blog) => (
        <li key={blog.id}>
          <Link href={`blog/${blog.id}`}>
            {blog.title}
          </Link>
        </li>
      ))}
    </div>
  )
}
