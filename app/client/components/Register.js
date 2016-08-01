import React from 'react';
// was comment.
const Register = React.createClass({
  validatePassword: function() {
    var pass = this.refs.passwordInput.value;
    if (pass.length < 6) {
      console.log("Password must greater than 6 characters");
    } else {

    }
  },
  render() {
    return (
      <div>
        <h2 className="form-page__form-heading">We're happy you want to do this</h2>
        <form className="form" onSubmit={console.log("loginClicked")}>
           <div className="form__error-wrapper">
             <p className="form__error form__error--username-taken">Sorry, but this username is already taken.</p>
             <p className="form__error form__error--invalid-password">Password has to be better than that.</p>
             <p className="form__error form__error--field-missing">Please fill out the entire form.</p>
             <p className="form__error form__error--failed">Something went wrong, please try again!</p>
           </div>
           <div className="form__field-wrapper">
             <input className="form__field-input" type="text" id="username" placeholder="Org Name" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
             <label className="form__field-label" htmlFor="username">Organization</label>
           </div>
           <div className="form__field-wrapper">
             <input className="form__field-input" type="text" id="username" placeholder="Admin Name" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
             <label className="form__field-label" htmlFor="username">Admin</label>
           </div>
           <div className="form__field-wrapper">
             <label className="form__field-label" htmlFor="password">Password</label>
             <input className="form__field-input" id="password" type="password"
                    placeholder="••••••••••" ref="passwordInput" onBlur="validatePassword"/>
           </div>
           <div className="form__submit-btn-wrapper">
               <button className="form__submit-btn" type="submit">SUBMIT</button>
           </div>
         </form>
       </div>
    );
  }
});

export default Register;