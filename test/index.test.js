'use strict';

const bulmaAccordion = require('../src/js/index').default;

describe('bulmaAccordion', () => {
  test('Should throw exception if instanciate with no/wrong selector', () => {
    expect(() => {
      new bulmaAccordion();
    }).toThrow('An invalid selector or non-DOM node has been provided.');
  });

  test('Should return an array', () => {
    var instances = bulmaAccordion.attach('.selector');
    expect(Array.isArray(instances)).toBe(true);
  });

  test('Should return an array of bulmaAccordion instances', () => {
    var instances = bulmaAccordion.attach();
    instances.every(i => expect(i).toBeInstanceOf(bulmaAccordion));
  });
});
