const menuDb = require('../db/menu.json')

class MenuModel {}

MenuModel.getAll = () => {
    return menuDb
}

module.exports = MenuModel