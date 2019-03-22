import { ListPage } from "~/../e2e/locators/App/ListPage";

// napisac analogiczne testy jak w part 2, ale wykorzystując wyłącznie locatory
describe('Part 3', () => {
    beforeEach(() => {

    });

    it('przykład użycia', () => {
        const lp = new ListPage();
        lp
            .candidatesList // lista kandydatów
            .candidate // wpis kandydata (jest ich wiele!)
            .eq(0) // wybierzmy pierwszy
            .getElement() // przejdźmy z kontekstu locatorów do normalnych funkcji cypressowych
            .contains('Kandydat Jarek');

        lp.candidatesList.candidate.eq(0).goToCandidatePage();
    });
})