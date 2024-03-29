'use server'

import { getSupabaseClient } from '@/apis/supabase'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
  'use server'
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const form = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const supabase = await getSupabaseClient();
  const { data, error } = await supabase.auth.signInWithPassword(form)

  if (error) {
    redirect('/error')
  }

  console.log('signin', data);

  console.log('supabse user', data.user);

  console.log('supabse session', data.session);


  if(data.user) {
    revalidatePath('/', 'layout')
    redirect('/')
  }

  
}

// export async function signup(formData: FormData) {
//   const supabase = createClient()

//   // type-casting here for convenience
//   // in practice, you should validate your inputs
//   const data = {
//     email: formData.get('email') as string,
//     password: formData.get('password') as string,
//   }

//   const { error } = await supabase.auth.signUp(data)

//   if (error) {
//     redirect('/error')
//   }

//   revalidatePath('/', 'layout')
//   redirect('/')
// }