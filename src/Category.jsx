import ProductList from "./ProductList";
import './ProductGrid.css';

function Category({ onCategoryChange }) {
    return (
        <div>
            <label for="category" id="category-label">Filter by Category :</label>
            <br />
            <select name="category" id="category" onChange={(e) => {onCategoryChange(e.target.value)}}>
                <option value="All">All</option>
                <option value="Nice Sneakers">Nice Sneakers</option>
                <option value="Everyday">Everyday</option>
                <option value="Outdoors/Sporty">Outdoors/Sporty</option>
                <option value="Night on the town!">Night on the town!</option>
            </select>
        </div>
    )
}

export default Category;