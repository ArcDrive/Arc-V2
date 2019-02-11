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
    
    var sources = room.find(FIND_SOURCES)
    room.memory.source0 = _.sum(room.find(FIND_MY_CREEPS, (c) => c.memory.source == sources[0].id))
    room.memory.source1 = _.sum(room.find(FIND_MY_CREEPS, (c) => c.memory.source == sources[1].id))
    room.memory.source2 = _.sum(room.find(FIND_MY_CREEPS, (c) => c.memory.source == sources[2].id))
    room.memory.source3 = _.sum(room.find(FIND_MY_CREEPS, (c) => c.memory.source == sources[3].id))
  }
}
