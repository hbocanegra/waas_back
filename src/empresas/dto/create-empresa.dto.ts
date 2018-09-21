import { ApiModelProperty } from '@nestjs/swagger';

export class CreateEmpresaDto {

    @ApiModelProperty()
    readonly nit: number;

    @ApiModelProperty()
    readonly nombre: string;

    @ApiModelProperty()
    readonly alta: Date;

    @ApiModelProperty()
    readonly contrato: string;

    @ApiModelProperty()
    readonly estado: string;
}