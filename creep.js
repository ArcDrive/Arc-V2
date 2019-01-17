module.exports = {
  run: function(creep) {

    switch (creep.memory.role) {
      case 'worker':
        require('role.worker').run(creep)
        break;
      case 'hauler':
        require('role.hauler').run(creep)
        break;
      case 'ranger':
        require('role.ranger').run(creep)
        break;
      case 'soldier':
        require('role.soldier').run(creep)
        break;
      case 'claimer':
        require('role.claimer').run(creep)
        break;
      default:
        console.log('Error with ' + creep + '; role ' + creep.memory.role + 'not recognized.')
    }
  }
}
