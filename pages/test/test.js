// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: "你好，欢迎你的到来!test",
    arr: [1, 2, 3],
    obj: {
      name: "zhanghui",
      "sex": "男",
    },
    arrNum: [1, 2, 3]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log("page test onload", options)
    console.log("page test onload", this.data)
  },
  add() {
    this.data.arrNum.push(this.data.arrNum.length + 1)
    this.setData(this.data)
  },
  random() {
    this.data.arrNum.sort(() => {
      return Math.random() > 0.5 ? 1 : -1
    })
    this.setData(this.data)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log("page test onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log("page test onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log("page test onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})