module.exports = {
  run: function(room) {
    var towers = room.find(FIND_STRUCTURES, {
      filter: (s) => s.structureType == STRUCTURE_TOWER
    });

    for (let tower of towers) {
      require('control.tower').run(tower)
    }
    var spawns = room.find(FIND_STRUCTURES, {
      filter: (s) => s.structureType == STRUCTURE_SPAWN
    });

    for (let spawn of spawns) {
      require('control.spawn').run(spawn)
    }
  }
}
