import React from 'react'
import { connect } from 'react-redux'
import { deleteTransaction } from '../actions/deleteTransaction'

const Transactions = (props) => {

const handleDelete = (transaction) => {
    props.deleteTransaction(transaction.id, transaction.account_id)


}

    return (
        <div>
            Transactions
            {props.transactions && props.transactions.map(transaction => 
                <li key={transaction.id}> {transaction.kind} - {transaction.amount} - {transaction.date} <button onClick={() => handleDelete(transaction)}>DELETE</button></li>)}
        </div>
    )

}

export default connect(null, {deleteTransaction}) (Transactions)