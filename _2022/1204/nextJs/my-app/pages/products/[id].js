import { useRouter } from "next/router";
import styles from '../../styles/Home.module.css'


// SSG
export async function getStaticProps({ params }) {
    const req = await fetch(`http://localhost:3000/${params.id}.json`);
    const data = await req.json();

    return {
        props: {
            product: data
        }
    }
}

export async function getStaticPaths(){
    const req = await fetch(`http://localhost:3000/products.json`);
    const data = await req.json();
    const paths = data.map(product => {
        return {
            params: {
                id: product
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

const Product = ({ product }) => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div className={styles.container}>
            <main className={styles.main}>
            <h1>{id}のページです</h1>
            <img src={product.image} width="500" />
            </main>
        </div>

    );
}

export default Product;