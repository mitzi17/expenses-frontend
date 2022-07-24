import React from 'react'
import { Navigate, useParams } from 'react-router-dom'

const Account = (props) => {

//console.log(props.accounts)
    
   const { id } = useParams()
   let account = props.accounts[id - 1]
   //console.log(account)
   

    return (
        <li>
            
            {account ? account.name : null} - {account ? account.balance : null}
        </li>
    )
}

export default Account