import { useRenderingStore } from "./store/rendering.store"

export default function Trial() {

    const text = useRenderingStore(state => state.text)
    const setText = useRenderingStore(state => state.setText)

    return (
        <div>
            <input type="text" placeholder="Write yout text" className="text-black"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <p>Text: {text}</p>
        </div>
    )
}