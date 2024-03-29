import React from 'react'
import { useParams } from 'react-router-dom'
import TransactionsContainer from '../containers/TransactionsContainer'
import AccountEdit from './AccountEdit'

const Account = (props) => {

//console.log(props.accounts)
    
   const { id } = useParams()
   let account = props.accounts.find(account => account.id == id)
   //console.log(account)


    return (
        <div>
            <p class="title is-2 has-text-link has-text-centered">
                {account ? account.name : null} - ${account ? account.balance : null}
            </p>
            <AccountEdit account={account}/>
            <TransactionsContainer account={account}/>
        </div>
    )
}

export default Account