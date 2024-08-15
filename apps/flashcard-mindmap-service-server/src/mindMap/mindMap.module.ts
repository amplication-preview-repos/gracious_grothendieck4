import { Module } from "@nestjs/common";
import { MindMapModuleBase } from "./base/mindMap.module.base";
import { MindMapService } from "./mindMap.service";
import { MindMapController } from "./mindMap.controller";
import { MindMapResolver } from "./mindMap.resolver";

@Module({
  imports: [MindMapModuleBase],
  controllers: [MindMapController],
  providers: [MindMapService, MindMapResolver],
  exports: [MindMapService],
})
export class MindMapModule {}
