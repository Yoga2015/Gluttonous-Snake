// 定义表示记分牌 类
class ScorePanel{ 
    // score和level 用来记录分数和等级
    score = 0;     //原本是以 private 方式写入 
    level = 1; 

    // 分数和等级所在的元素，在构造函数中进行初始化
    scoreEle:HTMLElement;
    levelEle:HTMLElement;

    //设置一个变量限制等级
    maxLevel:number;

    // 设置一个变量表示多少分时升级
    upScore:number;

    //表示默认值，如果你传参了，直接用你传的那个，你传80，我就用80，没传我就用默认值10
    constructor(maxLevel:number =10,upScore:number = 10){ 
        this.scoreEle = document.getElementById('score')!;  //不给它为空
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    // 设置一个加分的方法
    addScore(){
        //1、使分数自增
        this.scoreEle.innerHTML = ++this.score+ '';
        //2、判断分数是否超过10，超过10就提升等级
        if(this.score % this.upScore ===0){
            this.levelUp();
        }
    }

    //提升等级的方法   这个是由分数来决定等级提升
    levelUp(){
         if(this.level < this.maxLevel){   //写死10 的话会降低灵活性、扩展性，尽量不要使用字面量的情况
             //使等级自增
             this.levelEle.innerHTML = ++this.level+'';
         }
    }
}

// // 测试代码
// const scorePanel = new ScorePanel(100,2);
// for(let i=0; i<200; i++){
//     scorePanel.addScore();
// }

//把 ScorePanel类 作为 默认类 给它暴露出去   被导入用
export default ScorePanel;