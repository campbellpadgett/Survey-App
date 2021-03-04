

import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Dashboard from './Dashboard'
import SurveyNew from './SurveyNew'
import Landing from './Landing'


const App = () => {
  return (
    <div className='ui container'>

      <BrowserRouter>
        <div>
          <Route path='/' component={Header}  />
          <Route path='/' component={Landing}  />        
          <Route path='/surveys' component={Dashboard}  />
          <Route path='/surveys/new' component={SurveyNew}  />
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
 