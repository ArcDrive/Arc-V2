module.exports = {
  run: function(creep) {
    if (creep.memory.working == true && creep.carry == 0) {
      creep.memory.working = false
    } else if (creep.memory.working == false && creep.carry == creep.carryCapacity) {
      creep.memory.working = true
    }

    if (creep.memory.working) {
      creep.memory.withdraw = undefined
      if (creep.memory.transfer == undefined) {
        creep.memory.transfer = require('function.findTransfer').run(creep.room)
      } else {
        switch (creep.transfer(Game.getObjectById(creep.memory.transfer)), RESOURCE_ENERGY) {
          case ERR_NOT_IN_RANGE:
            if (creep.fatigue == 0) {
              creep.moveTo(Game.getObjectById(creep.memory.transfer))
            }
            break;
          case OK:
            creep.say('Transferring')
            break;
          case ERR_FULL:
            creep.memory.transfer = undefined
            creep.say('Finding new target')
            break;
          default:
            console.log('Error in role.hauler with ' + creep + '; error code not recognized')
            creep.say('Error')
        }
      }
    } else {
      creep.memory.transfer = undefined
      if (creep.memory.withdraw == undefined) {
        creep.memory.withdraw = require('function.findWithdraw').run(creep.room)
      } else {
        switch (creep.withdraw(Game.getObjectById(creep.memory.withdraw)), RESOURCE_ENERGY) {
          case ERR_NOT_IN_RANGE:
            if (creep.fatigue == 0) {
              creep.moveTo(Game.getObjectById(creep.memory.withdraw))
            }
            break;
          case OK:
            creep.say('Withdrawing')
            break;
          case ERR_FULL:
            creep.memory.withdraw = undefined
            creep.say('Finding new target')
            break;
          default:
            console.log('Error in role.hauler with ' + creep + '; error code not recognized')
            creep.say('Error')
        }
      }
    }
  }
}
