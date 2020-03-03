import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/menu/Menu';
import GeneralContainer from './components/content/general/GeneralContainer';
import Footer from './components/footer/Footer';
import StatusContainer from './components/status/StatusContainter';
import SettingsContainer from './components/content/settings/SettingsContainer';
import ServiceContainer from './components/content/service/ServiceContainer';
import Info from './components/content/info/Info';
import PriceContainer from './components/content/price/PriceContainer';
import TimerContainer from './components/content/timer/TimerContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          
          <div className='status'>
            <StatusContainer />
          </div> 
          <Menu />
          <div className='app-wraper-content'>
            <Route exact path='/' render={() => <GeneralContainer />} />
            {/*<Route path='/general' render={() => <GeneralContainer />} />*/}
            <Route path='/timer' render={() => <TimerContainer />} />
            <Route path='/price' render={() => <PriceContainer />} />
            <Route path='/settings' render={() => <SettingsContainer />} />
            <Route path='/service' render={() => <ServiceContainer />} />
            <Route path='/info' render={() => <Info />} />
            <img className='BarrelImg' src='http://thermomir.ru/files/it/2717_8457.png' alt='Рисунок бочки'/>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
