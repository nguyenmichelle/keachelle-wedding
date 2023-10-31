const mysql = require('mysql2')

exports.handler = async (event, context) => {
  const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
      // Provide SSL/TLS options here
      // Example options (customize to match your SSL/TLS configuration):
      rejectUnauthorized: false
    }
  };

  const pool = mysql.createPool(dbConfig);
  const promisePool = pool.promise();

  try {
    if (event.httpMethod !== 'GET') {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method Not Allowed' }),
      };
    }

    const data = event.queryStringParameters;

    const updatePromises = Object.entries(data).map(async ([key, value]) => {
      let person = JSON.parse(value);

      const query = `
      UPDATE Invitee
      SET full_name = ?,
          first_name = ?,
          last_name = ?,
          attending_welcome_party = ?,
          attending_wedding = ?,
          modify_date = ?
      WHERE id = ?;
    `;

      const values = [
        person.full_name,
        person.first_name,
        person.last_name,
        person.attending_welcome_party == 1 ? true : false,
        person.attending_wedding == 1 ? true : false,
        new Date(),
        person.id,
      ];

      const [rows, fields] = await pool.query(query, values);
    });

    // Close the connection pool when done
    await pool.end();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Success' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error }),
    };
  }
};
