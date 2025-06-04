import { StakeUpdate as StakeUpdateEvent } from "../generated/StakingInfo/StakingInfo";
import { StakeUpdate } from "../generated/schema";

export function handleStakeUpdate(event: StakeUpdateEvent): void {
  let entity = new StakeUpdate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  entity.validatorId = event.params.validatorId;
  entity.nonce = event.params.nonce;
  entity.newAmount = event.params.newAmount;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.logIndex = event.logIndex;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
