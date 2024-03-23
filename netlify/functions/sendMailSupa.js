const fetch = require("node-fetch");
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    flowType: 'pkce',
  },
});

async function handler(event) {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required"),
    };
  }

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
    try {
      const { error } = await supabase
        .from('email_log')
        .insert({ email: requestBody.email, send_date: newDate() })

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
