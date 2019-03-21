export default () => {
    cy
        .request('GET', 'http://localhost:3030/candidates')
        .then((response) => {
            if (response.body && response.body.length) {
                response.body.forEach((candidate) => {
                    cy.request('DELETE', `http://localhost:3030/candidates/${candidate.id}`);
                });
            }
        });
}