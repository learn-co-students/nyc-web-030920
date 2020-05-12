import React from 'react';

class Login extends React.Component {
    state = {
        name: '',
        username: '',
        password: '',
        confirmation: ''
    }

    /**
     * controlled forms
     * 1. values in state
     * 2. values on the inputs 
     */

    // TODO: What methods need to be created for a fully controlled form?
    // HINT: Use the line below to change the view when the form is submitted
    // this.props.changeView('home')


    // 1 method version: names on inputs and dynamic keys
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    // nameChange = event => {
    //     this.setState({ name: event.target.value })
    // }

    // usernameChange = event => {
    //     this.setState({ username: event.target.value })
    // }

    // passwordChange = event => {
    //     this.setState({ password: event.target.value })
    // }

    // confirmationChange = event => {
    //     this.setState({ confirmation: event.target.value })
    // }

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.password === this.state.confirmation){
            this.props.changeView('home')
            this.props.changeUsername(this.state.username)
            // need to update app.js state username: this.state.username
        } else {
            alert('TRY AGAIN!!')
        }
    }

    render(){
        console.log(this.state)
        // TODO: What additional attributes and event handlers are needed on each of the elements below?
        return (
            <form className="vertical-flex">
                <h2>Create an Account</h2>
                <input name="name" value={this.state.name} onChange={event => this.handleChange(event)} placeholder="Name"/>
                <input name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username"/>
                <input name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
                <input name="confirmation" value={this.state.confirmation} onChange={this.handleChange} placeholder="Confirm Password"/>
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}

export default Login;