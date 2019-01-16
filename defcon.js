module.exports = {
  run: function (roomName) {

    var defcon = Game.rooms[roomName].memory.defcon
    var hostileCreeps = Game.rooms[roomName].find(FIND_HOSTILE_CREEPS).length
    var cooldDownTicks = Game.rooms[roomName].memory.cooldDownTicks
    var heatUpTicks = Game.rooms[roomName].memory.heatUpTicks

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
    if (defcon < heatUpTicks/10) {
      defcon++
    }
    if (defcon != 0 && heatUpTicks == 0) {
      defcon = 0
    }


    Game.rooms[roomName].memory.defcon = defcon
    Game.rooms[roomName].memory.cooldDownTicks = cooldDownTicks
    Game.rooms[roomName].memory.heatUpTicks = heatUpTicks
  }
}

//defcon 0 = normal activity, one ranger
//defcon 1 = turret gets more energy, one ranger, outside harvesting shut off
//defcon 2
//defcon 3
//defcon 4
//defcon 5
