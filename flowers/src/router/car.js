const Car = () => import('views/car/Car')
export default [
    { path: '/shop-car',name:'Car',component: Car,meta: { title: '购物车-花礼网',keepalive:true,}},
]