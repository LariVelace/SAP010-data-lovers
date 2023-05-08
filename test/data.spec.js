/**
 * @jest-environment jsdom
 */

//import { isObject } from 'chart.js/dist/helpers/helpers.core.js';\\
import { filterData, sortData, computeStats } from '../src/data.js'
import data from '../src/data/pokemon/pokemon.js';

describe('filterData', () => {
  test('deveria ser uma função', () => {
    expect(typeof filterData).toBe('function');
  });

  test('deveria encontrar o nome o Pokémon mesmo se o input contiver letras maisculas', () => {
    expect(filterData('PIKACHU', data)).toBe();
  });
});

describe('sortData', () => {
  test('deveria ser uma função', () => {
    expect(typeof sortData).toBe('function');
  });
});

describe('computeStats', () => {
  test('deveria ser um objeto', () => {
    expect(typeof computeStats).toBe('object');
  });
});
