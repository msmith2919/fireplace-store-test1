import React, { useState } from 'react';

const HOLIDAY_SHOP = 'Holiday Shop';
const GROCERIES = 'Groceries';

export default function Products({ setCart, cart }) {
    const [products] = useState([
        {
            category: GROCERIES,
            name: 'Arugula',
            cost: 1.38,
            stock: 0,
            image:
                'https://www.fondation-louisbonduelle.org/wp-content/uploads/2016/09/roquette_266788019.png',
        },
        {
            category: GROCERIES,
            name: 'Bananas',
            cost: 0.98,
            stock: 8,
            image:
                'https://cdn11.bigcommerce.com/s-q1qpuo8ch5/images/stencil/2048x2048/products/988/516/bananas__79472.1555505980.png?c=2',
        },
        {
            category: GROCERIES,
            name: 'Potatoes',
            cost: 1.80,
            stock: 37,
            image:
                'https://www.kroger.com/product/images/xlarge/front/0000000004219',
        },
        {
            category: GROCERIES,
            name: 'Organic Potato Chips',
            cost: 2.99,
            stock: 37,
            image:
                'https://www.kettlebrand.com/wp-content/uploads/2016/12/organic-jalapeno-500x649.png',
        },
        {
            category: GROCERIES,
            name: 'Plantain Chips',
            cost: 3.99,
            stock: 29,
            image:
                'https://cdn.shopify.com/s/files/1/0915/1214/products/plantainchips-limemockup.png?v=1599613264',
        },
        {
            category: HOLIDAY_SHOP,
            name: 'Norwegian Pine Christmas Tree',
            cost: 199,
            stock: 65,
            image:
                'https://cdn11.bigcommerce.com/s-qfe11l/images/stencil/2080x1280/products/115852/154737/7.5_Grand_Noble_Fir_Wide_White__55118.1557864980.png?c=2',
        },
        {
            category: HOLIDAY_SHOP,
            name: 'Cozy Holiday Sweater',
            cost: 68.99,
            stock: 15,
            image:
                'https://i.pinimg.com/originals/20/a8/13/20a813a9406db8964104401c7abf4a32.png',
        },
        {
            category: HOLIDAY_SHOP,
            name: 'Stockings',
            cost: 8.99,
            stock: 45,
            image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTO6LKDulHBhOiC7uAG8m7zXjXXQAt24V1NZKzosznFWVl0owk7fHazhEwMrvpz_1oNoot1jCzT&usqp=CAc',
        },
        {
            category: HOLIDAY_SHOP,
            name: 'Holiday Socks',
            cost: 3.99,
            stock: 5,
            image:
                'https://cdn11.bigcommerce.com/s-h0224/images/stencil/500x659/products/4790/14131/ILC-RD_1_1024x1024__40141.1509412914.png?c=2',
        },
    ]);

    const addToCart = (product) => {
        let newCart = [...cart];
        let itemInCart = newCart.find(
            (item) => product.name === item.name
        );
        if (itemInCart) {
            itemInCart.quantity++;
        } else {
            itemInCart = {
                ...product,
                quantity: 1,
            };
            newCart.push(itemInCart);
        }
        setCart(newCart);
    };

    const [category, setCategory] = useState(HOLIDAY_SHOP);

    const getProductsInCategory = () => {
        return products.filter(
            (product) => product.category === category);
    };

    return (
        <>
            <h1>Products</h1>
            Select Department:
            <select onChange={(e) => setCategory(e.target.value)}>
                <option value={HOLIDAY_SHOP}>{HOLIDAY_SHOP}</option>
                <option value={GROCERIES}>{GROCERIES}</option>
            </select>
            <div className="products">
                {getProductsInCategory().map((product, idx) => (
                    <div className="product" key={idx}>
                        <h3>{product.name}</h3>
                        <h4>${product.cost}</h4>
                        <h4 className={product.stock <= 10 ? "lowStock" : "highStock"}>Stock: {product.stock}</h4>
                        <img style={{height: '100px', width: '100px'}} src={product.image} alt={product.name} />
                        {product.stock === 0 ? " " : <button onClick={() => addToCart(product)}>
                            Add to Cart
                        </button>}
                    </div>
                ))}
            </div>
        </>
    );
}