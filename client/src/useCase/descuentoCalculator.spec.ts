import { defineFeature, loadFeature } from 'jest-cucumber';
import { DescuentoCalculator } from './descuentoCalculator';

const feature = loadFeature('src/useCase/descuentoCalculator.feature');

defineFeature(feature, (test) => {
  test('Descuento para cliente Regular', ({ given, when, then }) => {
    let descuento: number | string;

    given('El total de compra es 100 $usd y el tipo de cliente es "regular"', () => { });

    when('Calculo el descuento', () => {
      descuento = DescuentoCalculator.calcularDescuento(100, "regular");
    });

    then('El descuento es 0 $usd', () => {
      expect(descuento).toBe(0);
    });
  });

  test('Descuento para cliente VIP', ({ given, when, then }) => {
    let descuento: number | string;

    given('El total de compra es 100 $usd y el tipo de cliente es "vip"', () => { });

    when('Calculo el descuento', () => {
      descuento = DescuentoCalculator.calcularDescuento(100, "vip");
    });

    then('El descuento es 10 $usd (10 % de descuento)', () => {
      expect(descuento).toBe(10);
    });
  });

  test('Descuento para compra mayor a 500$USD para cliente VIP', ({ given, when, then }) => {
    let descuento: number | string;

    given('El total de compra es 600 $usd y el tipo de cliente es "vip"', () => { });

    when('Calculo el descuento', () => {
      descuento = DescuentoCalculator.calcularDescuento(600, "vip");
    });

    then('El descuento es 60 $usd (10 % de descuento sobre 600$USD)', () => {
      expect(descuento).toBe(60);
    });
  });

  test('Descuento para cliente NUEVO', ({ given, when, then }) => {
    let descuento: number | string;

    given('El total de compra es 100 $usd y el tipo de cliente es "nuevo"', () => { });

    when('Calculo el descuento', () => {
      descuento = DescuentoCalculator.calcularDescuento(100, "nuevo");
    });

    then('Obtengo un mensaje de error indicando que no se aplica descuento para clientes nuevos', () => {
      expect(descuento).toBe("Error (no se aplica descuento para clientes nuevos)");
    });
  });
});

