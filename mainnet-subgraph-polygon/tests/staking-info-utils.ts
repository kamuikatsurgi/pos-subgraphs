import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  ClaimFee,
  ClaimRewards,
  ConfirmAuction,
  DelegatorClaimedRewards,
  DelegatorRestaked,
  DelegatorUnstaked,
  DynastyValueChange,
  Jailed,
  OwnershipTransferred,
  ProposerBonusChange,
  Restaked,
  RewardUpdate,
  ShareBurned,
  ShareMinted,
  SignerChange,
  Slashed,
  StakeUpdate,
  Staked,
  StartAuction,
  ThresholdChange,
  TopUpFee,
  UnJailed,
  UnstakeInit,
  Unstaked,
  UpdateCommissionRate
} from "../generated/StakingInfo/StakingInfo"

export function createClaimFeeEvent(user: Address, fee: BigInt): ClaimFee {
  let claimFeeEvent = changetype<ClaimFee>(newMockEvent())

  claimFeeEvent.parameters = new Array()

  claimFeeEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  claimFeeEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromUnsignedBigInt(fee))
  )

  return claimFeeEvent
}

export function createClaimRewardsEvent(
  validatorId: BigInt,
  amount: BigInt,
  totalAmount: BigInt
): ClaimRewards {
  let claimRewardsEvent = changetype<ClaimRewards>(newMockEvent())

  claimRewardsEvent.parameters = new Array()

  claimRewardsEvent.parameters.push(
    new ethereum.EventParam(
      "validatorId",
      ethereum.Value.fromUnsignedBigInt(validatorId)
    )
  )
  claimRewardsEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  claimRewardsEvent.parameters.push(
    new ethereum.EventParam(
      "totalAmount",
      ethereum.Value.fromUnsignedBigInt(totalAmount)
    )
  )

  return claimRewardsEvent
}

export function createConfirmAuctionEvent(
  newValidatorId: BigInt,
  oldValidatorId: BigInt,
  amount: BigInt
): ConfirmAuction {
  let confirmAuctionEvent = changetype<ConfirmAuction>(newMockEvent())

  confirmAuctionEvent.parameters = new Array()

  confirmAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "newValidatorId",
      ethereum.Value.fromUnsignedBigInt(newValidatorId)
    )
  )
  confirmAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "oldValidatorId",
      ethereum.Value.fromUnsignedBigInt(oldValidatorId)
    )
  )
  confirmAuctionEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return confirmAuctionEvent
}

export function createDelegatorClaimedRewardsEvent(
  validatorId: BigInt,
  user: Address,
  rewards: BigInt
): DelegatorClaimedRewards {
  let delegatorClaimedRewardsEvent =
    changetype<DelegatorClaimedRewards>(newMockEvent())

  delegatorClaimedRewardsEvent.parameters = new Array()

  delegatorClaimedRewardsEvent.parameters.push(
    new ethereum.EventParam(
      "validatorId",
      ethereum.Value.fromUnsignedBigInt(validatorId)
    )
  )
  delegatorClaimedRewardsEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  delegatorClaimedRewardsEvent.parameters.push(
    new ethereum.EventParam(
      "rewards",
      ethereum.Value.fromUnsignedBigInt(rewards)
    )
  )

  return delegatorClaimedRewardsEvent
}

export function createDelegatorRestakedEvent(
  validatorId: BigInt,
  user: Address,
  totalStaked: BigInt
): DelegatorRestaked {
  let delegatorRestakedEvent = changetype<DelegatorRestaked>(newMockEvent())

  delegatorRestakedEvent.parameters = new Array()

  delegatorRestakedEvent.parameters.push(
    new ethereum.EventParam(
      "validatorId",
      ethereum.Value.fromUnsignedBigInt(validatorId)
    )
  )
  delegatorRestakedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  delegatorRestakedEvent.parameters.push(
    new ethereum.EventParam(
      "totalStaked",
      ethereum.Value.fromUnsignedBigInt(totalStaked)
    )
  )

  return delegatorRestakedEvent
}

