import React from 'react'
import { connect } from 'react-redux'
import { editAccount } from '../actions/editAccount'

class AccountEdit extends React.Component {

    state = {
        name: '',
        balance: '',
        id: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let account = {...this.state, id: this.props.account.id}
        this.props.editAccount(account)
        this.setState({
            name: '',
            balance: '',
            id: ''
        })
    }

    render(){

        return(

            <div>
                <form onSubmit={this.handleSubmit} class="box">
                <p class="title is-4 has-text-link has-text-left">Edit Account Name</p>
                    <div class="field">
                    <label class="label">Checking Account Name:</label>
                        <div class="control">
                            <input class="input is-link" type='text' placeholder='Name' value={this.state.name} name='name' onChange={this.handleChange}/><br/>
                        </div>
                    </div>

                    
                    <div class="control">
                        <button class="button is-link">Submit</button>
                    </div>
                    
                </form>
            </div>
        )

    }

}

export default connect(null, {editAccount})(AccountEdit)