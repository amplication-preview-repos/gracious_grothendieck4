import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MindMapServiceBase } from "./base/mindMap.service.base";

@Injectable()
export class MindMapService extends MindMapServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
