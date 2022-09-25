import { serverSupabaseClient } from "#supabase/server";

export default eventHandler(async (event) => {
	const client = serverSupabaseClient(event);

	let { data: projects, error } = await client
		.from('projects')
		.select()

	return { projects, error };
});
