//引入样式
import './style/index.less';
// import Food from './moduls/Food';
// import ScorePanel from './moduls/ScorePanel';


// // 测试代码 Food类
// const food = new Food();
// console.log(food.x,food.y);
// food.change();
// console.log(food.x,food.y);


// // 测试代码  ScorePanel类
// const scorePanel = new ScorePanel(100,2);
// for(let i=0; i<200; i++){
//     scorePanel.addScore();
// }
import GameControl from './moduls/GameControl';

const gameControl = new GameControl();

// setInterval(()=>{
//     console.log(gameControl.direction);
// },1000);