export function createDelegatorUnstakedEvent(
  validatorId: BigInt,
  user: Address,
  amount: BigInt
): DelegatorUnstaked {
  let delegatorUnstakedEvent = changetype<DelegatorUnstaked>(newMockEvent())

  delegatorUnstakedEvent.parameters = new Array()

  delegatorUnstakedEvent.parameters.push(
    new ethereum.EventParam(
      "validatorId",
      ethereum.Value.fromUnsignedBigInt(validatorId)
    )
  )
  delegatorUnstakedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  delegatorUnstakedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return delegatorUnstakedEvent
}

export function createDynastyValueChangeEvent(
  newDynasty: BigInt,
  oldDynasty: BigInt
): DynastyValueChange {
  let dynastyValueChangeEvent = changetype<DynastyValueChange>(newMockEvent())

  dynastyValueChangeEvent.parameters = new Array()

  dynastyValueChangeEvent.parameters.push(
    new ethereum.EventParam(
      "newDynasty",
      ethereum.Value.fromUnsignedBigInt(newDynasty)
    )
  )
  dynastyValueChangeEvent.parameters.push(
    new ethereum.EventParam(
      "oldDynasty",
      ethereum.Value.fromUnsignedBigInt(oldDynasty)
    )
  )

  return dynastyValueChangeEvent
}

export function createJailedEvent(
  validatorId: BigInt,
  exitEpoch: BigInt,
  signer: Address
): Jailed {
  let jailedEvent = changetype<Jailed>(newMockEvent())

  jailedEvent.parameters = new Array()

  jailedEvent.parameters.push(
    new ethereum.EventParam(
      "validatorId",
      ethereum.Value.fromUnsignedBigInt(validatorId)
    )
  )
  jailedEvent.parameters.push(
    new ethereum.EventParam(
      "exitEpoch",
      ethereum.Value.fromUnsignedBigInt(exitEpoch)
    )
  )
  jailedEvent.parameters.push(
    new ethereum.EventParam("signer", ethereum.Value.fromAddress(signer))
  )

  return jailedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent =
    changetype<OwnershipTransferred>(newMockEvent())

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createProposerBonusChangeEvent(
  newProposerBonus: BigInt,
  oldProposerBonus: BigInt
): ProposerBonusChange {
  let proposerBonusChangeEvent = changetype<ProposerBonusChange>(newMockEvent())

  proposerBonusChangeEvent.parameters = new Array()

  proposerBonusChangeEvent.parameters.push(
    new ethereum.EventParam(
      "newProposerBonus",
      ethereum.Value.fromUnsignedBigInt(newProposerBonus)
    )
  )
  proposerBonusChangeEvent.parameters.push(
    new ethereum.EventParam(
      "oldProposerBonus",
      ethereum.Value.fromUnsignedBigInt(oldProposerBonus)
    )
  )

  return proposerBonusChangeEvent
}

export function createRestakedEvent(
  validatorId: BigInt,
  amount: BigInt,
  total: BigInt
): Restaked {
  let restakedEvent = changetype<Restaked>(newMockEvent())

  restakedEvent.parameters = new Array()

  restakedEvent.parameters.push(
    new ethereum.EventParam(
      "validatorId",
      ethereum.Value.fromUnsignedBigInt(validatorId)
    )
  )
  restakedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  restakedEvent.parameters.push(
    new ethereum.EventParam("total", ethereum.Value.fromUnsignedBigInt(total))
  )

  return restakedEvent
}

export function createRewardUpdateEvent(
  newReward: BigInt,
  oldReward: BigInt
): RewardUpdate {
  let rewardUpdateEvent = changetype<RewardUpdate>(newMockEvent())

  rewardUpdateEvent.parameters = new Array()

  rewardUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "newReward",
      ethereum.Value.fromUnsignedBigInt(newReward)
    )
  )
  rewardUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "oldReward",
      ethereum.Value.fromUnsignedBigInt(oldReward)
    )
  )

  return rewardUpdateEvent
}

export function createShareBurnedEvent(
  validatorId: BigInt,
  user: Address,
  amount: BigInt,
  tokens: BigInt
): ShareBurned {
  let shareBurnedEvent = changetype<ShareBurned>(newMockEvent())

  shareBurnedEvent.parameters = new Array()

  shareBurnedEvent.parameters.push(
    new ethereum.EventParam(
      "validatorId",
      ethereum.Value.fromUnsignedBigInt(validatorId)
    )
  )
  shareBurnedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  shareBurnedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  shareBurnedEvent.parameters.push(
    new ethereum.EventParam("tokens", ethereum.Value.fromUnsignedBigInt(tokens))
  )

  return shareBurnedEvent
}

