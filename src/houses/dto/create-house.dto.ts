import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsAlphanumeric,
  Matches,
} from 'class-validator';

export class CreateHouseDto {
  @IsNotEmpty()
  @IsString()
  readonly address: string;
  @IsNotEmpty()
  @IsString()
  readonly city: string;
  @IsNotEmpty()
  @IsString()
  readonly state: string;
  @IsNotEmpty()
  @IsNumber()
  readonly size: number;
  @IsNotEmpty()
  @IsString()
  readonly type: string;
  @IsNotEmpty()
  @IsString()
  readonly zip_code: string;
  @IsNotEmpty()
  @IsNumber()
  readonly rooms: number;
  @IsNotEmpty()
  @IsNumber()
  readonly bathrooms: number;
  @IsNotEmpty()
  readonly parking: boolean;
  @IsNotEmpty()
  @IsNumber()
  readonly price: number;
  @IsNotEmpty()
  @IsAlphanumeric()
  @Matches(/^[A-Z]{4}\d{4}$/, {
    message: 'El codigo debe tener 4 letras en mayuscula y 4 numeros',
  })
  readonly code: string;
  readonly image: string;
}
