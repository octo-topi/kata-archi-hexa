const forGettingTaxes = {
  taxRate: (amount, taxRepository) => {
    return taxRepository.get(amount)
  }
}

export {
  forGettingTaxes
}
