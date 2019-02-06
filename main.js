module.exports.loop = function() {
  for (let name in Game.rooms) {
    var room = Game.rooms[name]
    var defcon = require('defcon').run(room)
    require('room').run(room, defcon)
  }

  for (let name in Game.creeps) {
    var creep = Game.creeps[name];
    require('creep').run(creep)
  }
}
