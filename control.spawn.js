module.exports = {
  run: function(spawn) {
    var creepToSpawn = require('function.findNeededCreeps').run(spawn.room)
    spawn.spawnCreep(require('function.genCreep').run(creepToSpawn), require('function.genName').run, {
      role: creepToSpawn,
      working: true
    })
  }
}
