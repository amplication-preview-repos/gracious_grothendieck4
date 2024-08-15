/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { SummaryWhereUniqueInput } from "../../summary/base/SummaryWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SummaryUpdateManyWithoutPdfsInput {
  @Field(() => [SummaryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SummaryWhereUniqueInput],
  })
  connect?: Array<SummaryWhereUniqueInput>;

  @Field(() => [SummaryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SummaryWhereUniqueInput],
  })
  disconnect?: Array<SummaryWhereUniqueInput>;

  @Field(() => [SummaryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SummaryWhereUniqueInput],
  })
  set?: Array<SummaryWhereUniqueInput>;
}

export { SummaryUpdateManyWithoutPdfsInput as SummaryUpdateManyWithoutPdfsInput };
