import { GenericLocator } from '../GenericLocator';
import { initializeWith, dataQaSelector, cssSelector } from '../decorators';

class Candidate extends GenericLocator {
    @initializeWith(GenericLocator)
    @cssSelector('a')
    link: GenericLocator;

    goToCandidatePage = () => { /* ćwiczenie */
        this.link.getElement().click();
    }
}

class CandidatesList extends GenericLocator {
    @initializeWith(Candidate)
    @dataQaSelector('Candidate')
    candidate: Candidate;
}

export class ListPage extends GenericLocator {
    @initializeWith(CandidatesList)
    @dataQaSelector('CandidatesList')
    candidatesList: CandidatesList;
}