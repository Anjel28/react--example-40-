import React, { useState } from 'react';

const ShoopingBasket: React.FC=()=> {
    const [basket, setBasket] = useState<string[]>([])

    const addItem = (item: string) => {
        setBasket([...basket, item]);
    }

    const removeItem = (index: number) => {
        const updateBasket = basket.filter((_, i) => i !== index);
        setBasket(updateBasket);
    }
    return(
        <div>
            <h2>My Basket</h2>
            <button onClick={() => addItem('Apple')}>Add Apple</button>
              <button onClick={() => addItem('Milk')}>Add Milk</button>
                <button onClick={() => addItem('Bread')}>Add Bread</button>
                <ul>
                    {basket.map((item, index) => (
                        <li key={index}>
                            {item}<button onClick={()=> removeItem(index)}></button>
                        </li>
                    ))}
                </ul>
        </div>
    )
}

export default ShoopingBasket;