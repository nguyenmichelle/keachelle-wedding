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

    const idString = event.queryStringParameters.query;

    const [rows, fields] = await promisePool.query(`select id, full_name, email, attending_welcome_party, attending_wedding
                                             from Invitee
                                             where id = '${idString}'
                                                or parent_id = '${idString}'
                                                or id in (select id from Invitee where parent_id = '${idString}');`);

    await pool.end();

    return {
      statusCode: 200,
      body: JSON.stringify(rows),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error }),
    };
  }
};