export function createShareMintedEvent(
  validatorId: BigInt,
  user: Address,
  amount: BigInt,
  tokens: BigInt
): ShareMinted {
  let shareMintedEvent = changetype<ShareMinted>(newMockEvent())

  shareMintedEvent.parameters = new Array()

  shareMintedEvent.parameters.push(
    new ethereum.EventParam(
      "validatorId",
      ethereum.Value.fromUnsignedBigInt(validatorId)
    )
  )
  shareMintedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  shareMintedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  shareMintedEvent.parameters.push(
    new ethereum.EventParam("tokens", ethereum.Value.fromUnsignedBigInt(tokens))
  )

  return shareMintedEvent
}

export function createSignerChangeEvent(
  validatorId: BigInt,
  nonce: BigInt,
  oldSigner: Address,
  newSigner: Address,
  signerPubkey: Bytes
): SignerChange {
  let signerChangeEvent = changetype<SignerChange>(newMockEvent())

  signerChangeEvent.parameters = new Array()

  signerChangeEvent.parameters.push(
    new ethereum.EventParam(
      "validatorId",
      ethereum.Value.fromUnsignedBigInt(validatorId)
    )
  )
  signerChangeEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  signerChangeEvent.parameters.push(
    new ethereum.EventParam("oldSigner", ethereum.Value.fromAddress(oldSigner))
  )
  signerChangeEvent.parameters.push(
    new ethereum.EventParam("newSigner", ethereum.Value.fromAddress(newSigner))
  )
  signerChangeEvent.parameters.push(
    new ethereum.EventParam(
      "signerPubkey",
      ethereum.Value.fromBytes(signerPubkey)
    )
  )

  return signerChangeEvent
}

export function createSlashedEvent(nonce: BigInt, amount: BigInt): Slashed {
  let slashedEvent = changetype<Slashed>(newMockEvent())

  slashedEvent.parameters = new Array()

  slashedEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  slashedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return slashedEvent
}

export function createStakeUpdateEvent(
  validatorId: BigInt,
  nonce: BigInt,
  newAmount: BigInt
): StakeUpdate {
  let stakeUpdateEvent = changetype<StakeUpdate>(newMockEvent())

  stakeUpdateEvent.parameters = new Array()

  stakeUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "validatorId",
      ethereum.Value.fromUnsignedBigInt(validatorId)
    )
  )
  stakeUpdateEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  stakeUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "newAmount",
      ethereum.Value.fromUnsignedBigInt(newAmount)
    )
  )

  return stakeUpdateEvent
}

export function createStakedEvent(
  signer: Address,
  validatorId: BigInt,
  nonce: BigInt,
  activationEpoch: BigInt,
  amount: BigInt,
  total: BigInt,
  signerPubkey: Bytes
): Staked {
  let stakedEvent = changetype<Staked>(newMockEvent())

  stakedEvent.parameters = new Array()

  stakedEvent.parameters.push(
    new ethereum.EventParam("signer", ethereum.Value.fromAddress(signer))
  )
  stakedEvent.parameters.push(
    new ethereum.EventParam(
      "validatorId",
      ethereum.Value.fromUnsignedBigInt(validatorId)
    )
  )
  stakedEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  stakedEvent.parameters.push(
    new ethereum.EventParam(
      "activationEpoch",
      ethereum.Value.fromUnsignedBigInt(activationEpoch)
    )
  )
  stakedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  stakedEvent.parameters.push(
    new ethereum.EventParam("total", ethereum.Value.fromUnsignedBigInt(total))
  )
  stakedEvent.parameters.push(
    new ethereum.EventParam(
      "signerPubkey",
      ethereum.Value.fromBytes(signerPubkey)
    )
  )

  return stakedEvent
}

export function createStartAuctionEvent(
  validatorId: BigInt,
  amount: BigInt,
  auctionAmount: BigInt
): StartAuction {
  let startAuctionEvent = changetype<StartAuction>(newMockEvent())

  startAuctionEvent.parameters = new Array()

  startAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "validatorId",
      ethereum.Value.fromUnsignedBigInt(validatorId)
    )
  )
  startAuctionEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  startAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "auctionAmount",
      ethereum.Value.fromUnsignedBigInt(auctionAmount)
    )
  )

  return startAuctionEvent
}

