class Snake{
    //1、表示蛇的元素
    head:HTMLElement;
    // 蛇的身体（包括蛇头）
    bodies:HTMLCollection;
    //获取蛇的容器
    element:HTMLElement;

    constructor(){
        this.element = document.getElementById('snake')!;
        this.head  = document.querySelector('#snake>div') as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');
    }

    //蛇的坐标（蛇头坐标）
    //3、 获取蛇的X轴坐标
    get X(){
        return this.head.offsetLeft;
    }
    // 获取蛇的Y轴坐标
    get Y(){
        return this.head.offsetTop;
    }

    //2、设置蛇的坐标
    set X(value:number){
        // 如果新值和旧值相同，则直接返回不在修改
        if(this.X === value){
            return;
        }
        // X的值的合法范围0-290之间
        if(value < 0 || value > 290){
            //进入判断说明蛇撞墙了,抛出一个异常，但实际上应该是提示用户游戏结束
            throw new Error('蛇撞墙了');
        }

        // 修改x时，是在修改水平x坐标, 蛇在左右移动，蛇在向左移动时，不能向右掉头，反之亦然。
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
            // console.log("水平方向发生掉头");
            // 如果发生了掉头，让蛇向反方向继续移动
            if(value > this.X){
                //如果新值value 大于旧值X，则说明蛇在向右走，此时发生掉头，应该使蛇继续向左走
                value = this.X - 10 ;
            }else{
                //向左走
                value = this.X + 10;
            }

        }

        //移动身体
        this.moveBody();

        this.head.style.left = value + 'px';

        // 检查有没有撞到自己
        this.checkHeadBody();
    }

    set Y(value:number){
        // 如果新值和旧值相同，则直接返回不在修改
        if(this.Y ===value){
            return;
        }
        // X的值的合法范围0-290之间
        if(value < 0 || value > 290){
            //进入判断说明蛇撞墙了,抛出一个异常，但实际上应该是提示用户游戏结束
            throw new Error('蛇撞墙了');
        }

        // 修改Y时，是在修改垂直Y坐标, 蛇在上下移动，蛇在向上移动时，不能向下掉头，反之亦然。
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
            // console.log("水平方向发生掉头");
            // 如果发生了掉头，让蛇向反方向继续移动
            if(value > this.Y){
                //如果新值value 大于旧值Y，则说明蛇在向上走，此时发生掉头，应该使蛇继续向下走
                value = this.Y - 10 ;
            }else{
                //向下走
                value = this.Y + 10;
            }

        }

         //移动身体
         this.moveBody();

        this.head.style.top = value + 'px';

        // 检查有没有撞到自己
        this.checkHeadBody();

    }

    //4、蛇增加身体的方法
    addBody(){
        //向element中添加一个div
        this.element.insertAdjacentHTML("beforeend","<div></div>");
    }

    //5、添加一个蛇身体移动的方法
    moveBody(){    
        /* 
          将后边的身体设置为前边身体的位置
            举个例子：
                第4节===第3节位置
                第3节===第2节位置
                第2节===蛇头的位置
         */
                // 遍历前边身体的位置
                for(let i=this.bodies.length-1; i>0; i--){
                    //获取前边的身体的位置
                    let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
                    let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

                    // 将值设置到当前身体上
                    (this.bodies[i] as HTMLElement).style.left = X + 'px';
                    (this.bodies[i] as HTMLElement).style.top = Y + 'px';
                }
    }

    //检查蛇头有没有撞到自己身体
    checkHeadBody(){
        // 先来获取所有的身体，检查是否和蛇头的坐标发生重叠
        for(let  i =1; i< this.bodies.length;i++){
            let bd = this.bodies[i] as HTMLElement;
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
                //进入判断说明蛇头撞到了身体，游戏结束
                throw new Error('撞到自己了');
            }
        }
    }
    


}
    

//把 Snake类 作为 默认类 给它暴露出去 被导入用
export default Snake;