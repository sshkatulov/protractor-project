const { eventFire } = require('./js/sendEvent');
const { inputText } = require('./js/inputText');

describe('angularjs homepage todo list', () => {
    
    const username = element(by.id('login'));
    const password = element(by.id('password'));
    const logIn = element(by.tagName('form'));
    const logOut = element(by.id('logout'));
    const pageHeader = element(by.css('.panel-heading h2'));

    beforeEach(() => {
        browser.get('http://reportingportal:8080/');
    });

    it('should have title', () => {
        expect(browser.getTitle()).toEqual('Reporting Portal');
    });

    it('should log in', () =>{
        browser.executeScript(inputText, username, '%USERNAME%', 'ngModelChange');
        browser.executeScript(eventFire, username, 'input');
        browser.executeScript(inputText, password, '%PASSWORD%', 'ngModelChange');
        browser.executeScript(eventFire, password, 'input');
        browser.executeScript(eventFire, logIn, 'submit');

        expect(pageHeader.getText()).toEqual('Select Project');
    });

    it('should log out', () =>{
        logOut.click();

        expect(username.isPresent()).toBe(true);
    });
  });
  