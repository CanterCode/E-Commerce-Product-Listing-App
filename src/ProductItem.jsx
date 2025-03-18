import './ProductItem.css';

function ProductItem({ product }){
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
            <button>Add to Cart</button>
        </div>
    )
}

export default ProductItem;