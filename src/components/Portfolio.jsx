const Portfolio = (props) =>{
    return (

        <figure>
    <img className={props.class} src={props.src} alt={props.alt}/>
    <figcaption>{props.caption}</figcaption>
  </figure>

    )
}

export default Portfolio;
