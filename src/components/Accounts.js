import React from 'react'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteAccount } from '../actions/deleteAccount'

const Accounts = (props) => {

    const handleDelete = (account) => {
        props.deleteAccount(account.id)
    }

    return (

        <div>
            <p class="title is-2 has-text-link has-text-centered">Accounts</p>
            {props.accounts.map(account =>
                <div class="box" key={account.id}>
                    <Link to={`/accounts/${account.id}`}>{account.name}</Link>
                <button class="button is-danger is-light is-small is-rounded has-addons is-right" onClick={() => handleDelete(account)}>DELETE</button>
                </div>)}
        </div>
    )
}

export default connect(null, {deleteAccount}) (Accounts)
