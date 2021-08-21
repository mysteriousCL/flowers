import request from "./index";

const pre = process.env.VUE_APP_PRE


/**
 * @desc 获取轮播数据
 * @return 返回商品swiper列表的promise
 */
export const getSwiperList = () => request.get(`${pre}/advertising/list`)