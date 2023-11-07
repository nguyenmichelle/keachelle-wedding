const fetch = require("node-fetch");
const mysql = require('mysql2');

async function handler(event) {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required"),
    };
  }

  console.log('event.body')
  console.log(event.body)
  console.log('JSON.parse(event.body)')
  console.log(JSON.parse(event.body))
  const requestBody = JSON.parse(event.body);

  const response = await fetch(`${process.env.URL}/.netlify/functions/emails/confirmation`, {
    method: "POST",
    headers: {
      "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: 'michelle.nguyen@utah.edu',
      to: requestBody.email,
      subject: "Michelle + Keaton Wedding - RSVP Confirmation",
      parameters: {
        attending1: requestBody.attending1,
        notAttending1: requestBody.notAttending1,
        hasAttending1: requestBody.attending1.length == 0? null : true,
        hasNotAttending1: requestBody.notAttending1.length == 0? null : true,
        attending2: requestBody.attending2,
        notAttending2: requestBody.notAttending2,
        hasAttending2: requestBody.attending2.length == 0? null : true,
        hasNotAttending2: requestBody.notAttending2.length == 0? null : true
      },
    }),
  });

  if (response.status === 200) {
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
      await promisePool.query('INSERT INTO EmailLog (email, sent_date) VALUES (?,?)', [requestBody.email, new Date()],(error, results) => {
        if (error) return res.json({ error: error });
      });

      return {
        statusCode: 200,
        body: JSON.stringify("Email log saved!"),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify("Email sent!"),
    };
  } else {
    return {
      statusCode: response.status,
      body: JSON.stringify("Failed to send email"),
    };
  }
}

module.exports = { handler };
