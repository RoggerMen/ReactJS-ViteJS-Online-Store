/**
 * This function calculates total price of a new order
 * @param {Array} products cartProducts: Array of Objects 
 * @returns {number} Total price
 */
export const totalPrice = (products) => {
    let sum = 0;
    products.forEach(product => sum += product.price);
    return parseFloat(sum.toFixed(2)); // Redondea a 2 decimales
  };
  
  // OTRA FORMA DE HACERLO ES CON EL REDUCE
  /**
   export const totalPrice = (products) => {
    return parseFloat(products.reduce((sum, product) => sum + product.price, 0).toFixed(2));
} 
   */


