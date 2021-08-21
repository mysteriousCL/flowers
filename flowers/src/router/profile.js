const Profile = () => import('views/profile/Profile')

export default [
    { path: '/profile',name:'Profile',component: Profile,meta: { title: '会员中心-花礼网',keepalive:true,}},
]