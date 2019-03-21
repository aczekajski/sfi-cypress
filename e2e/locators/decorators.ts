// tslint:disable:no-invalid-this
/* eslint-disable no-underscore-dangle */
export const cssSelector = (selectorString: string) => (target: any, propertyKey: string) => {
   target[`_${propertyKey}_locator`] = (prev) => prev ? prev.find(selectorString) : cy.get(selectorString);
};

export const dataQaSelector = (selectorString: string) => (target: any, propertyKey: string) => {
   target[`_${propertyKey}_locator`] = (prev) => prev ? prev.find(`[data-qa="${selectorString}"]`) : cy.get(`[data-qa="${selectorString}"]`);
};

export const contentSelector = (text: string) => (target: any, propertyKey: string) => {
   target[`_${propertyKey}_locator`] = (prev) => (prev || cy).contains(text);
};

export const componentSelector = (names: string) => (target: any, propertyKey: string) => {
   target[`_${propertyKey}_locator`] = (prev) => (prev || cy).findComponent(names);
};

export const customSelector = (commandsChain: (prev: Cypress.Chainable) => Cypress.Chainable) => (target: any, propertyKey: string) => {
   target[`_${propertyKey}_locator`] = (prev) => commandsChain(prev || cy);
};

export const initializeWith = (ClassConstructor) => (target: any, propertyKey: string) => {
   Object.defineProperty(target, propertyKey, {
      get() {
         if (typeof this[`_${propertyKey}`] === 'undefined') {
            const instance = new ClassConstructor();
            instance._parentSelector = [
               ...(this._parentSelector || []),
            ];
            if (this[`_${propertyKey}_locator`]) {
               instance._parentSelector.push(this[`_${propertyKey}_locator`]);
            }
            this[`_${propertyKey}`] = instance;
         }
         return this[`_${propertyKey}`];
      },
   });
};
