import React, { useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Header from './Header'
import Dashboard from './Dashboard'
import SurveyNew from './SurveyNew'
import Landing from './Landing'


const App = props => {

  useEffect(() => {
    props.fetchUser()
  }, [])

  return (
    <div className='container'>

      <BrowserRouter>
        <div>
          <Header />
          <Route exact path='/' component={Landing}  />        
          <Route exact path='/surveys' component={Dashboard}  />
          <Route exact path='/surveys/new' component={SurveyNew}  />
        </div>
      </BrowserRouter>

    </div>
  );
}

// const mapStateToProps = state => {
//   return {  }
// }

export default connect(null, actions)(App);