
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    screenHeight:""
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
    var api = 'http://www.phonegap100.com/appapi.php'
    wx.request({
      url: api,
      data:{
        a: 'getPortalList',
        catid:'20',
        page:1
      },
      success:(res)=>{
       this.setData({
         list:res.data
       })
      }
    })
  },
  //跳转到详情页
  toDetail(e){
    let aid=e.currentTarget.dataset.aid
   wx.navigateTo({
     url: "/pages/indexDetail/indexDetail?aid="+aid,
   })
  },
  //加载更多
  loadMore(){
    console.log("more")
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})