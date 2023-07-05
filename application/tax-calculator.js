const taxRate = (amount, taxRepository) => {
  return taxRepository.get()
}
export {
  taxRate
}
