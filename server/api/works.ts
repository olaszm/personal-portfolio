import { serverSupabaseClient } from '#supabase/server'
import type { WorkEntry } from '~/utils/types'

export default defineEventHandler(async (event): Promise<WorkEntry[]> => {
  const client = await serverSupabaseClient(event)

  const { data, error } = await client
    .from('work')
    .select('*')
    .order('start_date', { ascending: false })

  if (error) throw createError({ statusCode: 500, message: error.message })

  return data
})
