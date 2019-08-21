// pages/food/food.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foodList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.foodList()
  },
  //菜单
  foodList(){
    wx.request({
      url:"http://a.itying.com/api/productlist",
      success:(res)=>{
        var arr=res.data.result
        console.log(arr)
        //修改图片路径里的\.改为/
        for(var i=0;i<arr.length;i++){
          for(var j=0;j<arr[i].list.length;j++){
            arr[i].list[j].img_url=arr[i].list[j].img_url.replace(/\\/g,'/')
          }
        }
        
        this.setData({
          foodList:arr
        })
      }
    })
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