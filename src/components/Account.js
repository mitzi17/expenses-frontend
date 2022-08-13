import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import TransactionsContainer from '../containers/TransactionsContainer'

const Account = (props) => {

//console.log(props.accounts)
    
   const { id } = useParams()
   let account = props.accounts[id - 1]
   //console.log(account)
   

    return (
        <div>
            <h2>
                {account ? account.name : null} - {account ? account.balance : null}
            </h2>
            <TransactionsContainer account={account}/>
        </div>
    )
}

export default Account