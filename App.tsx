import React, { useState } from 'react';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import {Product} from './components/type';

const App: React.FC = () => {
    const [cart, setCart] = useState<Product[]>([]);


    const handleAddToCart = (product: Product) => {
        setCart(Prev => [...Prev, product]);
    }

    return(
        <div>
            <h1>My Store</h1>
            <ProductList onAddToCart = {handleAddToCart}/>
            <Cart items={cart}/>
        </div>
    )
}

export default App;