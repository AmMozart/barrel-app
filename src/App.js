import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/menu/Menu';
import GeneralContainer from './components/content/general/GeneralContainer';
import Footer from './components/footer/Footer';
import StatusContainer from './components/status/StatusContainter';
import SettingsContainer from './components/content/settings/SettingsContainer';
import ServiceContainer from './components/content/service/ServiceContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <img className='BarrelImg' src='http://thermomir.ru/files/it/2717_8457.png' alt='Рисунок бочки'/>
          <div className='status'>
            <StatusContainer />
          </div>
          <Menu />
          <div className='app-wraper-content'>
            <Route path='/general' render={() => <GeneralContainer />} />
            <Route path='/settings' render={() => <SettingsContainer />} />
            <Route path='/service' render={() => <ServiceContainer />} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;