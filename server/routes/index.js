var express = require('express');
var router = express.Router();

const { index_data } = require('../data/index/indexData')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// 首页轮播图
router.get('/api/advertising/list', function(req, res, next) {
  let origin = req.headers.origin
  res.setHeader('Access-Control-Allow-Origin', origin)
  // 允许携带cookie
  res.setHeader("Access-Control-Allow-Credentials", "true")
  res.json({
    "errorCode":0,
    "errorMessage": null,
    "status": 200,
    "data":[]
  })
});

//商品列表
router.get('/api/product/getProductList', function(req, res, next) {
  let origin = req.headers.origin
  res.setHeader('Access-Control-Allow-Origin', origin)
  // 允许携带cookie
  res.setHeader("Access-Control-Allow-Credentials", "true")
  res.json({
    "errorCode":0,
    "errorMessage": null,
    "status": 200,
    "data":index_data
  })
});

//商品商品详情
router.get('/api/product/getProductDetail', function(req, res, next) {
  let origin = req.headers.origin
  res.setHeader('Access-Control-Allow-Origin', origin)
  // 允许携带cookie
  res.setHeader("Access-Control-Allow-Credentials", "true")
  res.json({
    "errorCode":0,
    "errorMessage": null,
    "status": 200,
    "data":[]
  })
});

//商品分类列表
router.get('/api/category/list',function(req,res,next){
  let origin = req.headers.origin
  res.setHeader('Access-Control-Allow-Origin', origin)
  // 允许携带cookie
  res.setHeader("Access-Control-Allow-Credentials", "true")
  res.json({
    "errorCode":0,
    "errorMessage": null,
    "status": 200,
    "data":[]
  })
})

// 用户登录
router.get('/api/user/login',function(req,res,next){
  let origin = req.headers.origin
  res.setHeader('Access-Control-Allow-Origin', origin)
  // 允许携带cookie
  res.setHeader("Access-Control-Allow-Credentials", "true")
  res.json({
    "errorCode":0,
    "errorMessage": null,
    "status": 200,
    "data":[]
  })
})

// 用户注销登录
router.get('/api/user/login-out',function(req,res,next){
  let origin = req.headers.origin
  res.setHeader('Access-Control-Allow-Origin', origin)
  // 允许携带cookie
  res.setHeader("Access-Control-Allow-Credentials", "true")
  res.json({
    "errorCode":0,
    "errorMessage": null,
    "status": 200,
    "data":[]
  })
})

// 获取购物车列表
router.get('/api/shop-cart/list',function(req,res,next){
  let origin = req.headers.origin
  res.setHeader('Access-Control-Allow-Origin', origin)
  // 允许携带cookie
  res.setHeader("Access-Control-Allow-Credentials", "true")
  res.json({
    "errorCode":0,
    "errorMessage": null,
    "status": 200,
    "data":[]
  })
})

//添加商品进购物车
router.get('/api/shop-cart/add-it',function(req,res,next){
  let origin = req.headers.origin
  res.setHeader('Access-Control-Allow-Origin', origin)
  // 允许携带cookie
  res.setHeader("Access-Control-Allow-Credentials", "true")
  res.json({
    "errorCode":0,
    "errorMessage": null,
    "status": 200,
    "data":[]
  })
})

//从购物车列表中移除商品
router.get('/api/shop-cart/remove-it',function(req,res,next){
  let origin = req.headers.origin
  res.setHeader('Access-Control-Allow-Origin', origin)
  // 允许携带cookie
  res.setHeader("Access-Control-Allow-Credentials", "true")
  // res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  res.json({
    "errorCode":0,
    "errorMessage": null,
    "status": 200,
    "data":[]
  })
})

//获取订单数据
router.get('/api/order/getOrderList',function(req,res,next){
  let origin = req.headers.origin
  res.setHeader('Access-Control-Allow-Origin', origin)
  // 允许携带cookie
  res.setHeader("Access-Control-Allow-Credentials", "true")
  res.json({
    "errorCode":0,
    "errorMessage": null,
    "status": 200,
    "data":[]
  })
})

// 删除订单
router.get('/api/order/delOrder',function(req,res,next){
  let origin = req.headers.origin
  res.setHeader('Access-Control-Allow-Origin', origin)
  // 允许携带cookie
  res.setHeader("Access-Control-Allow-Credentials", "true")
  res.json({
    "errorCode":0,
    "errorMessage": null,
    "status": 200,
    "data":[]
  })
})

//创建订单
router.get('/api/order/createOrder',function(req,res,next){
  let origin = req.headers.origin
  res.setHeader('Access-Control-Allow-Origin', origin)
  // 允许携带cookie
  res.setHeader("Access-Control-Allow-Credentials", "true")
  res.json({
    "errorCode":0,
    "errorMessage": null,
    "status": 200,
    "data":[]
  })
})

// 确认收货
router.get('/api/order/confirmOrder',function(req,res,next){
  let origin = req.headers.origin
  res.setHeader('Access-Control-Allow-Origin', origin)
  // 允许携带cookie
  res.setHeader("Access-Control-Allow-Credentials", "true")
  res.json({
    "errorCode":0,
    "errorMessage": null,
    "status": 200,
    "data":[]
  })
})

// 催收货
router.get('/api/order/rushToShip',function(req,res,next){
  let origin = req.headers.origin
  res.setHeader('Access-Control-Allow-Origin', origin)
  // 允许携带cookie
  res.setHeader("Access-Control-Allow-Credentials", "true")
  res.json({
    "errorCode":0,
    "errorMessage": null,
    "status": 200,
    "data":[]
  })
})

//获取订单详情
router.get('/api/order/getOrderDetail',function(req,res,next){
  let origin = req.headers.origin
  res.setHeader('Access-Control-Allow-Origin', origin)
  // 允许携带cookie
  res.setHeader("Access-Control-Allow-Credentials", "true")
  res.json({
    "errorCode":0,
    "errorMessage": null,
    "status": 200,
    "data":[]
  })
})



module.exports = router;
