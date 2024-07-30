import * as graphql from "@nestjs/graphql";
import { NodeResolverBase } from "./base/node.resolver.base";
import { Node } from "./base/Node";
import { NodeService } from "./node.service";

@graphql.Resolver(() => Node)
export class NodeResolver extends NodeResolverBase {
  constructor(protected readonly service: NodeService) {
    super(service);
  }
}
