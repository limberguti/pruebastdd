Feature: Cálculo de descuento

  Scenario: Descuento para cliente Regular
    Given El total de compra es 100 $usd y el tipo de cliente es "regular"
    When Calculo el descuento
    Then El descuento es 0 $usd

  Scenario: Descuento para cliente VIP
    Given El total de compra es 100 $usd y el tipo de cliente es "vip"
    When Calculo el descuento
    Then El descuento es 10 $usd (10 % de descuento)

  Scenario: Descuento para compra mayor a 500$USD para cliente VIP
    Given El total de compra es 600 $usd y el tipo de cliente es "vip"
    When Calculo el descuento
    Then El descuento es 60 $usd (10 % de descuento sobre 600$USD)

  Scenario: Descuento para cliente NUEVO
    Given El total de compra es 100 $usd y el tipo de cliente es "nuevo"
    When Calculo el descuento
    Then Obtengo un mensaje de error indicando que no se aplica descuento para clientes nuevos
