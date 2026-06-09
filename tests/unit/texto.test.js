import { describe, it, expect } from 'vitest';
import { validarTexto, formatearTexto } from '../../src/js/utils/texto.js';

// ============================================================
// Pruebas unitarias para validarTexto
// ============================================================
describe('validarTexto', () => {
  // --- Casos v�lidos ---
  it('debe retornar v�lido para un texto con 3 o m�s caracteres', () => {
    const resultado = validarTexto('Comprar pan');
    expect(resultado.valido).toBe(true);
    expect(resultado.error).toBe('');
  });

  it('debe retornar v�lido para un texto con exactamente 3 caracteres', () => {
    const resultado = validarTexto('ABC');
    expect(resultado.valido).toBe(true);
  });

  it('debe retornar v�lido para un texto con 200 caracteres (l�mite)', () => {
    const texto = 'A'.repeat(200);
    const resultado = validarTexto(texto);
    expect(resultado.valido).toBe(true);
  });
  //--validar los casos invalidos
  it('debe retornar invalido cuando el texto esta vacio', () => {
    const resultado = validarTexto(''); // Arrage -Act
    expect(resultado.valido).toBe(false); //Assert
    expect(resultado.error).toContain('vacio');
  });

  it('debe retornar invalido cuando el texto es < 3 car.',() => {
    const resultado = validarTexto('Hi');
    expect(resultado.valido).toBe(false);
    expect(resultado.error).toContain('menos 3')
  });

  // --validarTexto: texto con caracteres especiales (emojis, tildes, e�es).
    it('debe retornar v�lido para un texto con caracteres especiales', () => {
        const resultado = validarTexto('ni�o, �rbol, caf�, ?');
        expect(resultado.valido).toBe(true);

    });

  // --validarTexto: texto que contiene exactamente 3 espacios y luego una letra (ej. " A").
  it('debe retornar inv�lido para un texto con espacios y una letra', () => {
    const resultado = validarTexto('   A');
    expect(resultado.valido).toBe(false);
    expect(resultado.error).toContain('vacio');

  });

});

// ============================================================
// Pruebas unitarias para formatearTexto
// ============================================================
describe('formatearTexto', () => {
  it('debe convertir la primera letra a may�scula y el resto a min�scula', () => {
    const resultado = formatearTexto('hOLA MUNDO');
    expect(resultado).toBe('Hola mundo');
  });

  it('debe retornar un string vac�o si se ingresa un string vac�o', () => {
    const resultado = formatearTexto('');
    expect(resultado).toBe('');
  });

  it('debe retornar un string vacio si solo hay espacios', () => {
    const  resultado = formatearTexto('   ');
    expect(resultado).toBe('');
  });
});

  describe('Pruebas adicionales ? Tarea 1', () => {

    it('debe formatear texto con caracteres especiales correctamente', () => {
        const resultado = formatearTexto('�rbol');
        expect(resultado).toBe('�rbol');
    });

    it('debe retornar el mismo texto si ya est� correctamente formateado', () => {
        const resultado = formatearTexto('Casa');
        expect(resultado).toBe('Casa');
    });
});
