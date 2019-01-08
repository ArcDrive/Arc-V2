module.exports = {

  run: function(parts, ratio, cost){

    i = 0

    body = []

    function findCost(part) {

      switch (part) {

        case MOVE:

        return 50

        break;

        case WORK:

        return 100

        break;

        case CARRY:

        return 50

        break;

        case ATTACK:

        return 80

        break;

        case RANGED_ATTACK:

        return 150

        break;

        case HEAL:

        return 250

        break;

        case CLAIM:

        return 600

        break;

        case TOUGH:

        return 10

        break;

        default:

        console.log('Error in function.genCreep; part ' + part + ' not recognized.')

      }

    }

    while (i < cost) {

      if (parts.length > 0 && i < cost) {

        for (q = 0; q < ratio[0]; q++) {

          i = i + findCost(parts[0])

          if (i < cost) {

            body.push(parts[0])

          }

        }

      }

      if (parts.length > 1 && i < cost) {

        for (q = 0; q < ratio[1]; q++) {

          i = i + findCost(parts[1])

          if (i < cost) {

            body.push(parts[1])

          }

        }

      }

      if (parts.length > 2 && i < cost) {

        for (q = 0; q < ratio[2]; q++) {

          i = i + findCost(parts[2])

          if (i < cost) {

            body.push(parts[2])

          }

        }

      }

      if (parts.length > 3 && i < cost) {

        for (q = 0; q < ratio[3]; q++) {

          i = i + findCost(parts[3])

          if (i < cost) {

            body.push(parts[3])

          }

        }

      }

      if (parts.length > 4 && i < cost) {

        for (q = 0; q < ratio[4]; q++) {

          i = i + findCost(parts[4])

          if (i < cost) {

            body.push(parts[4])

          }

        }

      }

      if (parts.length > 5 && i < cost) {

        for (q = 0; q < ratio[5]; q++) {

          i = i + findCost(parts[5])

          if (i < cost) {

            body.push(parts[5])

          }

        }

      }

      if (parts.length > 6 && i < cost) {

        for (q = 0; q < ratio[6]; q++) {

          i = i + findCost(parts[6])

          if (i < cost) {

            body.push(parts[6])

          }

        }

      }

      if (parts.length > 7 && i < cost) {

        for (q = 0; q < ratio[7]; q++) {

          i = i + findCost(parts[7])

          if (i < cost) {

            body.push(parts[7])

          }

        }

      }

    }

  }

}
