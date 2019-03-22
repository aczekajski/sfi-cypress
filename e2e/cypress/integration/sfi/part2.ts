import clearCandidatesDb from "~/../e2e/helpers/clearCandidatesDb";

describe('Part 2', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();

        clearCandidatesDb();

        cy.server();
        cy.route('/candidates').as('candidatesRequest');
        cy.route('/candidates/*').as('candidateSingleRequest');

        cy.visit('localhost:3000');
    });

    it('should have no candidates at the beginning', () => {
        cy.wait('@candidatesRequest').wait(1);

        cy.contains('age:').should('not.have.length.greaterThan', 0);
    });

    it('should have Clear button working', () => { });

    it('should have Submit button enabled only when all fields are filled', () => { })

    it('should display error if you type numbers as name', () => { });

    it('error should disappear when you correct the name', () => { });

    it('should have Submit button disabled if there is an error', () => { })

    it('error should disappear when you Clear the form', () => { });

    it('should add candidate and show its page', () => {
        cy.contains('+ Add').click();

        const name = `Kandydat Jarek`;
        const age = Math.round(Math.random() * 50).toFixed(0);
        cy.get('input').eq(0).type(name);
        cy.get('input').eq(1).type(age);
        cy.contains('check me').click();
        cy.contains('Submit').click();

        cy.url().should('contain', 'candidate/1');

        cy.contains(name);
        cy.contains(`${age} years`);
    });

    // napisz test na następujący scenariusz:
    // 1. wpisz dane w formularz
    // 2. wyślij formularz
    // 3. kliknij "wstecz" w przeglądarce
    // 4. sprawdź czy formularz jest wyczyszczony
    // 5. kliknij "dalej" w przeglądarce
    // 6. sprawdź czy wysłane formularzem dane nadal tam są

});