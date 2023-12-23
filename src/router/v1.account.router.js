const Router = require("koa-router");

const router = new Router({ prefix: '/v1/account' })

const { addAccount, qryAccountPage } = require('../controller/account.controller.js')

router.post('/addAccount', addAccount)
router.post('/qryAccountPage', qryAccountPage)
module.exports = router