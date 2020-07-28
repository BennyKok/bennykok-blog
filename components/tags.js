

export default function Tag({ tags }) {
    return (
        <div>
            {
                tags ? <div className="flex flex-row items-center">{
                    tags.map((node,i) => {
                        return (
                            <div key={i}>
                                <span style={{ paddingTop: "0.1rem", paddingBottom: "0.1rem" }} className="inline-block border border-black border-opacity-25 rounded-full px-3 text-sm text-gray-700 mr-1">#{node}</span>
                            </div>
                        )
                    })
                }</div> : null
            }
        </div>
    )
}