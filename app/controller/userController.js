const { userInfo } = require("../models/userModel");

const UserController = {
    saveUser: (req, res) => {
        formData = {
            name: "Raaj",
            dateOfBirth: "20-04-1999",
            sex: 'm',
            department: 'Design',
            salary: 30007
        }
        const userSave = new userInfo(formData);
        userSave.save().then((data) => {

            console.log("data has been saved successfully");
            res.status(200).send(data);

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
        userInfo.findOneAndUpdate(
            { name: 'Manish' },
            {
                $set: {
                    name: 'Ashish',
                    salary: 45000
                    // name: req.body.name,
                    // quote: req.body.quote
                }
            },
            {
                upsert: true
            }
        ).then(result => {
            console.log("Updated Data", result)
        }).catch(error => console.error(error))
    },
    deleteData:(req, res)=> {
        data={name:'Raaj'}
        userInfo.deleteOne(data)
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
