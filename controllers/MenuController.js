const MenuModel = require('../models/MenuModel')
const MenuView = require('../views/MenuView')

class MenuController {
    listMenu() {
        const menuItems = MenuModel.getAll()
        return MenuView.listView({
            items: menuItems
        })
    }
}

module.exports = MenuController