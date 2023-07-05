const forGettingTaxes = {
  taxRate: async (amount, taxRepository) => {
    const rate = await taxRepository.get(amount)
    return rate;
  }
}

export {
  forGettingTaxes
}
