import { StateSynced as StateSyncedEvent } from "../generated/StateSender/StateSender";
import { StateSynced } from "../generated/schema";

export function handleStateSynced(event: StateSyncedEvent): void {
  let entity = new StateSynced(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  entity.stateId = event.params.id;
  entity.contractAddress = event.params.contractAddress;
  entity.data = event.params.data;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.logIndex = event.logIndex;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
