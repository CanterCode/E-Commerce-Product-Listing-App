import ProductItem from './ProductItem';
import { array } from 'prop-types';
import './ProductGrid.css';

const ProductList = ({ products }) => {
    return (
        <div className="card-grid">
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    )
};

ProductList.defaultProps = {
    products: [],
}

ProductList.propTypes = {
    products: array,
};

export default ProductList;