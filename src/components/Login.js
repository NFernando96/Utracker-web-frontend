import React, { Component } from 'react'

export default class Login extends Component {


    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.submitFunc = this.submitFunc.bind(this);


        this.state = {
            email: "",
            password: ""
        }

    }

    onChangeEmail(e) {
        this.setState({

            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    submitFunc(e) {
        e.preventDefault();

        const obj = {
            email: this.state.email,
            password: this.state.password
        };

        // console.log(obj);
        // axios.post('http://127.0.0.1:8000/api/admin', obj)
        //     .then((res) => { console.log(res.data) })
        //     .then(alert('User added succesfuly'));




        this.setState({
            email: '',
            password: ''
        });

    }


    render() {
        return (
            <div>

                <form onSubmit={this.submitFunc} >
                    <h2>Log in</h2>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        required
                        onChange={this.onChangeEmail}
                        value={this.state.email} />
                    <div className="email error"></div>

                    <label htmlFor="password">Password</label>
                    <input type="password"
                        required
                        onChange={this.onChangePassword}
                        value={this.state.password} />
                    <div className="password error"></div>
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}
