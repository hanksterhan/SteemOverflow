contract swatSaverContract {
  enum State { openBounty, findResponders, distributeFunds, closeContract }
  State public currentState;
  mapping (address => uint) public userBountyCommit;
  uint public bounty;
  uint public timeOpen;
  uint public start;
  mapping (address => bool) public didAnswer;
  uint public totalWeights;


  struct Responder {
    address userAddress;
    uint userWeight;
  }

  Responder[] public responders;


modifier onlyState(State expectedState) {
  if (currentState == expectedState) {
    _;
  }
  else {
    throw;
  }
}


function swatSaverContract() {
  currentState = State.openBounty;
  start = block.number;
  timeOpen = 3;

}

function placeBounty() onlyState(State.openBounty) payable returns (bool) {
  if (block.number <= start + timeOpen){
  bounty = bounty + msg.value;
  userBountyCommit[msg.sender] = msg.value;
}
else {
  currentState = State.findResponders;
}
  return true;
}

function storeResponders(address[] _responderAddress, uint[] _weight) onlyState(State.findResponders) {
  for (uint i = 0; i < _responderAddress.length; i++) {
    address responderAddress = _responderAddress[i];
    uint weight = _weight[i];
    if (didAnswer[responderAddress] == false && weight >= 0) {
        didAnswer[responderAddress] = true;
        totalWeights = totalWeights+weight;
        responders.push(Responder({
        userAddress: _responderAddress[i],
        userWeight: _weight[i]
        }));
    }
  }
  currentState = State.distributeFunds;
}

//TODO: The amount of ether to be distributed to each answer should be determined off chain.  
//Calculating payout on chain increases gas cost & there's no loss in decentralization as distribution is effectively determined off chain in our current iteration. 
//Might look into a payment channel solution down the line.

function payoutResponders() onlyState(State.distributeFunds) returns (bool) {
  for (uint j = 0; j < responders.length; j++) {
    if (this.balance > 0) {
      uint proportion;
      uint payout;
      proportion = responders[j].userWeight/totalWeights;
      payout = bounty/proportion;
      responders[j].userAddress.transfer(payout);
      bounty = bounty - payout;
    }
  }
  currentState = State.closeContract;
  return true;
}

}
