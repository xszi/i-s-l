


class V1AdminUserController {
    async v1AdminLogin(ctx, next){
        console.log(ctx.state.data, 'ctx.state.data')
        if (ctx.state.data) {
            ctx.body = {
                code: 0,
                msg: "操作成功",
                result: ctx.state.data
            }
        } else {
            ctx.body = {
                code: 1,
                msg: "用户名或密码错误",
                result: null
            }
        }
    }
    async v1AdminUserInfo(ctx, next){
        console.log(ctx.state.data, 'ctx.state.data2222')
        if (ctx.state.data) {
            ctx.body = {
                code: 0,
                msg: "操作成功",
                result: ctx.state.data
            }
        } else {
            ctx.body = {
                code: 1,
                msg: "用户名或密码错误",
                result: null
            }
        }
    }
}

module.exports = new V1AdminUserController()