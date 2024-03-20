import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GrMenu, GrClose } from 'react-icons/gr';



export default function ColIconMenuShoNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };



    return (
        <nav>
            <div className='flex justify-between p-5'>
                <p className='text-2xl'>Logo name</p>
                <button onClick={toggleMenu} className='text-4xl bg-gray-700'><GrMenu/></button>
            </div>

            {isOpen && (
                <div className='bg-red-900 fixed top-0 w-full h-screen p-5'>
                    <div className='flex justify-between'>
                        <p className='text-2xl'>Logo name</p>
                        <button onClick={toggleMenu} className='text-4xl'><GrClose/></button>
                    </div>
                    <div className='flex flex-col mt-10'>
                        <Link to={'/'} onClick={toggleMenu}>Link 1</Link>
                        <Link to={'/'} onClick={toggleMenu}>Link 2</Link>
                        <Link to={'/'} onClick={toggleMenu}>Link 3</Link>
                        <Link to={'/'} onClick={toggleMenu}>Link 4</Link>
                    </div>
                </div>
            )}
        </nav>
    )
}
