global.window = global;
require('../src/cipher');

describe('cipher', () => {
  it('debería ser un object', () => {
    expect(typeof cipher).toBe('object');
  });
  describe('cipher.encode', () => {
    it('debería ser una función', () => {
      expect(typeof cipher.encode).toBe('function');
    });
    it('debería retornar "HIJKLMNOPQ" para "ABCDEFGHIJ" con offset 33', () => {
      expect(cipher.encode('ABCDEFGHIJ', 33)).toBe('HIJKLMNOPQ');
    });
  });
});
/* eslint max-len: ["error", { "ignoreComments": true }] */
// Hacker edition
//
// [Español]
// Si decides agregar soporte para minúsculas descomenta el test a
// continuación.
//
it('debería retornar "hijklmnopq" para "abcdefghij" with offset 33', () => {
  expect(cipher.encode('abcdefghij', 33)).toBe('hijklmnopq');
});

// Hacker edition
//
// [Español]
// Si decides implementar soporte para caracteres no alfabéticos descomenta
// el test a continuación.
//
//
it('debería retornar " !@" para " !@"', () => {
  expect(cipher.encode(' !@', 33)).toBe(' !@');
});

describe('cipher.decode', () => {
  it('debería ser una función', () => {
    expect(typeof cipher.decode).toBe('function');
  });
  it('debería retornar "ABCDEFGHIJK" para "HIJKLMNOPQR" con offset 33', () => {
    expect(cipher.decode('HIJKLMNOPQR', 33)).toBe('ABCDEFGHIJK');
  });
  //
  // Hacker edition
  //
  // [Español]
  // Si decides agregar soporte para minúsculas descomenta el test a
  // continuación.
  //
  //
  it('debería retornar "abcdefghijk" para "hijklmnopqr" with offset 33', () => {
    expect(cipher.decode('hijklmnopqr', 33)).toBe('abcdefghijk');
  });
  // Hacker edition
  //
  // [Español]
  // Si decides implementar soporte para caracteres no alfabéticos descomenta
  // el test a continuación.
  //
  //
  it('debería retornar " !@" para " !@"', () => {
    expect(cipher.decode(' !@', 33)).toBe(' !@');
  });
});
