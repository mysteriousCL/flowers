import request from "./index";

const pre = process.env.VUE_APP_PRE

//获取商品列表
export const getProductList = () => request.get(`${pre}/product/getProductList`)

/**
 * @desc 获取商品商品详情
 * @returns axios promise
 */
export const getProductDetail = params => request.get(`${pre}/product/getProductDetail`, {params})

/**
 * @desc 获取商品分类列表
 * @return 返回商品swiper列表的promise
 */
export const getCategoryList = () => request.get(`${pre}/category/list`)
