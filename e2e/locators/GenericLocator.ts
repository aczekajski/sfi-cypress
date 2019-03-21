/* eslint-disable no-underscore-dangle */
export class GenericLocator {
   private _parentSelector: Array<(prev?: Cypress.Chainable) => Cypress.Chainable>;

   eq(index: number) {
      if (this._parentSelector && typeof this._parentSelector.length === 'number') {
         this._parentSelector.push((prev) => prev.eq(index));
      }
      return this;
   }

   getElement() {
      if (!this._parentSelector) {
         return;
      }

      let current: Cypress.Chainable;
      for (const locator of this._parentSelector) {
         current = locator(current);
      }
      return current;
   }
}
