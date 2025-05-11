import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
    const client = await serverSupabaseClient(event)

    let { data, error } = await client
        .from('projects')
        .select("*")
        .filter("is_hidden", "eq", "false")

    return { data, error };
});
