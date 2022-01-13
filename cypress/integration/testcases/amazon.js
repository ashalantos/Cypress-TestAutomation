import LoginPage from '../../pageObjects/LoginPage'
import HomePage from '../../pageObjects/HomePage'

describe('Amazon Add TO Cart', function() {
    
    const loginPage = new LoginPage()
    const homepage = new HomePage()

    it('Assessment', function() {
        loginPage.login("9995146005","!Ashal1993")
        homepage.addToCart()
        homepage.verifyAddedToCard()
        console.log("---End of test---")
    })

})