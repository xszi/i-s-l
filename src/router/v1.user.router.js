const Router = require("koa-router");

const router = new Router({ prefix: '/v1/users' })

const { v1Login } = require('../controller/v1.user.controller.js')
const { v1AdminLogin, v1AdminUserInfo } = require('../controller/v1.adminUser.controller.js')
const { getOpenid, hasUserInfo, hasAdminUserInfo, jwtTokenCheck } = require('../middleware/v1.user.middleware')

router.post('/adminLogin', hasAdminUserInfo, v1AdminLogin) // admin登录
router.post('/login', getOpenid, hasUserInfo, v1Login) //小程序登录
// router.post('/login1', jwtTokenCheck,v1Login) //小程序

router.post('/getUserInfo', hasAdminUserInfo, v1AdminUserInfo) // admin登录
module.exports = router