module.exports = {
  run: function(room) {

    var defcon = room.memory.defcon
    var hostileCreeps = room.find(FIND_HOSTILE_CREEPS).length
    var cooldDownTicks = room.memory.cooldDownTicks
    var heatUpTicks = room.memory.heatUpTicks
    var wall = room.find(FIND_STRUCTURES, {
      filter: {
        structureType: STRUCTURE_WALL
      }
    })
    var lowestWall = _.min(wall, (s) => s.hits)

    if (hostileCreeps == 0 && cooldDownTicks != 0) {
      cooldDownTicks = cooldDownTicks - 1
    } else if (hostileCreeps > 0) {
      cooldDownTicks = 1500
    }
    if (cooldDownTicks == 0 && heatUpTicks != 0) {
      heatUpTicks = 0
    } else if (cooldDownTicks == 1500) {
      heatUpTicks = heatUpTicks + hostileCreeps
    }

    if (defcon < hostileCreeps) {
      defcon = hostileCreeps
    }
    if (defcon < heatUpTicks / 10 && defcon < 5) {
      defcon++
    }
    if (defcon != 0 && heatUpTicks == 0) {
      defcon = 0
    }
    if (defcon > 0 && lowestWall.hits < 1000) {
      defcon = 5
    }


    room.memory.defcon = defcon
    room.memory.cooldDownTicks = cooldDownTicks
    room.memory.heatUpTicks = heatUpTicks
    return defcon
  }
}

//defcon 0 = normal activity, one ranger
//defcon 1 = turret gets more energy, one ranger, outside harvesting shut off, builders switch to repairers
//defcon 2 = turret gets more energy, one ranger, outside harvesting shut off, upgraders and builders switch to repairers
//defcon 3 = turret gets more energy, two rangers, outside harvesting shut off, upgraders and builders switch to repairers, call for energy assistance
//defcon 4 = turret gets more energy, two rangers, call for troop assistance, outside harvesting shut off, upgraders and builders switch to repairers, call for energy assistance
//defcon 5 = turret gets more energy, two rangers, call for troop assistance, outside harvesting shut off, upgraders and builders switch to repairers, call for energy assistance, safe mode
