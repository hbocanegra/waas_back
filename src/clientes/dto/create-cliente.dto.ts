import { ApiModelProperty } from '@nestjs/swagger';

export class CreateClienteDto {

    @ApiModelProperty()
    readonly nit: number;

    @ApiModelProperty()
    readonly nombre: string;

    @ApiModelProperty()
    readonly empresa: string;
}