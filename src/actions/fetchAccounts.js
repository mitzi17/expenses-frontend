export function fetchAccounts() {
    return (dispatch) => {
        fetch('http://localhost:3000/accounts')
        .then(response => response.json())
        .then(accounts => dispatch({
            type: 'FETCH_ACCOUNTS',
            payload: accounts
        }))

    }
    

}