module.exports.loop = function() {

  for (let room in Game.rooms) {
    var defcon = require('defcon').run(room)
    require('room').run(room, defcon)

  }
}
