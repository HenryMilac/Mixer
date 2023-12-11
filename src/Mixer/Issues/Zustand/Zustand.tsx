import { shallow } from "zustand/shallow"
import { datos } from "./src/users"
import { useEffect } from "react"

export default function Zustand() {

    const {getPosts} = datos()
    const {posts} = datos(state => {
        return {
            posts: state.posts
        }
    })
    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div>
            {posts.map(post => (
                <p key={post.id}>{post.title}</p>
            ))}
        </div>
    )
}