import { supabase } from '../utils/supabaseClient'

export async function agregarInvitado() {
  const { data, error } = await supabase
    .from('Guest')
    .insert([
      {
        firstName: 'Lucas',
        lastName: 'Ramos',
        fullName: 'Lucas Ramos',
        familyGroup: 1,
        confirmed: true,
      },
    ])

  if (error) console.error(error)
  else console.log('Invitado agregado:', data)
}
