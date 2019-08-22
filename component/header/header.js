Component({
  properties:{
    title:String
  },
  data: {
   
  },
methods:{
  say(){
    console.log("我是子组件的方法。")
  },
  getParent(){
    //监听父组件的方法parent。
    this.triggerEvent('paren','自调福')
    this.triggerEvent('parent','父组件方法被组件监听')
  },
}

})