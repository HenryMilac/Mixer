import { useState } from 'react';
import { GrMenu, GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';


export default function IconMenuToNavbar() {


    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

    return (
        <nav className='flex justify-between'>
            <p className='text-2xl'>Name del Logo</p>
            <button onClick={toggleMenu} className='text-4xl bg-white text-gray-400'><GrMenu/></button>



            {isOpen && (
                <div className='bg-red-400 fixed top-0 w-full h-screen p-5'>
                    <div className='flex justify-between'>
                        <p>Enlaces útiles para tu app</p>

                        <button onClick={toggleMenu}><GrClose/></button>
                    </div>
                    <div>
                        <Link to={'/'} onClick={toggleMenu}>Inicio</Link>
                    </div>
                </div>
            )}

        </nav>
    )
}
