import React from 'react'
import { connect } from 'react-redux'

import AccountsContainer from './containers/AccountsContainer'
import Navbar from './components/Navbar';



class App extends React.Component {

  componentDidMount() {
    //this.props.fetchAccounts({type: 'FETCH_ACCOUNTS', payload: {name: 'Checking'}})
  }

  render () {
    return (
      <div className="App">

        <Navbar />
        <AccountsContainer />

      </div>
    )
  }
  
}

export default App;
