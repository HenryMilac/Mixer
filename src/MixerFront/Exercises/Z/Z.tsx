import useInformationStore from "./store/information.store"

export default function Z() {

    const title = useInformationStore()

    return (
        <div>
            <p>Trial:</p>
            <hr />

            <div>
                {title.map(info => (
                    <div className="mt-5 border p-2">
                        <p>Title: {info.title}</p>
                        <p>Body: {info.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}