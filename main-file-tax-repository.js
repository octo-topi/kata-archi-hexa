import {forGettingTaxes} from "./application/driving-ports/for-getting-taxes.js";
import {fileTaxRepository} from "./application/driven-ports/file-tax-repository.js";

const main = async () => {
  const args = process.argv;
  console.log('************************************')
  const amount = args[2];
  const rate = await forGettingTaxes.taxRate(amount, fileTaxRepository);
  console.log(`rate for ${amount} is ${rate}`)
  console.log('************************************')
}

main()
