'use server'

import { supabase } from '@/apis/supabase'
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

  const { data, error } = await supabase.auth.signInWithPassword(form)

  if (error) {
    redirect('/error')
  }

  const session = await supabase.auth.getUser();
  console.log('supabse user', session.data.user);


  if(session.data.user) {
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