import styles from "../../styles/Home.module.scss"

// SSG

import { client } from "../../libs/client";


export const getStaticProps = async (context: {params: { id: string}}) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: "blog", contentId: id });

    return {
        props: {
            blog: data
        }
    }
}

export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "blog" });
    const paths = data.contents.map((content : {id : string}) => `/blog/${content.id}`);
    return {
        paths,
        fallback: false
    }
}

type blogType = {
    blog : {
        title: string,
        publishedAt: string,
        body: HTMLAllCollection
    }
}

export default function BlogId(props : blogType) {
    const { blog } = props;
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>{blog.title}</h1>
            <p className={styles.publishedAt}>{blog.publishedAt}</p>
            <div
                dangerouslySetInnerHTML={{ __html: `${blog.body}` }}
                className={styles.post}
            ></div>
        </main>
    )
}