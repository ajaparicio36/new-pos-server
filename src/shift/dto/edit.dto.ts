import { Employee } from '@prisma/client';
import { IsArray, IsOptional } from 'class-validator';

export class EditShiftDto {
  @IsArray()
  @IsOptional()
  employees: Employee[];
}
