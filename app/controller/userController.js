const { userInfo } = require("../models/userModel");

const UserController = {
    saveUser: (req, res) => {
        const userSave = new userInfo(req.body);
        userSave.save().then((data) => {

            console.log("Data has been saved successfully");
            res.status(200).json("Data has been saved successfully");

        }).catch(err => {
            console.log("error", err)
        })
    },
    allUsers: (req, res) => {
        userInfo.find({}).then((data) => {

            res.status(200).send(data);
        }).catch(err => {
            res.status(400).send(err);
            console.log("err", err)

        })
    },
    updateRecord: (req, res) => {
        const query = req.query
        userInfo.findOneAndUpdate(
            req.query,
            {
                $set: req.body

            },
            {
                upsert: true
            }
        ).then(result => {
            console.log("Updated Data", result)
        }).catch(error => console.error(error))
    },
    deleteData: (req, res) => {
        data = { name: 'Raaj' }
        userInfo.deleteOne(req.query)
            .then(result => {
                if (result.deletedCount === 0) {
                    return res.json('No data to delete')
                }
                res.json(`Deleted data`)
            })
            .catch(error => console.error(error))
    }
};
module.exports = UserController;
