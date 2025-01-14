import {forGettingTaxes} from "./application/driving-ports/for-getting-taxes.js";
import {memoryTaxRepository} from "./application/driven-ports/memory-tax-repository.js";

const main = () => {
  const args = process.argv;
  console.log('************************************')
  const amount = args[2];
  const rate = forGettingTaxes.taxRate(amount, memoryTaxRepository);
  console.log(`rate for ${amount} is ${rate}`)
  console.log('************************************')
}

main()
