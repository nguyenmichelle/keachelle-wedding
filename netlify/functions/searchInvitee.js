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

    const searchString = event.queryStringParameters.query;

    const [rows, fields] = await promisePool.query(`select *
                                            from themiche_wedding.Invitee
                                            where id in (select parent_id
                                                         from themiche_wedding.Invitee
                                                         where (full_name = '${searchString}' or last_name = '${searchString}' or
                                                                first_name = '${searchString}'))
                                               or parent_id in (select id
                                                                from themiche_wedding.Invitee
                                                                where (full_name = '${searchString}' or last_name = '${searchString}' or
                                                                       first_name = '${searchString}'))
                                               or parent_id in (select parent_id
                                                                from themiche_wedding.Invitee
                                                                where (full_name = '${searchString}' or last_name = '${searchString}' or
                                                                       first_name = '${searchString}'))
                                               or (full_name = '${searchString}' or last_name = '${searchString}' or
                                                   first_name = '${searchString}')
                                            ORDER BY CASE WHEN parent_id IS NULL THEN id ELSE parent_id END, id;`);

    return {
      statusCode: 200,
      body: JSON.stringify(rows)
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
