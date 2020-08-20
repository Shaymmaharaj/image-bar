
const mysql = require('mysql')

const getAll = function(res) {
    connection.query('SELECT * FROM images', (err, data) => {
      if (err) {
        res.status(500);
        res.send(err);
      } else {
        res.status(200);
        res.send(data);
      }
    })
  }

  module.exports = {
    getAll: getAll
};
