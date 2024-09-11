import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ArgsType()
class BlockchainRecordDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    chainName!: string;

    @Field(() => Date)
    @Type(() => Date)
    creationDate!: Date;

    @Field(() => GraphQLJSON)
    data!: InputJsonValue;
}

export { BlockchainRecordDto as BlockchainRecordDto };