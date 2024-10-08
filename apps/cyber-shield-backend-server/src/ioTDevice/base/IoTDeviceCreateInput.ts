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
import { IsString, MaxLength, IsOptional, IsEnum } from "class-validator";
import { EnumIoTDeviceStatus } from "./EnumIoTDeviceStatus";

@InputType()
class IoTDeviceCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  deviceName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  deviceType?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumIoTDeviceStatus,
  })
  @IsEnum(EnumIoTDeviceStatus)
  @IsOptional()
  @Field(() => EnumIoTDeviceStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { IoTDeviceCreateInput as IoTDeviceCreateInput };
