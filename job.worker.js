module.exports = {
  run: function(creep) {
    if (creep.memory.working == true && creep.carry == 0) {
      creep.memory.working = false
    } else if (creep.memory.working == false && creep.carry == creep.carryCapacity) {
      creep.memory.working = true
    }

    if (creep.memory.working) {
      if (creep.memory.source == undefined) {
        var sources = creep.room.find(FIND_SOURCES)
        if (creep.room.memory.source0 < 2) {
          creep.memory.source = sources[0].id
          creep.room.memory.source0 += 1
        } else if (creep.room.memory.source1 < 2) {
          creep.memory.source = sources[1].id
          creep.room.memory.source1 += 1
        } else if (creep.room.memory.source2 < 2) {
          creep.memory.source = sources[2].id
          creep.room.memory.source2 += 1
        } else if (creep.room.memory.source3 < 2) {
          creep.memory.source = sources[3].id
          creep.room.memory.source3 += 1
        } else {
          creep.memory.role = require('function.findJob').run(creep.room)
          console.log('Reassigning ' + creep)
          creep.say('Reassigning')
        }
      }
      var source = Game.getObjectById(creep.memory.source)
      switch (creep.harvest(source)) {
        case ERR_NOT_IN_RANGE:
          creep.moveTo(source);
          break;
        case OK:
          break;
        case ERR_BUSY:
          break;
        case ERR_NOT_ENOUGH_RESOURCES:
          break;
        default:
          console.log('Error in job.harvester; error code not recognized')
      }

    } else {
      var target = null
      if (creep.room.findPath(creep.pos, creep.pos.findClosestByPath(FIND_STRUCTURES, {
          filter: {
            structureType: STRUCTURE_CONTAINER
          }
        })).length < 3) {
        target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
          filter: {
            structureType: STRUCTURE_CONTAINER
          }
        })
      } else {
        target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
          filter: {
            structureType: STRUCTURE_SPAWN
          }
        })
      }
      switch (creep.transfer(target, RESOURCE_ENERGY)) {
      case ERR_NOT_IN_RANGE:
      creep.moveTo(target)
      break;
      case ERR_BUSY:
      break;
      case ERR_FULL:
      break;
      default:
      console.log('Error in job.harvester; Error code not recognized')
      creep.say('Error')
      }
    }
  }
}
