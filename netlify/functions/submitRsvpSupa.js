const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    flowType: 'pkce',
  },
});

exports.handler = async function (event, context) {
  const data = event.queryStringParameters;

  try {
    for (const [key, value] of Object.entries(data)) {
      let person = JSON.parse(value);

      const { error } = await supabase
        .from('invitee')
        .update({ attending_welcome_party: person.attending_welcome_party == 1 ? true : false, attending_wedding: person.attending_wedding == 1 ? true : false, modify_date: new Date() })
        .eq('id', person.id)

      if (error) {
        return {
          statusCode: 500,
          body: JSON.stringify({ error: 'Internal Server Error' }),
        };
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Success' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An error occurred' }),
    };
  }
};
