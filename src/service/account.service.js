const Account = require("../model/account.model");
const { v4: uuidv4 } = require('uuid');

class AccountService {
  async createAccount (create_date, expense_type, expense_amount, remark) {
    console.log(create_date, expense_type, expense_amount, remark, 'xxxxx')
    const result = await Account.create({
      create_id: uuidv4(),
      create_date,
      expense_type,
      expense_amount,
      remark
    });
    return result;
  }

  async getAccountPage ({ page, pageSize }) {
    try {
      const result = await Account.findAndCountAll({
        where: {},
        offset: (page * 1 - 1) * pageSize,
        limit: pageSize * 1
      });
      return result;
    } catch (error) {
    }
  }

  async updateById (obj) {
    const { id, create_date, expense_type, expense_amount, remark } = obj
    const opt = { id }
    const newOpt = {}
    id && Object.assign(newOpt, { id })
    create_date && Object.assign(newOpt, { create_date })
    expense_type && Object.assign(newOpt, { expense_type })
    expense_amount && Object.assign(newOpt, { expense_amount })
    remark && Object.assign(newOpt, { remark })
    try {
      const res = await Account.update(newOpt, { where: opt })
      return res
    } catch (error) {
      console.error(error)
    }

  }
}

module.exports = new AccountService();
