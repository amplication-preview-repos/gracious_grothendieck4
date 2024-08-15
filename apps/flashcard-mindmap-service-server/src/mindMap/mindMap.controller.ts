import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MindMapService } from "./mindMap.service";
import { MindMapControllerBase } from "./base/mindMap.controller.base";

@swagger.ApiTags("mindMaps")
@common.Controller("mindMaps")
export class MindMapController extends MindMapControllerBase {
  constructor(protected readonly service: MindMapService) {
    super(service);
  }
}
