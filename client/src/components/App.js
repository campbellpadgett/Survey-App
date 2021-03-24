import React, { useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Header from './Header'
import Dashboard from './Dashboard'
import SurveyNew from './surveys/SurveyNew'
import Landing from './Landing'
import SurveyFormReview from './surveys/SurveyFormReview'


const App = props => {

  console.log(props)

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
          <Route exact path='/surveys/new/review' component={SurveyFormReview} />
        </div>
      </BrowserRouter>

    </div>
  );
}

// const mapStateToProps = state => {
//   return {  }
// }

export default connect(null, actions)(App);