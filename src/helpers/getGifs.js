export const getGifs = async (category) => {

  const URL = `https://api.giphy.com/v1/gifs/search?api_key=03nnIkphXhjfAXsX2GZs23CTrrSuU8o5&q=${encodeURI(category)}}&limit=10`;
  const resp = await fetch(URL);
  const { data } = await resp.json();

  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    }
  })

  return (gifs);
}