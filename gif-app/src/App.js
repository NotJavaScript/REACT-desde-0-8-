import { Link, Route } from "wouter";
import Detail from 'pages/Detail';
import React from 'react';
import SearchResults from 'pages/SearchResults';
import StaticContext from 'context/StaticContext';
import {GifsContextProvider} from 'context/GifsContext';
import './App.css';
import ErrorPage from "pages/ErrorPage";

const HomePage = React.lazy(() => import("pages/Home"));

function App() {
  return (
    <StaticContext.Provider value={
      {
        name: 'esto-es-con-provider',
        contextoRecibido: true
      }}>
    <div className="App">
      <section className='App-content'>
        <h1>Capítulo 8 - REACT desde 0</h1>
        <Link to='/' className={"PaginaPrincipal"}>Página principal</Link>
        <GifsContextProvider>
                <Route component={HomePage} path="/" />
                <Route
                  component={SearchResults}
                  path="/search/:keyword/:rating?"
                />
                <Route component={Detail} path="/gif/:id" />
                <Route
                component={ErrorPage}
                path="/404"/>
        </GifsContextProvider>
      </section>
    </div>
    </StaticContext.Provider>
  );
}

export default App;
