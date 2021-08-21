import request from "./index";

const pre = process.env.VUE_APP_PRE

/**
 * @desc 获取订单数据
 * @param {*} params
 * @returns
 */
export const getOrderList = () => request.get(`${pre}/order/getOrderList`)

/**
 * @desc 创建订单
 * @returns
 */
export const createOrder = params => request.post(`${pre}/order/createOrder`, params)
/**
 * @desc 删除订单
 * @returns
 */
export const delOrder = params => request.post(`${pre}/order/delOrder`, params)
/**
 * @desc 确认收货
 * @returns
 */
export const confirmOrder = params => request.post(`${pre}/order/confirmOrder`, params)
/**
 * @desc 催收货
 * @returns
 */
export const rushToShip  = params => request.post(`${pre}/order/rushToShip`, params)
/**
 * @desc 获取订单详情
 * @param {*} params
 * @returns
 */
export const getOrderDetail = params => request.post(`${pre}/order/getOrderDetail`, params)
