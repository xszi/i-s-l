const { createAccount, editAccount, deleteAccount, getAccountPage } = require("../service/account.service");

// 账单
class AccountController {
  // 新增
  async addAccount (ctx, next) {
    const { create_date,
      expense_type,
      expense_amount,
      remark } = (ctx.request.body);
    if (!create_date || !expense_type || !expense_amount ) {
      ctx.status = 400;
      ctx.app.emit(
        "error",
        {
          code: 1,
          msg: "请输入必填项",
          result: null,
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
        code: 0,
        msg: "操作成功",
      };
    } catch (error) {
      if (error.parent.errno == 1062) {
        ctx.status = 500
        ctx.body = {
          code: 1,
          msg: "账单已存在",
          result: null
        };
      } else {
        ctx.body = {
          code: 1,
          msg: "服务器错误",
          result: null,
        };
      }
    }
  }
  // 编辑
  async editAccount (ctx, next) {
    const { create_date,
      expense_type,
      expense_amount,
      remark, create_id } = (ctx.request.body);
    if (!create_date || !expense_type || !expense_amount ) {
      ctx.status = 400;
      ctx.app.emit(
        "error",
        {
          code: 1,
          msg: "请输入必填项",
          result: null,
        },
        ctx
      );
      return;
    }
    try {
      await editAccount(create_date,
        expense_type,
        expense_amount,
        remark, create_id);
      ctx.body = {
        code: 0,
        msg: "操作成功",
      };
    } catch (error) {
      if (error.parent.errno == 1062) {
        ctx.status = 500
        ctx.body = {
          code: 1,
          msg: "账单已存在",
          result: null
        };
      } else {
        ctx.body = {
          code: 1,
          msg: "服务器错误",
          result: null,
        };
      }
    }
  }
  // 删除
  async deleteAccount (ctx, next) {
    const { create_id } = (ctx.request.body);
    if (!create_id) {
      ctx.status = 400;
      ctx.app.emit(
        "error",
        {
          code: 1,
          msg: "未传创建Id",
          result: null,
        },
        ctx
      );
      return;
    }
    try {
      await deleteAccount(create_id);
      ctx.body = {
        code: 0,
        msg: "操作成功",
      };
    } catch (error) {
      if (error.parent.errno == 1062) {
        ctx.status = 500
        ctx.body = {
          code: 1,
          msg: "账单已存在",
          result: null
        };
      } else {
        ctx.body = {
          code: 1,
          msg: "服务器错误",
          result: null,
        };
      }
    }
  }
  // 查询账单
  async qryAccountPage (ctx, next) {
    const { page, pageSize, create_date } = (ctx.request.body);
    try {
      const res = await getAccountPage({ page, pageSize, create_date });
      ctx.body = {
        code: 0,
        msg: "操作成功",
        result: res
      };
    } catch (error) {
      ctx.body = {
        code: 1,
        msg: "服务器错误",
        result: null
      };
    }
  }
}

module.exports = new AccountController();
