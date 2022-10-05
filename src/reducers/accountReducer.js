export default function accountReducer(state = {accounts: []}, action) {
    
    switch (action.type) {
        case 'FETCH_ACCOUNTS':
            return {accounts: action.payload}

        case 'ADD_ACCOUNT':
            return {...state, accounts: [...state.accounts, action.payload]}

        case 'EDIT_ACCOUNT':
            let accountsArrayForEdit = state.accounts.map(account => {
                if (account.id === action.payload.id) {
                    return action.payload
                } else {
                    return account
                }
            })
            return {...state, accounts: accountsArrayForEdit}
            
        case 'DELETE_ACCOUNT':
            let allAccountsArray = state.accounts.map(account => {
                if (account.id === action.payload.id) {
                    return action.payload
                } else {
                    return account
                }
            })
            return {...state, accounts: allAccountsArray}
            
        case 'ADD_TRANSACTION':
            let accounts = state.accounts.map(account => {
                if (account.id === action.payload.id) {
                    return action.payload
                } else {
                    return account
                }
            })
            return {...state, accounts: accounts}
            
        case 'DELETE_TRANSACTION':
            let accountsArray = state.accounts.map(account => {
                if (account.id === action.payload.id) {
                    return action.payload
                } else {
                    return account
                }
            })
            return {...state, accounts: accountsArray}
            
        default:
            return state
    }

}