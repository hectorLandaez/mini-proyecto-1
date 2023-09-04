/**
 * Esta función te permite hacer un reset de los campos selecciónados por el usuario.
 * No se retorna nada. recuerca que algunos valores se hace el reset a 0, otros a 1
 */
export function reset() {
  location.reload();
}

/**
 * Esta función te permite calcular el tip(propina) que se recibirá
 * por cada persona.
 * @returns el monto de tip por persona.
 */
export function calcularTip(bill, tip, people) {
  let ftip = ((tip / 100) * bill) / people;
  return ftip.toFixed(2);
}

/**
 * Calcula el total a pagar por cada persona, incluyendo el tip que
 * le corresponde.
 * @returns el monto total por persona.
 */
export function calcularTotal(bill, tip, people) {
  let ftip = ((tip / 100) * bill) / people;
  let ctotal = bill / people;
  const ftotal = ftip + ctotal;
  return ftotal.toFixed(2);
}

/**
 * Valida si el valor de un campo es 0 o no, si lo es retorna true, si no, retorna false
 */
export function esCero(input) {
  if (input <= 0) {
    alert('can"t be zero');
    return true;
  } else {
    return false;
  }
}

/**
 * Añade la clase "active" al elemento.
 * @param { Node } input - un elemento input de html.
 * puedes investigar sobre : uso de classList en los elementos DOM. añadir, remover.
 */
export function claseActivo(input) {
  input.classList.add("active");
}
