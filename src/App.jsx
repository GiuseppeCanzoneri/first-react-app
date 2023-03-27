import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./Components/ButtonComponent";
import ImageComponent from "./Components/ImageComponent";
import Title from "./Components/Title";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title content="Il mio primo esercizio in React" paragraph="Spero di imparare presto React" bg="orange" />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <ButtonComponent TextButton="Clicca qui" color="red" />

        <ImageComponent
          Image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          Description="Descrizione dell'immagine"
        />

        <ButtonComponent TextButton="PUSH" color="green" />

        <ImageComponent
          Image="https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          Description="immagine"
        />
      </header>
    </div>
  );
}

export default App;
