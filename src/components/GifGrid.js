import { useState, useEffect } from "react";

export const GifGrid = ({category}) => {

  useEffect( () => {
    getGifs();
  }, [])

  const getGifs = async() => {
    //api.giphy.com/v1/gifs/search

    const URL = 'https://api.giphy.com/v1/gifs/search?api_key=03nnIkphXhjfAXsX2GZs23CTrrSuU8o5&q=Dragon+ball&limit=10';
    const resp = await fetch(URL);
    const { data } = await resp.json();

    const gifs = data.map( img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      }
    })

    console.log(gifs);
    
  }

  //getGifs();

  return (
    <div>
      <h3>{category}</h3>
    </div>
  )
}