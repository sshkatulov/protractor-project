describe('angularjs homepage todo list', () => {
    
    const username = element(by.id('login'));
    const password = element(by.id('password'));
    const logIn = element(by.css('.btn-primary'));
    const logOut = element(by.id('logout'));
    const pageHeader = element(by.css('.panel-heading h2'));

    beforeEach(() => {
        browser.get('http://reportingportal:8080/');
    });

    it('should have title', () => {
        expect(browser.getTitle()).toEqual('Reporting Portal');
    });

    it('should log in', () =>{
        username.sendKeys('%USERNAME%');
        password.sendKeys('%PASSWORD%');
        logIn.click();

        expect(pageHeader.getText()).toEqual('Select Project');
    });

    it('should log out', () =>{
        logOut.click();

        expect(username.isPresent()).toBe(true);
    });
  });
  