import { useEffect, useState } from "react"
import { create } from "zustand"

interface Information {
  id: number,
  title: string,
  body: string
}



export const useInformationStore = create(() => ({
  id: '',
  title: '',
  body: ''
}))

const [data, setData] = useState<Information[]>([]) 

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setData(data))
}, [])