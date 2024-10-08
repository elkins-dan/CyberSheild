/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum } from "class-validator";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EnumCybersecurityEventEventType } from "./EnumCybersecurityEventEventType";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class CybersecurityEventWhereInput {
  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  eventSeverity?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  eventTimestamp?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumCybersecurityEventEventType,
  })
  @IsEnum(EnumCybersecurityEventEventType)
  @IsOptional()
  @Field(() => EnumCybersecurityEventEventType, {
    nullable: true,
  })
  eventType?: "Option1";

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;
}

export { CybersecurityEventWhereInput as CybersecurityEventWhereInput };
