// pages/index.js
import axios from 'axios';
import Link from 'next/link';

export async function getStaticProps() {
    const res = await axios.get('https://fakestoreapi.com/products');
    return { props: { products: res.data } };
}

export default function Home({ products }) {
    return (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product) => (
                <Link href={`/product/${product.id}`} key={product.id}>
                    <div className="border p-4 rounded cursor-pointer hover:shadow-lg transition-shadow">
                        <img src={product.image} alt={product.title} className="w-full h-40 object-contain" />
                        <h2 className="text-lg font-semibold">{product.title}</h2>
                        <p className="text-gray-600">${product.price}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
