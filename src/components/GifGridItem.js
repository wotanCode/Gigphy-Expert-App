export const GifGridItem = ( {title, url }) => {

  //console.log(title)

  return (
    <div>
      <img src={url} alt={title}/>
      <p>{title}</p>
    </div>
  )
}