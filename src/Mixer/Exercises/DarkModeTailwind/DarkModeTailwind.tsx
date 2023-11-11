import { useEffect, useState } from "react"

export default function DarkModeTailwind() {

    const [theme, setTheme] = useState('light')
    
    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme == 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        if(theme == 'dark'){
            document.querySelector('html')?.classList.add('dark')
        }else {
            document.querySelector('html')?.classList.remove('dark')
        }
    }, [theme])


    return(
        <div className="flex justify-center items-center h-screen dark:bg-black dark:text-white">
            <button onClick={handleChangeTheme}>Change</button>
        </div>
    )
}
