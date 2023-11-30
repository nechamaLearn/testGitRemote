//add Shop component with title and products with Product component

import Product from './Product';

function Shop({ title, products }) {
    return (
        <div>
            <h1>{title}</h1>
            {products.map((product) => (
                <Product
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    quantity={product.quantity}
                />
            ))}
        </div>
    )
}

export default Shop;