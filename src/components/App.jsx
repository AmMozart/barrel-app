import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Menu from './menu/Menu';
import GeneralContainer from './content/general/GeneralContainer';
import Footer from './footer/Footer';
import HeaderContainer from './header/HeaderContainter';
import SettingsContainer from './content/settings/SettingsContainer';
import ServiceContainer from './content/service/ServiceContainer';
import PriceContainer from './content/price/PriceContainer';
import TimerContainer from './content/timer/TimerContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='app'>
          <div className='status'>
            <HeaderContainer />
          </div>
          <Menu />
          <div className='app-wraper-content'>
            <Route exact path='/' render={() => <GeneralContainer />} />
            <Route path='/timer' render={() => <TimerContainer />} />
            <Route path='/price' render={() => <PriceContainer />} />
            <Route path='/settings' render={() => <SettingsContainer />} />
            <Route path='/service' render={() => <ServiceContainer />} />
            <img className='BarrelImg' src='http://thermomir.ru/files/it/2717_8457.png' alt='Рисунок бочки' />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
