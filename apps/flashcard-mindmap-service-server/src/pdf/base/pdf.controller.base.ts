/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PdfService } from "../pdf.service";
import { PdfCreateInput } from "./PdfCreateInput";
import { Pdf } from "./Pdf";
import { PdfFindManyArgs } from "./PdfFindManyArgs";
import { PdfWhereUniqueInput } from "./PdfWhereUniqueInput";
import { PdfUpdateInput } from "./PdfUpdateInput";
import { FlashcardFindManyArgs } from "../../flashcard/base/FlashcardFindManyArgs";
import { Flashcard } from "../../flashcard/base/Flashcard";
import { FlashcardWhereUniqueInput } from "../../flashcard/base/FlashcardWhereUniqueInput";
import { MindMapFindManyArgs } from "../../mindMap/base/MindMapFindManyArgs";
import { MindMap } from "../../mindMap/base/MindMap";
import { MindMapWhereUniqueInput } from "../../mindMap/base/MindMapWhereUniqueInput";
import { QuestionFindManyArgs } from "../../question/base/QuestionFindManyArgs";
import { Question } from "../../question/base/Question";
import { QuestionWhereUniqueInput } from "../../question/base/QuestionWhereUniqueInput";
import { SummaryFindManyArgs } from "../../summary/base/SummaryFindManyArgs";
import { Summary } from "../../summary/base/Summary";
import { SummaryWhereUniqueInput } from "../../summary/base/SummaryWhereUniqueInput";

export class PdfControllerBase {
  constructor(protected readonly service: PdfService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Pdf })
  async createPdf(@common.Body() data: PdfCreateInput): Promise<Pdf> {
    return await this.service.createPdf({
      data: data,
      select: {
        createdAt: true,
        fileName: true,
        fileSize: true,
        fileUrl: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Pdf] })
  @ApiNestedQuery(PdfFindManyArgs)
  async pdfs(@common.Req() request: Request): Promise<Pdf[]> {
    const args = plainToClass(PdfFindManyArgs, request.query);
    return this.service.pdfs({
      ...args,
      select: {
        createdAt: true,
        fileName: true,
        fileSize: true,
        fileUrl: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Pdf })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async pdf(@common.Param() params: PdfWhereUniqueInput): Promise<Pdf | null> {
    const result = await this.service.pdf({
      where: params,
      select: {
        createdAt: true,
        fileName: true,
        fileSize: true,
        fileUrl: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Pdf })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePdf(
    @common.Param() params: PdfWhereUniqueInput,
    @common.Body() data: PdfUpdateInput
  ): Promise<Pdf | null> {
    try {
      return await this.service.updatePdf({
        where: params,
        data: data,
        select: {
          createdAt: true,
          fileName: true,
          fileSize: true,
          fileUrl: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Pdf })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePdf(
    @common.Param() params: PdfWhereUniqueInput
  ): Promise<Pdf | null> {
    try {
      return await this.service.deletePdf({
        where: params,
        select: {
          createdAt: true,
          fileName: true,
          fileSize: true,
          fileUrl: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/flashcards")
  @ApiNestedQuery(FlashcardFindManyArgs)
  async findFlashcards(
    @common.Req() request: Request,
    @common.Param() params: PdfWhereUniqueInput
  ): Promise<Flashcard[]> {
    const query = plainToClass(FlashcardFindManyArgs, request.query);
    const results = await this.service.findFlashcards(params.id, {
      ...query,
      select: {
        content: true,
        createdAt: true,
        id: true,

        pdf: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/flashcards")
  async connectFlashcards(
    @common.Param() params: PdfWhereUniqueInput,
    @common.Body() body: FlashcardWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      flashcards: {
        connect: body,
      },
    };
    await this.service.updatePdf({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/flashcards")
  async updateFlashcards(
    @common.Param() params: PdfWhereUniqueInput,
    @common.Body() body: FlashcardWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      flashcards: {
        set: body,
      },
    };
    await this.service.updatePdf({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/flashcards")
  async disconnectFlashcards(
    @common.Param() params: PdfWhereUniqueInput,
    @common.Body() body: FlashcardWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      flashcards: {
        disconnect: body,
      },
    };
    await this.service.updatePdf({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/mindMaps")
  @ApiNestedQuery(MindMapFindManyArgs)
  async findMindMaps(
    @common.Req() request: Request,
    @common.Param() params: PdfWhereUniqueInput
  ): Promise<MindMap[]> {
    const query = plainToClass(MindMapFindManyArgs, request.query);
    const results = await this.service.findMindMaps(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        nodes: true,

        pdf: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/mindMaps")
  async connectMindMaps(
    @common.Param() params: PdfWhereUniqueInput,
    @common.Body() body: MindMapWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      mindMaps: {
        connect: body,
      },
    };
    await this.service.updatePdf({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/mindMaps")
  async updateMindMaps(
    @common.Param() params: PdfWhereUniqueInput,
    @common.Body() body: MindMapWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      mindMaps: {
        set: body,
      },
    };
    await this.service.updatePdf({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/mindMaps")
  async disconnectMindMaps(
    @common.Param() params: PdfWhereUniqueInput,
    @common.Body() body: MindMapWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      mindMaps: {
        disconnect: body,
      },
    };
    await this.service.updatePdf({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/questions")
  @ApiNestedQuery(QuestionFindManyArgs)
  async findQuestions(
    @common.Req() request: Request,
    @common.Param() params: PdfWhereUniqueInput
  ): Promise<Question[]> {
    const query = plainToClass(QuestionFindManyArgs, request.query);
    const results = await this.service.findQuestions(params.id, {
      ...query,
      select: {
        answer: true,
        createdAt: true,
        id: true,

        pdf: {
          select: {
            id: true,
          },
        },

        question: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/questions")
  async connectQuestions(
    @common.Param() params: PdfWhereUniqueInput,
    @common.Body() body: QuestionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questions: {
        connect: body,
      },
    };
    await this.service.updatePdf({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/questions")
  async updateQuestions(
    @common.Param() params: PdfWhereUniqueInput,
    @common.Body() body: QuestionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questions: {
        set: body,
      },
    };
    await this.service.updatePdf({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/questions")
  async disconnectQuestions(
    @common.Param() params: PdfWhereUniqueInput,
    @common.Body() body: QuestionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questions: {
        disconnect: body,
      },
    };
    await this.service.updatePdf({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/summaries")
  @ApiNestedQuery(SummaryFindManyArgs)
  async findSummaries(
    @common.Req() request: Request,
    @common.Param() params: PdfWhereUniqueInput
  ): Promise<Summary[]> {
    const query = plainToClass(SummaryFindManyArgs, request.query);
    const results = await this.service.findSummaries(params.id, {
      ...query,
      select: {
        content: true,
        createdAt: true,
        id: true,

        pdf: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/summaries")
  async connectSummaries(
    @common.Param() params: PdfWhereUniqueInput,
    @common.Body() body: SummaryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      summaries: {
        connect: body,
      },
    };
    await this.service.updatePdf({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/summaries")
  async updateSummaries(
    @common.Param() params: PdfWhereUniqueInput,
    @common.Body() body: SummaryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      summaries: {
        set: body,
      },
    };
    await this.service.updatePdf({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/summaries")
  async disconnectSummaries(
    @common.Param() params: PdfWhereUniqueInput,
    @common.Body() body: SummaryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      summaries: {
        disconnect: body,
      },
    };
    await this.service.updatePdf({
      where: params,
      data,
      select: { id: true },
    });
  }
}
