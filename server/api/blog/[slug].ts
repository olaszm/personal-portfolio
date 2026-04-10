import { serverSupabaseClient } from "#supabase/server";
import type { Blog } from "~/utils/types";

export default defineEventHandler(async (event): Promise<Blog> => {
  const client = await serverSupabaseClient(event)
  const slug = getRouterParam(event, 'slug')

  const { data, error } = await client
    .from('blog')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (error) throw createError({ statusCode: 404, message: error.message })

  return data
})
