const mysql = require('mysql2')
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false
  },
  waitForConnections: true,
  connectionLimit: 10, // Adjust according to your needs
  queueLimit: 0,
});
const promisePool = db.promise();

exports.handler = async function (event, context) {
  const data = event.queryStringParameters

  try {
    Object.entries(data).forEach(async function([key, value]) {
      let person = JSON.parse(value)

      const query = `
        UPDATE Invitee
        SET attending_welcome_party = ?,
            attending_wedding       = ?,
            modify_date             = ?
        WHERE id = ?;
      `

      const values = [
        person.attending_welcome_party == 1 ? true : false,
        person.attending_wedding == 1 ? true : false,
        new Date(),
        person.id,
      ]

      const [rows, fields] = await promisePool.query(query, values)
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Success' }),
    }
  } catch (error) {
    console.error('Error:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An error occurred' }),
    }
  }
}
