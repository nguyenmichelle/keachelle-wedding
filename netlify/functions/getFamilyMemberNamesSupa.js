const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    flowType: 'pkce',
  },
});

async function getChildrenIds(idString) {
  const { data, error } = await supabase
    .from('invitee')
    .select( 'id')
    .eq('parent_id', idString)

  return data.map(a => a.parent_id ? a.parent_id : 3000);
}

exports.handler = async (event, context) => {
  try {
    if (event.httpMethod !== 'GET') {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method Not Allowed' }),
      };
    }

    const idString = event.queryStringParameters.query;

    // Children ids query
    const childrenIds = await getChildrenIds(idString);

    const { data, error } = await supabase
      .from('invitee')
      .select( 'id, full_name, email, attending_welcome_party, attending_wedding')
      .or(`id.in.(${childrenIds.join(',')}), id.eq.${idString}, parent_id.eq.${idString}`)
      .order('id', { ascending: true });

    if (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
}
