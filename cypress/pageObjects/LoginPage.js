/// <reference types="cypress" />

class LoginPage
{
    email_tb()  { return cy.get('#ap_email')  }
    home_signin_btn()  { return cy.get('#nav-link-accountList')  }
    password_tb()  { return cy.get('#ap_password')  }
    continue_btn()  { return cy.get('.a-button-inner > #continue')  }
    signin_btn()  { return cy.get('#signInSubmit')  }
    
    
    login(username,password){
        cy.visit('https://www.amazon.in/')
        this.home_signin_btn().click()
        this.email_tb().type(username)
        this.continue_btn().click()
        this.password_tb().type(password)
        this.signin_btn().click()


        
    }



}

export default LoginPage