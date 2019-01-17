module.exports = {
  run: function(creep) {
    if (creep.memory.role == undefined) {
      console.log('WARNING! ' + creep + ' has no role!')
    } else {
      require('findJob').run(creep.memory.role)
    }
  }
}
