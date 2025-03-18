import { useState } from 'react';
import './App.css';
import React from 'react';
import ProductList from './ProductList';
import Category from './Category';
import CategoryDisplay from './CategoryDisplay.jsx';


const App = () =>{
  const [selectedCategory, setSelectedCategory] = useState("All");
    

  const products = [
    { id: 1, name: 'Air Josh 1s', price: 99.99, description: 'Make your friends jealous with these fashionable high top sneakers.', image: '/images/product1.jpg', category: 'Nice Sneakers'},
    { id: 2, name: 'Skater Bois', price: 75.95, description: "Skate...or don't...these will look great regardless!", image: '/images/product2.jpg', category: 'Nice Sneakers' },
    { id: 3, name: 'The Leisure Dads', price: 29.99, description: 'Complete the dad fit, look fly, and keep the wallet intact!', image: '/images/product3.jpg', category: 'Everyday' },
    { id: 4, name: 'Green Elephants', price: 55.95, description: 'These simple but elegant high tops are perfect for any outfit.', image: '/images/product4.jpg', category: 'Everyday' },
    { id: 5, name: 'Sneaker Ones', price: 47.99, description: 'Workout? Run? Walk? These are perfect for any type of exercise!', image: '/images/product5.jpg', category: 'Outdoors/Sporty' },
    { id: 6, name: 'Sneaker Twos', price: 47.99, description: 'The perfect everyday shoe to suit all of your needs.', image: '/images/product6.jpg', category: 'Everyday' },
    { id: 7, name: 'Snake Skin Loafers', price: 199.99, description: 'Step up your fit with these one of a kind head turners!', image: '/images/product7.jpg', category: 'Night on the town!' },
    { id: 8, name: 'Regular Loafers', price: 69.99, description: "Can't afford the fancy loafers? No problem! These are great too!", image: '/images/product8.jpg', category: 'Night on the town!' },
    { id: 9, name: 'Distinguished Gentlemen', price: 119.95, description: 'Top of the line brown leather boots.', image: '/images/product9.jpg', category: 'Night on the town!' },
    { id: 10, name: 'High Steppers', price: 95.99, description: 'Bright and shiny black leather boots.', image: '/images/product10.jpg', category: 'Night on the town!' },
    { id: 11, name: 'Flash.0', price: 349.99, description: 'Guaranteed to make you run faster, jump higher, and perform better!', image: '/images/product11.jpg', category: 'Outdoors/Sporty' },
    { id: 12, name: 'Flip Floppies', price: 14.99, description: 'Like regular flip flops...just cooler.', image: '/images/product12.jpg', category: 'Outdoors/Sporty'},
  ];


  return (
    <div className="App">
      <h1>Josh's Shoe Store App</h1>
      <h3>Check out our awesome selection of men's shoes!</h3>
      <Category onCategoryChange={setSelectedCategory} />
      {<CategoryDisplay category={selectedCategory} products={products} />}
      <footer>&#169; March 2025 Josh's Shoe Store</footer>
    </div>
  )


}

export default App;