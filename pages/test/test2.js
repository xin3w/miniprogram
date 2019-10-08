Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: "test2",
    dataTemplate: [{
        id: 0,
        src: "https://tuimeizi.cn/random?w=400&h=400&o=1&t=text",
        title: "000"
      },
      {
        id: 1,
        src: "https://tuimeizi.cn/random?w=400&h=400&o=2&t=text",
        title: "001"
      },
      {
        id: 2,
        src: "https://tuimeizi.cn/random?w=400&h=400&o=3&t=text",
        title: "002"
      },
      {
        id: 3,
        src: "https://tuimeizi.cn/random?w=400&h=400&o=4&t=text",
        title: "003"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log("page test2 onload", options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log("page test2 onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log("page test2 onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log("page test2 onHide")
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