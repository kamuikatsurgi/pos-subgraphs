import { NewHeaderBlock as NewHeaderBlockEvent } from "../generated/RootChainProxy/RootChainProxy";
import { NewHeaderBlock } from "../generated/schema";

export function handleNewHeaderBlock(event: NewHeaderBlockEvent): void {
  let entity = new NewHeaderBlock(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  entity.proposer = event.params.proposer;
  entity.headerBlockId = event.params.headerBlockId;
  entity.reward = event.params.reward;
  entity.start = event.params.start;
  entity.end = event.params.end;
  entity.root = event.params.root;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.logIndex = event.logIndex;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
