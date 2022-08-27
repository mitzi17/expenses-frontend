import React from 'react'
import { connect } from 'react-redux'
import { deleteTransaction } from '../actions/deleteTransaction'

const Transactions = (props) => {

const handleDelete = (transaction) => {
    props.deleteTransaction(transaction.id, transaction.account_id)


}

    return (
        <div class="box">
            <p class="title is-4 has-text-link has-text-left">All Transactions</p>
            <p class="title is-6 has-text-link has-text-left">   -  Type - Amount - Date - </p>
            {props.transactions && props.transactions.map(transaction => 
                <div class="box" key={transaction.id}> {transaction.kind} - ${transaction.amount} - {transaction.date} <button onClick={() => handleDelete(transaction)}>DELETE</button></div>)}
        </div>
    )

}

export default connect(null, {deleteTransaction}) (Transactions)