import React from 'react'
import { useParams } from 'react-router-dom'

const Account = (props) => {

    console.log(props.accounts)
    
   const { id } = useParams()
   //let account = props.accounts.[accountId]
   console.log(id)

    return (
        <li>
            {props.account.id}: {props.account.name} - {props.account.balance}
        </li>
    )
}

export default Account