import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import data from '../../utils/data';
import Image from 'next/image';

export default function ProductScreen() {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <div>Producto no encontrado!</div>;
  }
  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">Regresar a productos</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={513}
            height={600}
            layout="responsive"
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg font-bold">{product.name}</h1>
            </li>
            <li>Categoria: {product.category}</li>
            <li>Marca: {product.marca}</li>
            <li>
              {product.rating} of {product.numReviews} reviews
            </li>
            <li>Descripcion: {product.description}</li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Precio</div>
              <div>${product.price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Inventario</div>
              <div>
                {product.CountinStock > 0 ? 'Con existencia' : 'Agotado'}
              </div>
            </div>
            <button className="primary-button w-full">Agregar al carro</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
