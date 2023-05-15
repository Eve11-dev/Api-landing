import { PartialType } from '@nestjs/mapped-types';
import { CreateLandingDto } from './create-landing.dto';

export class UpdateLandingDto extends PartialType(CreateLandingDto) {}
