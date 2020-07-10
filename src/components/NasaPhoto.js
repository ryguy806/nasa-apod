import React, {useEffect, useState} from 'react';

export default function NasaPhoto() {
    
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=eLfdzWK9cYbGCyADT2Ex9XTFfksTTXFBNPP0zwH7`
            );

            const data = await res.json();
            setPhotoData(data);
        }
    }, []);

    if(!photoData) return <div />;

    return (
        <div>
            <img src={photoData.url} alt={photoData.title}/>
        </div>
    );
}