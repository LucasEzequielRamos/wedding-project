import { supabase } from '../utils/supabaseClient'

export async function addGuest(fullName: string,email:string, confirmed: string | null) {
  const lowerName = fullName.trim().toLowerCase();
  const { data: guest, error: searchError } = await supabase
    .from('guests')
    .select('*')
     .eq('full_name_lc', lowerName)
    .single()

     if (searchError || !guest) {
    console.error('Invitado no encontrado:', searchError)
    return false
  }

  console.log(guest)

    const { error: updateError } = await supabase
    .from('guests')
    .update({
      confirmed: confirmed,
      confirmed_at:  new Date().toISOString() ,
      email: email
    })
     .eq('full_name_lc', lowerName);

    if (updateError) {
    console.error('Error actualizando:', updateError)
  } else {
    return {message: "Guest confirmed"}
  }
}
