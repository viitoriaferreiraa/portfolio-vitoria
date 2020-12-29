import Header from './components/Header';
import Contato from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  
  return (
    <>
      <Header/>
       <section className="portfolio" id="portfolio">
         <h2>Portfólio</h2>

         <div className="grid">
          <Portfolio caption='eCommerce' class="img-portfolio" src="./img/ecomerc.jpg" alt="eCommerce"/>
          <Portfolio caption='Mobile' class="img-portfolio" src="./img/mobile.jpg" alt="Mobile"/>
          <Portfolio caption='Web design' class="img-portfolio" src="./img/webdesign.jpg" alt="Web design"/>
          <Portfolio caption='Projetos Sociais' class="img-portfolio" src="./img/projetopessoal.jpg" alt="Projetos Sociais"/>

           </div>
        </section>
      <Contato/>
    </>
  );
}

export default App;
