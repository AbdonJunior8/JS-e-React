import { MainContent, Card } from "./components/Components";
import "./App.css";
import "./components/Components.css";
import FeedbackForm from "./components/FeedbackForm.jsx";




function App() {
  return  (
    
    <div className="app">
      <MainContent title="Meu Projeto React">
        <p className="intro">
          !
        </p>
        <FeedbackForm />
        <div className="cards-container">
          <Card
            title="Componentes"
            description="Aprendendo a criar e reutilizar componentes no React."
            author="Equipe React"
          >
            <p>Componentes deixam o código mais organizado e reutilizável.</p>
          </Card>

          <Card
            title="Props"
            description="Utilizando propriedades para passar informações."
            author="Equipe React"
          >
            <p>As props permitem personalizar cada componente com dados diferentes.</p>
          </Card>

          <Card
            title="Props.children"
            description="Inserindo conteúdo dentro de um componente."
            author="Equipe React"
          >
            <p>O conteúdo escrito entre as tags do componente chega pela prop children.</p>
            <button type="button" onClick={() => alert("Você clicou no botão!")}>
              Saiba mais
            </button>
          </Card>
        </div>
      </MainContent>

      
    </div>
  );
}

export default App;