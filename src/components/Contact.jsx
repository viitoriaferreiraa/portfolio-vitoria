import Social from './SocialButton';

const Contato = () =>{

    return(
        
    <section className="contato" id="contato">
        <h2>Contato</h2>
            <div className="grid icons">
            <Social class="fab fa-github-alt" url="https://github.com/viitoriaferreiraa"/>
            <Social class="fab fa-instagram" url="https://instagram.com/viitoriaferreiraa"/>
            <Social class="fab fa-facebook" url="https://facebook.com/Plockt"/>
            <Social class="fas fa-envelope-open-text" url="mailto:viihferreiraa74@gmail.com"/>
            <Social class="fas fa-linkedin" url="https://www.linkedin.com/in/vit%C3%B3ria-ferreira-1178841aa/"/>
            


            </div>
    </section>
    )
}

export default Contato;
