const options = require('./options/mariaDB')
const knex = require('knex')(options)

class ContenedorMariaDB {

    constructor() {
        // this.textJson = textJson;
        // this.data = []
        // try {
        //     this.read()
        // } catch (error) {
        //     this.write()
        // }
    }

    // read() {
    //     this.data = JSON.parse(fs.readFileSync(this.textJson));
    // }

    // write() {
    //     fs.writeFileSync(this.textJson, JSON.stringify(this.data));
    // }
    
    save(obj) {
        knex('products').insert({
            name:obj.name,
            price:obj.price,
            thumbnail:obj.thumbnail,
            username:obj.username
        })
        .then((data) => console.log(data))
        .catch(err => console.log(err))
        // .finally(()=> knex.destroy())
    }

    getByID(id) {
        const objID = this.data.find(obj => obj.id == id)
        return objID
    }

    getAll() {
        let products = []
        knex.from('products').select('*')
            .then( rows => {
                console.log(rows)
            })
            .catch(err => console.log(err))
            .finally(()=> knex.destroy())
        return products
    }

    deleteByID(id) {
        const idx = this.data.findIndex(obj => obj.id == id)
        this.data.splice(idx, 1)
        this.write()
    }

    deleteAll() {
        this.data = []
        this.write()
    }

}

module.exports = ContenedorMariaDB;
