//  任意值 (any) 可以赋值为任意类型
   // 什么是任意值类型? 
      //如是普通函数，在赋值过程中改变类型是不被允许的
     let user:string="张山"
       //user=7报错
     let user1:any="王五"//声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。
         user1=7  
     
     let tom; //在变量声明未指定其类型，那么它会被识别为任意值类型
     tom="李四"
     tom=7
     tom.setName("tom")    


  export {}