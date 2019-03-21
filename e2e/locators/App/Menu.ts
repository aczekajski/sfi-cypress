import { GenericLocator } from "../GenericLocator";
import { initializeWith, contentSelector } from '../decorators';

export class Menu extends GenericLocator {
    @initializeWith(GenericLocator)
    @contentSelector('candidates')
    allCandidates: GenericLocator;
    
    @initializeWith(GenericLocator)
    @contentSelector('Add')
    addCandidate: GenericLocator;
}