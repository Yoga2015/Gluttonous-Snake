//定义食物类food
class Food{
    //1、定义一个属性表示食物对应的元素
    element:HTMLElement;

    constructor(){
        //获取页面中的food元素并将其赋值给element
        this.element = document.getElementById('food')!;
    }


    //2、定义一个获取到食物的坐标

    // 定义一个获取食物 x轴坐标 的方法
    get X(){
        return this.element.offsetLeft;
    }

    //定义一个获取食物 y轴坐标 的方法
    get Y(){
        return this.element.offsetTop;
    }

    //3、修改食物的位置
    change(){
         //生成一个随机的位置
         //食物的位置最小是 0，最大是290
         //蛇移动一次就是一格，一格的大小就是10，所以就要求食物的坐标必须是整10

         //这样就生成0到29之间的一个数字，然后对这个数字进行四舍五入取整，既包括0也包括29。然后整体乘于10
         let top = Math.round(Math.random()*29)*10;  //写死29 的话会降低扩展性，尽量不要使用字面量的情况
         let left = Math.round(Math.random()*29)*10;

        this.element.style.left = left + 'px';
        this.element.style.top =  top + 'px';
    }

}

// // 测试代码
// const food = new Food();
// console.log(food.x,food.y);
// food.change();
// console.log(food.x,food.y);

//把 Food类 作为 默认模块 给它暴露出去   被导入用
export default Food;