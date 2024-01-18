const Account = require("../model/account.model");
const { v4: uuidv4 } = require('uuid');

class AccountService {
  async createAccount (create_date, expense_type, expense_amount, remark) {
    const result = await Account.create({
      create_id: uuidv4(),
      create_date,
      expense_type,
      expense_amount,
      remark
    });
    return result;
  }

  async editAccount (create_date, expense_type, expense_amount, remark, create_id) {
    console.log(create_date, expense_type, expense_amount, remark, 'edit')
    const opt = { create_id }
    const newOpt = {}
    create_id && Object.assign(newOpt, { create_id })
    create_date && Object.assign(newOpt, { create_date })
    expense_type && Object.assign(newOpt, { expense_type })
    expense_amount && Object.assign(newOpt, { expense_amount })
    remark && Object.assign(newOpt, { remark })
    const result = await Account.update(newOpt, { where: opt });
    return result;
  }

  async deleteAccount (create_id) {
    try {
      const opt = { create_id }
      const result = await Account.destroy({ where: opt });
      return result;
    } catch(e) {
      console.log(e)
    }
  }

  async getAccountPage ({ page, pageSize, create_date }) {
    try {
      const newOpt = {}
      create_date && Object.assign(newOpt, { create_date })
      const result = await Account.findAndCountAll({
        where: newOpt,
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
