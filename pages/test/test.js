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
    arrNum: [1, 2, 3],
    dataNewsList: [{
        id: 0,
        src: "https://tuimeizi.cn/random?w=400&h=400&o=1&t=text",
        title: "000",
        time: "2019-10-01 15:00:00"
      },
      {
        id: 1,
        src: "https://tuimeizi.cn/random?w=400&h=400&o=2&t=text",
        title: "001",
        time: "2019-10-01 15:00:00"
      },
      {
        id: 2,
        src: "https://tuimeizi.cn/random?w=400&h=400&o=3&t=text",
        title: "002",
        time: "2019-10-01 15:00:00"
      },
      {
        id: 3,
        src: "https://tuimeizi.cn/random?w=400&h=400&o=4&t=text",
        title: "003",
        time: "2019-10-01 15:00:00"
      }
    ]
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
    this.setData({
      arrNum: this.data.arrNum
    })
  },
  random() {
    this.data.arrNum.sort(() => {
      return Math.random() > 0.5 ? 1 : -1
    })
    this.setData({
      arrNum: this.data.arrNum
    })

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