import { createClient } from '@supabase/supabase-js'
import config from '../config'

const supabaseUrl = config.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = config.NEXT_PUBLIC_SUPABASE_ANON_KEY

export default createClient(supabaseUrl, supabaseAnonKey)
