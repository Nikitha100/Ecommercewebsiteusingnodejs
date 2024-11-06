// pages/product/[id].js
import axios from 'axios';

export async function getStaticPaths() {
    const res = await axios.get('https://fakestoreapi.com/products');
    const products = res.data;

    const paths = products.map((product) => ({
        params: { id: product.id.toString() },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const res = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
    return { props: { product: res.data } };
}

export default function ProductDetail({ product }) {
    return (
        <div className="p-4">
            <img src={product.image} alt={product.title} className="w-full h-60 object-contain" />
            <h2 className="text-2xl font-bold">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
            <p className="mt-4">{product.description}</p>
        </div>
    );
}
