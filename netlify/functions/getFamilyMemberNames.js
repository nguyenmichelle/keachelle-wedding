const mysql = require('mysql2')

exports.handler = async (event, context) => {
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

    return {
      statusCode: 200,
      body: JSON.stringify(rows),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error }),
    };
  } finally {
    await db.end()
  }
};
