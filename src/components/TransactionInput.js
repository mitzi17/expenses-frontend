import React from 'react'
import { connect } from 'react-redux'
import { addTransaction } from '../actions/addTransaction'

class TransactionInput extends React.Component {

    state = {
        kind: 'deposit',
        amount: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTransaction(this.state, this.props.account.id)
        this.setState({
            kind: 'deposit',
            amount: ''
        })
    }

    render() {
        return(

            <div>
                
                <form onSubmit={this.handleSubmit} class="box">
                <p class="title is-4 has-text-link has-text-left">Create New Transaction</p>
                    <div class="field">
                    <label class="label">Transaction Type:</label>
                        <div class="control">
                            <div class="select is-link">
                                <select name='kind' value={this.state.kind} onChange={this.handleChange}>
                                    <option>deposit</option>
                                    <option>withdraw</option>
                                </select>
                            </div>
                        </div>
                    </div>

                <div class="field">
                <label class="label">Transaction Amount:</label>
                    <div class="control">
                        <input class="input is-link" type="text" name='amount' value={this.state.amount} onChange={this.handleChange}/>
                        
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

export default connect(null, {addTransaction})(TransactionInput)