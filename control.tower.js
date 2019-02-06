module.exports = {
  run: function(tower) {
    var damaged = tower.room.find(FIND_STRUCTURES, {
        filter: (structure) => structure.hits < structure.hitsMax
    });
    var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
    if(closestHostile) {
        tower.attack(closestHostile);
    } else {
        
    var target = _.min(damaged, (s) => s.hits)
    if(target) {
        if (tower.energy > 300) {
            tower.repair(target);
        } else if (tower.room.energyAvailable > 300) {
            tower.repair(target)
        }
    }

    }
  }
};
