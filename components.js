// components/ProductCard.js
import Link from 'next/link';

export default function ProductCard({ product }) {
    return (
        <Link href={`/product/${product.id}`}>
            <div className="border p-4 rounded cursor-pointer hover:shadow-lg transition-shadow">
                <img src={product.image} alt={product.title} className="w-full h-40 object-contain" />
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-gray-600">${product.price}</p>
            </div>
        </Link>
    );
}
