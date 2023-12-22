const { createAccount } = require("../service/account.service");

class AccountController {
  // 新增账单
  async addAccount (ctx, next) {
    const { create_date,
      expense_type,
      expense_amount,
      remark } = (ctx.request.body);
      console.log(create_date, expense_type,
        expense_amount,
        remark, 'xxx')
    if (!create_date || !expense_type || !expense_amount || !remark ) {
      console.error("必填项为空");
      ctx.status = 400;
      ctx.app.emit(
        "error",
        {
          code: 400,
          msg: "请输入必填项",
          result: "",
        },
        ctx
      );
      return;
    }
    try {
      await createAccount(create_date,
        expense_type,
        expense_amount,
        remark);
      ctx.body = {
        code: 200,
        msg: "操作成功",
        result: {
          data: null,
        },
      };
    } catch (error) {
      console.log(error, 'error')
      if (error.parent.errno == 1062) {
        ctx.status = 500
        ctx.body = {
          code: 500,
          msg: "账单已存在",
          result: "",
        };
      } else {
        ctx.body = {
          code: 500,
          msg: "服务器错误",
          result: "",
        };
      }
    }
  }
}

module.exports = new AccountController();
