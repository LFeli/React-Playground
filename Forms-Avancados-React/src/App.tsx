import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { z } from "zod"; 
import { zodResolver } from '@hookform/resolvers/zod'

const CreateUserFormSchema = z.object({
  name: z.string()
  .nonempty('O nome e obrigatório')
  .transform(name => {
    return name.trim().split(' ').map(word => {
      return word[0].toLocaleUpperCase().concat(word.substring(1))
    }).join(' ')
  }),
  email: z.string()
    .nonempty('O e-mail e obrigatório')
    .email('Formato de e-mail invalido')
    .toLowerCase()
    .refine(email =>{
      return email.endsWith('@teste.com')
    }, 'O email precisa ser do @teste'), 
  password: z.string()
    .min(6, 'A senha precisa de no mínimo 6 caracteres'),
})

type CreateUserFormData = z.infer<typeof CreateUserFormSchema>

export function App() {
  const[output, setOutput] = useState('')

  const {
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(CreateUserFormSchema),
  })

  function createUser(data: any){
    setOutput(JSON.stringify(data, null, 2))
  }

  return (
   <main className="h-screen bg-zinc-50 dark:bg-zinc-950 dark:text-zinc-300 flex-col gap-10 flex items-center justify-center">
    <form 
      onSubmit={handleSubmit(createUser)}
      className="flex flex-col gap-4 w-full max-w-xs"
    >

      <div className="flex flex-col gap-1">
        <label htmlFor="name">Nome</label>
        <input 
        type="text" 
        className="border boder-zinc-300 shadow-sm rounded h-10 px-3 dark:bg-zinc-900 text-white border-none"
        {...register('name')}
        />
        {errors.name && <span>{errors.name.message}</span> }
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email">E-mail</label>
        <input 
        type="email" 
        className="border boder-zinc-300 shadow-sm rounded h-10 px-3 dark:bg-zinc-900 text-white border-none"
        {...register('email')}
        />
        {errors.email && <span>{errors.email.message}</span> }
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password">Senha</label>
        <input 
        type="password" 
        className="border boder-zinc-300 shadow-sm rounded h-10 px-3 dark:bg-zinc-900 text-white border-none"
        {...register('password')}
        />
        {errors.password && <span>{errors.password.message}</span> }
      </div>

      <button 
      type="submit"
      className="bg-emerald-500 rounded font-semibold text-white h-10 hover:bg-emerald-600 transition-colors"
      >
        Salvar
      </button>
    </form>

    <pre>{output}</pre>
   </main> 
  )
}
