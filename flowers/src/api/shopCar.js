import request from "./index";

const pre = process.env.VUE_APP_PRE
/**
 * @desc 获取购物车列表
 */
export const getCarList = () => request.get(`${pre}/shop-cart/list`)
/**
 * @desc 添加商品进购物车
 */
export const addCar = data => request.post(`${pre}/shop-cart/add-it`,data)
/**
 * @desc 从购物车列表中移除商品
 */
export const removeCar = data => request.post(`${pre}/shop-cart/remove-it`,data)