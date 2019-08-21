//引入全局配置的服务器路径页面
let host=require("../utils/utils.js")
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
    this.getFoodDetail(options.id)
  },
  getFoodDetail(id){
    wx.request({
      //地址用全局配置的地址进行拼接
      url:host+'productcontent?id='+id,
      success:(res)=>{
        this.setData({
          foodList:res.data.result
        })
      }
    })
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