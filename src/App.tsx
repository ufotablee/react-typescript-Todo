import React from 'react';
import Navbar from './components/Navbar'
import { HashRouter,Switch,Route } from 'react-router-dom'
import { TodosPage } from './components/pages/TodosPage';
import { AboutPage } from './components/pages/AboutPage';

const App: React.FC = () => {
  return <>
  <HashRouter basename={process.env.PUBLIC_URL}>
  <Navbar />
   <div className="container">
  <Switch>
    <Route component={TodosPage} path="/" exact/>
    <Route component={AboutPage} path="/about"/>
  </Switch>
   </div>
  </HashRouter> 
  </>
}

export default App;
