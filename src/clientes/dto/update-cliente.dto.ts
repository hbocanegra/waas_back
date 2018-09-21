import { ApiModelProperty } from '@nestjs/swagger';

export class UpdateClienteDto {

    @ApiModelProperty()
    readonly nombre: string;
}