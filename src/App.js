import React from 'react';
import Lottie from 'react-lottie';

import './App.css';

import logo from './assets/logo.png';
import lapis_animation from './assets/lapis-animation.gif';
import mouse_animation from './assets/mouseAnimation.json';
import sadPeople from './assets/sadPeople.json';
import programming_animation from './assets/programming-animation.json';
import logoWhatsapp from './assets/logoWpp.png';
import logoInstagram from './assets/logoInsta.png';

function App() {
  return (
    <div className="container">
      <div className="homeView">
        <header>
          <img src={logo} alt="Logo meu portófolio" />

          <button>Quero meu portfólio</button>
        </header>

        <div className="titlePage">
          <div className="textInformations">
            <h1>Escrevendo uma nova história na sua carreira</h1>
            <p>Mude sua história com a gente e comece a se destacar agora mesmo!</p>
          </div>

          <img src={lapis_animation} alt="Logo meu portófolio" />
        </div>

        <Lottie options={{ loop: true, autoplay: true, animationData: mouse_animation }} height={150} width={200} />
      </div>

      <div className="viewQuestion">
        <h2>Cansado de enviar currículos?</h2>

        <div className="informationsQuest">
          <Lottie options={{ loop: true, autoplay: true, animationData: sadPeople }} width={'100%'} height={'100%'} />

          <div className="textInformationsQuest">
            <h4>Surpreenda os recrutadores</h4>
            <p>Segundo uma pesquisa do jornal O Tempo,
            os recrutadores recebem cerca de 70
            currículos para suas vagas, caso você queira
            ter uma vantagem sobre os outros candidatos
            é extremamente importante demonstrar suas
            habilidades, projetos, etc., de forma dinâmica,
            por quê não disponibilizar essas informações
            através de um portfólio personalizado?</p>
          </div>
        </div>
      </div>

      <div className="viewBenefits">
        <div className="containerInfoBenefits">
          <h2>Vantagens de ter um portfólio</h2>

          <div className="informationsBenefits">
            <h3 className="titleBenefitsLeft">Apresentação profissional</h3>
            <p className="textBenefitsLeft">Criar um portfólio é elaborar uma forma de se apresentar profissionalmente, então é importante estruturá-lo assertivamente para contar a sua trajetória. Afinal, 90% da informação de nossos processos cerebrais é visual. Pesquisas também mostram que utilizando recursos visuais você tem 43% mais chances de convencer as pessoas.</p>

            <h3 className="titleBenefitsRight">Pode ser compartilhado facilmente</h3>
            <p className="textBenefitsRight">A vantagem de um portfólio digital é a facilidade de compartilhá-lo seja via Linkedin, e-mail, etc., para os recrutadores e possíveis parceiros de negócios.</p>
          
            <h3 className="titleBenefitsLeft">Mais cedo ou mais tarde seu trabalho será encontrado</h3>
            <p className="textBenefitsLeft">Se você gosta do que faz entenda que o portfólio é uma das melhores formas de alguém encontrar e confiar a você um trabalho.</p>

            <h3 className="titleBenefitsRight">Comunicação</h3>
            <p className="textBenefitsRight">Todos os seus contatos terão boa visibilidade. Caso o cliente perca algum deles, ele deve simplesmente acessar novamente e encontrar a informação.</p>
          </div>
        </div>
      </div>

      <div className="viewQuestion">
        <div className="informationsQuest">
          <div className="textInformationsQuest">
            <h4>Quem somos nos</h4>
            <p>A <strong>Meu Portfólio</strong> nasceu com o intuito de ajudar pessoas que estão em busca de recolocação ou estão querendo entrar no mercado de trabalho durante esse momento de pandemia. 
              <br></br><br></br>Temos em nosso DNA muito mais do que criatividade, é predominante da nossa cultura entregar muito além de um portfólio para nossos clientes, o nosso objetivo é possibilitar 
              que vocês possam reescrever suas histórias profissionais.
            </p>
          </div>

          <Lottie options={{ loop: true, autoplay: true, animationData: programming_animation }} width={'85%'} height={'85%'} />
        </div>
      </div>

      <footer>
        <div className="divImgsFooter">
          <img src={logoWhatsapp} alt="Imagem para contato do whatsapp" />
          <img src={logoInstagram} alt="Imagem para contato do instagram" />
        </div>
        &copy; Copyright 2020 Meu Portfólio
      </footer>
    </div>
  );
}

export default App;