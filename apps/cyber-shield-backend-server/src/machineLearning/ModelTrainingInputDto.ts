import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ArgsType()
class ModelTrainingInputDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    modelName!: string;

    @Field(() => GraphQLJSON)
    trainingData!: InputJsonValue;
}

export { ModelTrainingInputDto as ModelTrainingInputDto };