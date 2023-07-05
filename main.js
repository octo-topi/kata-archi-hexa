import {forGettingTaxes} from "./application/driving-ports/for-getting-taxes.js";
import {taxRepository} from "./application/driven-ports/tax-repository.js";

const main = () => {
  const args = process.argv;
  console.log('************************************')
  const amount = args[2];
  const rate = forGettingTaxes.taxRate(amount, taxRepository);
  console.log(`rate for ${amount} is ${rate}`)
  console.log('************************************')
}

main()
