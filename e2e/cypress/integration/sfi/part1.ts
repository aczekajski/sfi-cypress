describe('Szukanie rzeczy', () => {
    it('main page', () => {
        cy.visit('localhost:3000');
        cy.contains('All candidates');
    });

    describe('form page', () => {
        beforeEach(() => {
            cy.visit('localhost:3000/add');
        });

        it('should have 4 inputs, including "Clear"', () => {
            cy.get('input').should('have.length', 4);
            cy.get('input[value="Clear"]');
            // cy.get('form').contains('Clear').click();
        });

        it('should have disabled Submit button', () => {
            cy.get('button').as('submitButton');
            cy.get('@submitButton').should('have.attr', 'disabled')
            cy.get('@submitButton').should('have.length', 1);
        });
    });

    it('should have links in menu', () => {
        cy.visit('localhost:3000');
        cy.get('a').should('have.length', 2); // fail
        cy.get('nav').within(() => {
            cy.get('a').should('have.length', 2);
        });
        cy.get('nav').find('a').should('have.length', 2);
    });

    it('candidate page', () => {
        cy.server();
        cy.route('http://localhost:3030/candidates/42', { name: 'Stubbed Name', age: 42, checked: true });
        
        cy.visit('localhost:3000/candidate/42');
        cy.contains('Stubbed Name');
        cy.contains(`${42} years`);
    });
});

describe('Klikanie w rzeczy', () => {
    it('go to candidates list', () => { });
    it('go to adding form', () => { });
    it('go to adding form and go back', () => { });
    it('go to candidate page (with stubbed responses)', () => { });
});