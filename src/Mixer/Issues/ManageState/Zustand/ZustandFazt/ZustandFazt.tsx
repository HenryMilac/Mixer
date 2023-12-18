import { datos } from "./src/users"
import { useEffect } from "react"

export default function ZustandFazt() {

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
        <div className="p-5">
            <h1>Mapping: </h1>
            <hr/>
            
            <div className="mt-5">
                {posts.map(post => (
                    <p key={post.id}>{post.title}</p>
                ))}
            </div>
        </div>
    )
}