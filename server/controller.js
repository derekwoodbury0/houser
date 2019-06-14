module.exports = {
    readAll: (req, res) => {
        let db = req.app.get('db')

        db.get_houses().then(response => {
            res.status(200).send(response)
        }).catch(error => res.status(200).send(error))
    },
    addHouse: (req, res) => {
        let db = req.app.get('db')
        let newHouse = req.body

        db.add_house(newHouse).then(response => {
            res.status(200).send(response)
        }).catch(error => res.status(500).send(error))
    },
    deleteHouse: (req, res) => {
        let db = req.app.get('db')
        let { id } = req.params

        db.delete_house(id).then(response => res.status(200).send(response))
        .catch(error => res.status(500).send(error))
    }
}