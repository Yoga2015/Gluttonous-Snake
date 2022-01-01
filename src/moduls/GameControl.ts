//引入其他的类
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

//游戏控制器 ，要控制其他的所有类
class GameControl{

    //定义三个属性  ：蛇、食物、游戏舞台
    snake:Snake;     // 蛇 snake的类型就是 Snake 
    food:Food;      //食物
    scorePanel;     //记分牌

    // 创建一个属性来存储蛇的移动方向(也就是按键的方向) ，初始就是空值
    direction:string = '';  //一进入游戏是不会动的，按下“方向按键”后，根据“方向按键”方向移动

    //创建一个属性用来记录游戏是否结束   相当于一个开关，负责记录游戏是否在进行当中。
    isLive = true;     //布尔值,默认值是true，也就是游戏没有结束

    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel(10,2);
        this.init();    //怎么来调用初始化方法，就放在constructor中
    }

    // 游戏的初始化方法，调用后游戏即开始
    init(){
        // 1、绑定键盘按键按下的事件    //第一个this 是指向 document
        document.addEventListener('keydown',this.keydownHandler.bind(this));  
        //这里 bind的作用实际上是在创建一个新函数 ，把this绑定成 this.keydownHandler.bind(this)

        // 调用 run方法，使蛇移动
        this.run();
    }

    //2、创建一个键盘按下的响应函数  ,返回的是字符串  (也就是按下按键后触发了那个执行方法)   记得兼容IE
    keydownHandler(event:KeyboardEvent){
        // console.log(event.key);    // ArrowDown  、 ArrowUp 、 ArrowRight 、 ArrowLeft
        // console.log(this);
        // 需要检查event.key的值是否合法（用户是否按了正确的按键）
        //修改direction属性
        this.direction = event.key;
    }

    // 创建一个控制蛇移动的方法
    run(){
       /*  根据方向（this.direction）来使蛇的位置改变
        向上 top 减少 
        向下 top 增加
        向左 left 减少
        向右 left 增加 */

        //获取蛇现在坐标   不能用常量 const
        let X = this.snake.X;
        let Y = this.snake.Y;

        // 根据按键的方向来修改X值和Y值
        switch(this.direction){
            case "ArrowUp":
            case "Up":
                //向上移动 top 减少
                Y -=10;
                break;
            case "ArrowDown":
            case "Down": 
                //向上移动 top 增加
                Y +=10;
                break;
            case "ArrowLeft":
            case "Left":
                //向上移动 Left 减少
                X -=10;
                break;
            case "ArrowRight":
            case "Right":
                //向上移动 Left 增加
                X +=10;
                break;
        }

        //检查蛇是否吃到了食物
       this.checkEat(X,Y);

        // 修改蛇的X值和Y值
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch(e){   //不进入catch ，就继续往下执行，
            //进入到catch ，说明了异常，游戏结束，弹出一个提示信息
            alert(e.message + 'Game Over!');
            //将isLive设置为false
            this.isLive = false;
        }
        

        // 开启一个定时调用
        // setTimeout(this.run,300);
        this.isLive && setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*30);
        //也就是当isLive = true的时候， 我才开启定时器，否则非
    }

    //定义一个方法，用来检查蛇是否吃到食物  （通过蛇的坐标和食物的坐标是否重叠得知）
    checkEat(X:number,Y:number){
        if(X === this.food.X && Y === this.food.Y){
            //食物的位置要进行重置
            this.food.change();
            // 分数增加
            this.scorePanel.addScore();
            // 蛇要增加一节
            this.snake.addBody();
        };
    }


}

//把 GameControl类 作为 默认类 给它暴露出去  (被导入用)
export default GameControl;