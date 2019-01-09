module.exports.loop = function() {
  for (let room in Game.rooms) {
    var roomName = Game.rooms[room.name]
    var defcon = require('defcon').run(roomName)
    require('room').run(roomName, defcon)
  }
}
