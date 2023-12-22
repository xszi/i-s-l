const { DataTypes } = require('sequelize')

const seq = require('../config/db')

const Account = seq.define('Account', {
    create_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
        comment: '账单id'
    },
    create_date: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
        comment: '创建时间'
    },
    expense_type: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
        comment: '消费类型'
    },
    expense_amount: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
        comment: '消费金额'
    },
    remark: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
        comment: '备注'
    }
})

// Account.sync({force:true})
Account.sync({})
module.exports = Account