export function createThresholdChangeEvent(
  newThreshold: BigInt,
  oldThreshold: BigInt
): ThresholdChange {
  let thresholdChangeEvent = changetype<ThresholdChange>(newMockEvent())

  thresholdChangeEvent.parameters = new Array()

  thresholdChangeEvent.parameters.push(
    new ethereum.EventParam(
      "newThreshold",
      ethereum.Value.fromUnsignedBigInt(newThreshold)
    )
  )
  thresholdChangeEvent.parameters.push(
    new ethereum.EventParam(
      "oldThreshold",
      ethereum.Value.fromUnsignedBigInt(oldThreshold)
    )
  )

  return thresholdChangeEvent
}

export function createTopUpFeeEvent(user: Address, fee: BigInt): TopUpFee {
  let topUpFeeEvent = changetype<TopUpFee>(newMockEvent())

  topUpFeeEvent.parameters = new Array()

  topUpFeeEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  topUpFeeEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromUnsignedBigInt(fee))
  )

  return topUpFeeEvent
}

export function createUnJailedEvent(
  validatorId: BigInt,
  signer: Address
): UnJailed {
  let unJailedEvent = changetype<UnJailed>(newMockEvent())

  unJailedEvent.parameters = new Array()

  unJailedEvent.parameters.push(
    new ethereum.EventParam(
      "validatorId",
      ethereum.Value.fromUnsignedBigInt(validatorId)
    )
  )
  unJailedEvent.parameters.push(
    new ethereum.EventParam("signer", ethereum.Value.fromAddress(signer))
  )

  return unJailedEvent
}

export function createUnstakeInitEvent(
  user: Address,
  validatorId: BigInt,
  nonce: BigInt,
  deactivationEpoch: BigInt,
  amount: BigInt
): UnstakeInit {
  let unstakeInitEvent = changetype<UnstakeInit>(newMockEvent())

  unstakeInitEvent.parameters = new Array()

  unstakeInitEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  unstakeInitEvent.parameters.push(
    new ethereum.EventParam(
      "validatorId",
      ethereum.Value.fromUnsignedBigInt(validatorId)
    )
  )
  unstakeInitEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  unstakeInitEvent.parameters.push(
    new ethereum.EventParam(
      "deactivationEpoch",
      ethereum.Value.fromUnsignedBigInt(deactivationEpoch)
    )
  )
  unstakeInitEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return unstakeInitEvent
}

export function createUnstakedEvent(
  user: Address,
  validatorId: BigInt,
  amount: BigInt,
  total: BigInt
): Unstaked {
  let unstakedEvent = changetype<Unstaked>(newMockEvent())

  unstakedEvent.parameters = new Array()

  unstakedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  unstakedEvent.parameters.push(
    new ethereum.EventParam(
      "validatorId",
      ethereum.Value.fromUnsignedBigInt(validatorId)
    )
  )
  unstakedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  unstakedEvent.parameters.push(
    new ethereum.EventParam("total", ethereum.Value.fromUnsignedBigInt(total))
  )

  return unstakedEvent
}

export function createUpdateCommissionRateEvent(
  validatorId: BigInt,
  newCommissionRate: BigInt,
  oldCommissionRate: BigInt
): UpdateCommissionRate {
  let updateCommissionRateEvent =
    changetype<UpdateCommissionRate>(newMockEvent())

  updateCommissionRateEvent.parameters = new Array()

  updateCommissionRateEvent.parameters.push(
    new ethereum.EventParam(
      "validatorId",
      ethereum.Value.fromUnsignedBigInt(validatorId)
    )
  )
  updateCommissionRateEvent.parameters.push(
    new ethereum.EventParam(
      "newCommissionRate",
      ethereum.Value.fromUnsignedBigInt(newCommissionRate)
    )
  )
  updateCommissionRateEvent.parameters.push(
    new ethereum.EventParam(
      "oldCommissionRate",
      ethereum.Value.fromUnsignedBigInt(oldCommissionRate)
    )
  )

  return updateCommissionRateEvent
}
