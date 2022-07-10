import React from 'react'
import { connect } from 'react-redux'
import { Routes, Route} from 'react-router-dom'

import { fetchAccounts } from '../actions/fetchAccounts'
import AccountInput from '../components/AccountInput'
import Accounts from '../components/Accounts'
import Account from '../components/Account'



class AccountsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchAccounts()
    }

    render(){

        return(

            <div>
                AccountsContainer
                <Routes>
                    <Route path='/accounts/new' element={<AccountInput/>} />
                    
                    <Route path='accounts' element={<Accounts accounts={this.props.accounts}/>} />
                        <Route path=':id' element={<Account accounts={this.props.accounts}/>} />
                    
                </Routes>

                
            </div>
        )

    }

}

const mapStateToProps = state => {
    return {
        accounts: state.accounts
    }
}

export default connect(mapStateToProps, {fetchAccounts})(AccountsContainer);