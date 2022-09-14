import React from 'react'
import { connect } from 'react-redux'
import { addAccount } from '../actions/addAccount'


class AccountInput extends React.Component {

    state = {
        name: '',
        balance: '',
        id: '',
        isSubmitted: false
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addAccount(this.state)
        this.setState({
            name: '',
            balance: '',
            id: '',
        })
    }

  

    render(){

        

        return(

            <div>
                <form onSubmit={this.handleSubmit} class="box">
                <p class="title is-4 has-text-link has-text-left">Create New Account</p>

                <div class="field">
                <label class="label">Checking Account Name:</label>
                    <div class="control">
                        <input class="input is-link" type='text' placeholder='Name' value={this.state.name} name='name' onChange={this.handleChange}/><br/>
                    </div>
                </div>

                <div class="field">
                <label class="label">Checking Account Balance:</label>
                    <div class="control">
                        <input class="input is-link" type='text' placeholder='Balance' value={this.state.balance} name='balance' onChange={this.handleChange}/><br/>
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

export default connect(null, {addAccount})(AccountInput)