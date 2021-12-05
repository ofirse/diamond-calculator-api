import { Injectable } from '@nestjs/common';
import { DiamondDTO } from '../dto/diamond.dto';
import { CaratWeightOptions } from '../common/carat-weight-options';
import { CutOptions } from '../common/cut-options';
import { ColorOptions } from '../common/color-options';
import { ClarityOptions } from '../common/clarity-options';

@Injectable()
export class CalculatorService {
    public async getOptionsByCategory(categoryObj : any) : Promise<string[]> {
        return Object.keys(categoryObj).sort();
    }

    public async calcDiamondPrice(diamond: DiamondDTO) : Promise<number> {
        const {caratWeight, cut, color, clarity} = diamond;
        return this.AddPercentagesToPrice(CaratWeightOptions[caratWeight],
          [CutOptions[cut], ColorOptions[color], ClarityOptions[clarity]]);
    }

    // For each category (color, cut,..) we raise the diamond price with the matching percentage
    // The initial price sets according to the carat weight
    private AddPercentagesToPrice(price: number, percentages: number[]): number {
        return price + percentages?.reduce((previousValue, currentValue) =>
          previousValue + currentValue / 100 * price, 0);
    }
}
