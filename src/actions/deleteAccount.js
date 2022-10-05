export const deleteAccount = (accountId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3000/accounts/${accountId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(account => dispatch({type: 'DELETE_ACCOUNT', payload: account}))
    }
}