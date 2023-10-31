const mysql = require('mysql2') // Use the promise version

exports.handler = async function (event, context) {
  const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
      // Provide SSL/TLS options here
      // Example options (customize to match your SSL/TLS configuration):
      rejectUnauthorized: false
    }}

  const pool = mysql.createPool(dbConfig);
  const promisePool = pool.promise();

  const data = event.queryStringParameters

  try {
    const updatePromises = Object.entries(data).map(async ([key, value]) => {
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
