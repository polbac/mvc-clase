
const handlebars = require('handlebars')
const fs = require('fs')

class MenuView {
    listView(data) {
        const source = fs.readFileSync('templates/menu-list.hbs', 'utf-8')
        const listTemplate = handlebars.compile(source)
        return listTemplate(data)
    }
}

module.exports = new MenuView()