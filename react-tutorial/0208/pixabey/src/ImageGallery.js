import React from 'react'
import "./ImageGallery.css"

const ImageGallery = ({ fetchData }) => {
    return (
        <div>
            <div className='images-wrapper'>
                {fetchData.map((data) => (
                    <div className='image' key={data.id}>
                        <a href={data.pageURL} target="_blank">
                            <img
                                src={data.largeImageURL}
                                alt={data.tags}
                            />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageGallery