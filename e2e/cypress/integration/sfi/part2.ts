import clearCandidatesDb from "~/../e2e/helpers/clearCandidatesDb";

describe('Part 2', () => {
    beforeEach(() => {
        // clear cookies and ls
        cy.clearCookies();
        cy.clearLocalStorage();

        // clear db
        clearCandidatesDb();

        // server and routes aliases

        cy.visit('localhost:3000');
    });

    it('should have no candidates at the beginning', () => {
    });

    it('should have Clear button working', () => { });

    it('should have Submit button enabled only when all fields are filled', () => { })

    it('should display error if you type numbers as name', () => { });

    it('error should disappear when you correct the name', () => { });

    it('should have Submit button disabled if there is an error', () => { })

    it('error should disappear when you Clear the form', () => { });

    it('should add candidate and show its page', () => {
    });

    // it('should')
});