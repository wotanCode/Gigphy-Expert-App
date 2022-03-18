import { useState, useEffect } from "react";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([])

  useEffect(() => {
    getGifs();
  }, [])

  const getGifs = async () => {
    //api.giphy.com/v1/gifs/search

    const URL = 'https://api.giphy.com/v1/gifs/search?api_key=03nnIkphXhjfAXsX2GZs23CTrrSuU8o5&q=Dragon+ball&limit=10';
    const resp = await fetch(URL);
    const { data } = await resp.json();

    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      }
    })

    //console.log(gifs);
    setImages(gifs);

  }

  //getGifs();

  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">

        {images.map(img => (
          <GifGridItem
            key={img.id}
            {...img}
          />
        ))

        }
      </div>
    </>
  )
}