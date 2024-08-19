const mysql = require("mysql2/promise");
const config = require("./db.config");

async function getInfo() {
  try {
    const connection = await mysql.createConnection(config);
    const [results, fields] = await connection.query("select version()");

    console.log(results, fields);
    return {
      results,
    };
  } catch (error) {
    console.log(error);
    return error;
  }
}

module.exports = {
  getInfo: getInfo,
};
