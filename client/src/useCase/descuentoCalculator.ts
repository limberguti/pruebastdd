export class DescuentoCalculator {
  static calcularDescuento(totalCompra: number, tipoCliente: string): number | string {
    if (tipoCliente === "regular") {
      return 0; // Sin descuento para cliente regular
    } else if (tipoCliente === "vip") {
      if (totalCompra > 500) {
        return totalCompra * 0.1; // 10% de descuento para compras mayores a 500 USD
      } else {
        return totalCompra * 0.1; // 10% de descuento para cliente VIP
      }
    } else if (tipoCliente === "nuevo") {
      return "Error (no se aplica descuento para clientes nuevos)";
    } else {
      return "Error (tipo de cliente no válido)";
    }
  }
}
