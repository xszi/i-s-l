const Router = require("koa-router");

const router = new Router({ prefix: '/v1/account' })

const { addAccount } = require('../controller/account.controller.js')

router.post('/addAccount', addAccount)
module.exports = router