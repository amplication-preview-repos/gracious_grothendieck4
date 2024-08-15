import * as graphql from "@nestjs/graphql";
import { MindMapResolverBase } from "./base/mindMap.resolver.base";
import { MindMap } from "./base/MindMap";
import { MindMapService } from "./mindMap.service";

@graphql.Resolver(() => MindMap)
export class MindMapResolver extends MindMapResolverBase {
  constructor(protected readonly service: MindMapService) {
    super(service);
  }
}
