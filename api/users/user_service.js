const db = require("../config/connection");

if(db) {
    console.log("DB connected!")
} else {
    console.log("Failed to connect DB")
}

module.exports = {
    serviceAddUser: (data, callback) => {
        db.query(
        `insert into person(firstName, lastName, gender, email, password, number) values(?,?,?,?,?,?)`,
        [
            data.first_name,
            data.last_name,
            data.gender,
            data.email,
            data.password,
            data.number
        ],
        (error, result, fields)=>{
            if(error){
                return callback(error);
            } else {
                return callback(null, result)
            }
        }
    )
},

    serviceGetUsers: callBack => {
        db.query(
            `select * from person`,
            [],
            (err, results, fields) => {
                if(err){
                    return callBack(err);
                } else {
                    return callBack(null, results)
                }
            }
        )
    },

    serviceGetUsersById: (id, callback) => {
        db.query(
            `select * from person where id = ?`,
            [id],
            (err, resuls, fields) => {
                if(err){
                    return callBack(err)
                } else {
                    return callBack(null, resuls[0])
                }
            }
        )
    },

    serviceUpdateUser: (data, callBack) => {
        db.query(
            `update person set firstName=?, lastName=?, gender=?, email=?, password=?, number=? where id=?`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.id
            ],
            (err, results, fields) => {
                if(err){
                    return callBack(err);
                } else {
                    return callBack(null, results)
                }
            }
        )
    },

    serviceDeleteUser: (data, callBack) => {
        db.query(
            `delete from person where id=?`,
            [data.id],
            (err, results, fields) => {
                if(err){
                    return callBack(err);
                } else {
                    return callBack(null, results);
                }
            }
        )
    },

    serviceGetUserByEmail: (email, callBack) => {
        db.query(
            `select firstName, email, password from person where email = ?`,
            [email],
            (err, results, fields) => {
                if(err){
                    return callBack(err);
                } else {
                    return callBack(null, results[0]);
                }
            }
        )
    }
}
