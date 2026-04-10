import { serverSupabaseClient } from '#supabase/server'
import type { Project } from '~/utils/types'

export default defineEventHandler(async (event): Promise<Project[]> => {
  const client = await serverSupabaseClient(event)

  const { data, error } = await client
    .from('projects')
    .select('*')
    .eq('is_hidden', false)
    .order('created_at', { ascending: false })

  if (error) throw createError({ statusCode: 500, message: error.message })

  return data
})
