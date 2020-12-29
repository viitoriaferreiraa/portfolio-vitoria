const Social = (props) =>{

    return (
        <a target="_blank" rel='noreferrer' href={props.url}>
        <i className={props.class}></i>
      </a>
    )
}

export default Social;
