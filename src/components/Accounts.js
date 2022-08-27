import React from 'react'
import { Route, Link } from 'react-router-dom'
import Account from './Account'


const Accounts = (props) => {

    return (

        <div>
            <p class="title is-2 has-text-link has-text-centered">Accounts</p>
            {props.accounts.map(account =>
                <div class="box" key={account.id}>
                    <Link to={`/accounts/${account.id}`}>{account.name}</Link>
                </div>)}
        </div>

    )

}

export default Accounts