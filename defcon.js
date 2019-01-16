module.exports = {
  run: function(roomName) {

    var defcon = Game.rooms[roomName].memory.defcon
    var hostileCreeps = Game.rooms[roomName].find(FIND_HOSTILE_CREEPS).length
    var cooldDownTicks = Game.rooms[roomName].memory.cooldDownTicks
    var heatUpTicks = Game.rooms[roomName].memory.heatUpTicks
    var wall = Game.rooms[roomName].find(FIND_STRUCTURES, {
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


    Game.rooms[roomName].memory.defcon = defcon
    Game.rooms[roomName].memory.cooldDownTicks = cooldDownTicks
    Game.rooms[roomName].memory.heatUpTicks = heatUpTicks
    return defcon
  }
}

//defcon 0 = normal activity, one ranger
//defcon 1 = turret gets more energy, one ranger, outside harvesting shut off, builders switch to repairers
//defcon 2 = turret gets more energy, one ranger, outside harvesting shut off, upgraders and builders switch to repairers
//defcon 3 = turret gets more energy, two rangers, outside harvesting shut off, upgraders and builders switch to repairers, call for energy assistance
//defcon 4 = turret gets more energy, two rangers, call for troop assistance, outside harvesting shut off, upgraders and builders switch to repairers, call for energy assistance
//defcon 5 = turret gets more energy, two rangers, call for troop assistance, outside harvesting shut off, upgraders and builders switch to repairers, call for energy assistance, safe mode
