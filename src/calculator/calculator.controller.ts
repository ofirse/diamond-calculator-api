import { Body, Controller, Get, Put } from '@nestjs/common';
import { DiamondDTO } from '../dto/diamond.dto';
import { CalculatorService } from './calculator.service';
import { ClarityOptions } from '../common/clarity-options';
import { ColorOptions } from '../common/color-options';
import { CutOptions } from '../common/cut-options';
import { CaratWeightOptions } from '../common/carat-weight-options';

@Controller('calculator')
export class CalculatorController {

    constructor(private readonly calculatorService: CalculatorService) { }

    @Get("/carat-weight-options")
    public async getAllCaratWeightOptions() : Promise<string[]> {
        return this.calculatorService.getOptionsByCategory(CaratWeightOptions);
    }

    @Get("/clarity-options")
    public async getAllClarityOptions() : Promise<string[]> {
        return this.calculatorService.getOptionsByCategory(ClarityOptions);
    }

    @Get("/color-options")
    public async getAllColorOptions() : Promise<string[]> {
        return this.calculatorService.getOptionsByCategory(ColorOptions);
    }

    @Get("/cut-options")
    public async getAllCutOptions() : Promise<string[]> {
        return this.calculatorService.getOptionsByCategory(CutOptions);
    }

    @Put("/calcPrice")
    public async calcPrice(@Body() diamond: DiamondDTO) : Promise<number> {
        return this.calculatorService.calcDiamondPrice(diamond);
    }
}
