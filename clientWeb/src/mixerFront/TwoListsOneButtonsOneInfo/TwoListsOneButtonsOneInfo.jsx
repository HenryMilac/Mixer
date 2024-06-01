import React, { useState } from 'react';
import 'animate.css';

export default function TwoListsOneButtonsOneInfo() {
    const [selectedItem, setSelectedItem] = useState('item1');
    const [animationKey, setAnimationKey] = useState(0);

    const handleButtonClick = (item) => {
        setSelectedItem(item);
        setAnimationKey(prevKey => prevKey + 1);
    };

    return (
        <div className='flex gap-10'>
            <div className='flex flex-col w-1/2 gap-2'>
                <button className='border py-2' onClick={() => handleButtonClick('item1')}>Item 1</button>
                <button className='border py-2' onClick={() => handleButtonClick('item2')}>Item 2</button>
                <button className='border py-2' onClick={() => handleButtonClick('item3')}>Item 3</button>
            </div>
            <div key={animationKey} className='w-1/2 animate__animated animate__fadeIn'>
                {selectedItem === 'item1' && <p>Item 1, description</p>}
                {selectedItem === 'item2' && <p>Item 2, description</p>}
                {selectedItem === 'item3' && <p>Item 3, description</p>}
            </div>
        </div>
    );
}
