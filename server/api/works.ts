import { serverSupabaseClient } from "#supabase/server";

export default eventHandler(async (event) => {
	const client = serverSupabaseClient(event);

	let { data, error } = await client
		.from('work')
		.select()
        .order('start_date', { ascending: false })

	return { data, error };
});
