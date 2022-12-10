type Props = {
    photo: any
}

const Result: React.FC<Props> = ({ photo }) => {
    return (
        <div className="photo-list">
            {photo.map((singleData: { urls: { regular: string | undefined; }; links: { html: string | undefined; }; alt_description: string | undefined; }, index: React.Key) => {
                return (
                    <a href={singleData.links.html} key={index}>
                        <img src={singleData.urls.regular} alt={singleData.alt_description} />
                    </a>
                )
            })}
        </div>
    )
}

export default Result;