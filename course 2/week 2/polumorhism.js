class DanieExp {
    taskManage() {
        console.log('my exp - 100')
    }
}

class GameExp extends DanieExp {
    taskManageTwo() {
        super.taskManage()
        console.log('my exp - 50')
    }
}

class WorthExp extends GameExp {
    taskManageThree() {
        super.taskManage()
        console.log('my exp - 10')
    }
}

var Game = new GameExp();
var Worth = new WorthExp();
// Game.taskManage()
// console.log('-------------------')
// Game.taskManageTwo()
// console.log('-------------------')
Worth.taskManage()
console.log('-------------------')
Worth.taskManageTwo()
console.log('-------------------')
Worth.taskManageThree()

