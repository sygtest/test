const app=new Vue({
    el:'#app',
    data:{
        books:[
            {
                id:1,
                name:'《算法导论》',
                data:'2006-9',
                price:85.00,
                count:1
            },
            {
                id:2,
                name:'《UNIX编程艺术》',
                data:'2006-2',
                price:59.00,
                count:1
            },
            {
                id:3,
                name:'《编程珠玑》',
                data:'2008-10',
                price:39.00,
                count:1
            },
            {
                id:4,
                name:'《代码大全》',
                data:'2006-3',
                price:128.00,
                count:1
            },
            {
                id:5,
                name:'《数据结构》',
                data:'2005-10',
                price:60.00,
                count:1
            },
        ],    
    },
    methods:{
        getFinalPrice(price){
            // toFixed()把数字转换为字符串，结果的小数点后有指定位数的数字 传入的参数是保留的小数位数
            return '￥' + price.toFixed(2);

        },
        decreament(index){
            // console.log('decreament',index);
            this.books[index].count--;
        },
        increament(index){
            // console.log('increament',index);
            this.books[index].count++;

        },
        removeHander(index){
            this.books.splice(index,1)
        }
    },
    computed:{
        totalPrice(){
            // let totalPrice = 0;
            // 1.普通的for循环
            // for(let i=0;i<this.books.length;i++){
            //     要遍历对象一定要加this
            //     totalPrice += this.books[i].price*this.books[i].count;
            // }
            // return totalPrice;

            // 2.for (let i in books)
            // let totalPrice = 0;
            // for (let i in this.books){
            //     books=this.books;
            //     totalPrice +=books[i].price*books[i].count;
            // }
            // return totalPrice;

            // 3.for(let i of this.books)  i代指了对象
            let totalPrice = 0;
            for(let i of this.books){
                totalPrice += i.price * i.count;
            }
            return totalPrice;
            
            // 4.reduce

        }
    },
    filters:{
        // 过滤器一般是一个函数，我们需要向里面传递参数进去
        showPrice(price){
            return '￥' + price.toFixed(2);
        }

    }
})

