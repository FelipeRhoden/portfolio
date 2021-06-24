import { Navbar } from './components/Navbar';
import { DinamicText } from './components/DinamicText';
import { ImgTecnos } from './components/ImgTecnos';
import { Footer } from './components/Footer';
import { } from './components/Itens';

import './global.css';
import { Itens } from './components/Itens';

import MG2 from './assets/MG2.png';
import MG1 from './assets/MG1.png';
import sitePessoal from './assets/sitePessoal.png'

function App() {
  return (
    <div>
      <Navbar />
      <div className="bodyPage">
        <h1 className="title1">{'<Felipe Rhoden />'}</h1>
        <DinamicText />
        <ImgTecnos />
        <h2 className="title2">{'Projetos'}</h2>
        <div className="listItens">
          <Itens 
            link="https://frontend-malditos-goblins.pages.dev/"
            alt="Gerador de Ficha de Goblins V2"
            img={MG2}
            title="Gerador de Ficha de Goblins V2"
          />
      
          <Itens 
            link="https://feliperhoden.github.io/Malditos-Goblins/"
            alt="Gerador de Ficha de Goblins V1"
            img={MG1}
            title="Gerador de Ficha de Goblins V1"
          />

          <Itens 
            link="https://feliperhoden.github.io/"
            alt="Site Pessoal"
            img={sitePessoal}
            title="Site Pessoal"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
