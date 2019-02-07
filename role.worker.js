module.exports = {
  run: function(creep) {
    if (creep.memory.job == undefined || Game.time % 10 == 0) {
      creep.memory.job = require('function.findJob').run(creep.room)
    }
    switch (creep.memory.job) {
      case 'harvester':
      require('job.harvester').run(creep)
      break;
      case 'builder':
      require('job.builder').run(creep)
      break;
      case 'repairer':
      require('job.repairer').run(creep)
      break;
      default:
      console.log('Error with ' + creep + '; job ' + creep.memory.job + ' not recognized.')
    }
  }
}
