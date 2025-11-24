import { supabase } from "@/lib/supabaseClient"

export default function Home() {
  const fetchData = async () => {
    const { data, error } = await supabase.from('users').select('*')
    console.log(data, error)
  }

  fetchData()

  return <div>Home</div>
}
