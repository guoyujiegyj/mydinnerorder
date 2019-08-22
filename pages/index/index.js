
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    screenHeight:"",
    page:1,
    //flag标识
    flag:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList()
    //获得屏幕高度
    wx.getSystemInfo({
      success: (res)=> {
        this.setData({
          screenHeight:res.windowHeight
        })
      },
    })
  },
  //加载数据列表
  getList(){
    this.setData({
      flag:false
    })
    var api = 'http://www.phonegap100.com/appapi.php'
    wx.request({
      url: api,
      data:{
        a: 'getPortalList',
        catid:'20',
        page:this.data.page
      },
      success:(res)=>{
        //判断是否是最后一页数据，
        if(res.data.result.length<20){
          //是最后一页，将flag设为false。
          var f=false
        }
        else{
          var f=true
        }
        //每页加载的数据进行拼接
        let list=this.data.list.concat(res.data.result)

        //页数自增。
        let page=++this.data.page
        this.setData({
         list:list,
         page:page,
         flag:f
        
       })
      }
    })
    
  },
  //分页：加载更多
  //页面滑动到底端时触发此方法。
  loadMore() {
    //调用函数
    if(this.data.flag){
      //必须flag为true时调用，因为有可能网速慢时，一次getlist还没完成，
      //已经触发loadmore进行第二次了。但是getlist代码没执行完，所以会请求多次。
      this.getList()
    }
   

  },

  //跳转到详情页
  toDetail(e){
    let aid=e.currentTarget.dataset.aid
   wx.navigateTo({
     url: "/pages/indexDetail/indexDetail?aid="+aid,
   })
  }


})