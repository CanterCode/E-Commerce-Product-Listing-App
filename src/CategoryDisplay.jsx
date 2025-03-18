import ProductList from "./ProductList";

function CategoryDisplay({ category, products }) {
    const filteredProducts = category === "All"
        ? products
        : products.filter(product => product.category === category);

    return (
        <div>
            {filteredProducts.length > 0 ? (
                <ProductList products={filteredProducts} />
            ) : (
                <p>No products found.</p>
            )}
        </div>
    );
}

export default CategoryDisplay;