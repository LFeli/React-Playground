import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form'
import { z } from "zod"; 
import { zodResolver } from '@hookform/resolvers/zod'
import { supabase } from './lib/supabase';

const CreateUserFormSchema = z.object({
  avatar: z.instanceof(FileList)
    .transform(list => list.item(0)!)
    .refine(file => file!.size <= 5 * 1024 * 1024, 'O arquivo precisa ter no máximo 5mb'),
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
  techs: z.array(z.object({
    title: z.string().nonempty('O titulo e obrigatório'),
    knowledge: z.coerce.number().min(1).max(100),
  })).min(2, 'Insira pelo menos duas tecnologias')
})

type CreateUserFormData = z.infer<typeof CreateUserFormSchema>

export function App() {
  const[output, setOutput] = useState('')

  const {
    register, 
    handleSubmit, 
    formState: { errors },
    control
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(CreateUserFormSchema),
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'techs',
  })

  function addNewTech(){
    append({title: '', knowledge: 0})
  }

  async function createUser(data: CreateUserFormData){
    await supabase.storage.from(/**'You buckte name here'*/).upload(
      data.avatar.name, 
      data.avatar
    )

    setOutput(JSON.stringify(data, null, 2))
  }

  return (
   <main className="h-screen bg-zinc-50 dark:bg-zinc-950 dark:text-zinc-300 flex-col gap-10 flex items-center justify-center">
    <form 
      onSubmit={handleSubmit(createUser)}
      className="flex flex-col gap-4 w-full max-w-xs"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="avatar">Nome</label>
        <input 
        type="file" 
        accept='image/*'
        {...register('avatar')}
        />
        {errors.avatar && <span className='text-red-500 text-sm font-medium'>{errors.avatar.message}</span> }
      </div>


      <div className="flex flex-col gap-1">
        <label htmlFor="name">Nome</label>
        <input 
        type="text" 
        className="border boder-zinc-300 shadow-sm rounded h-10 px-3 dark:bg-zinc-900 text-white border-none"
        {...register('name')}
        />
        {errors.name && <span className='text-red-500 text-sm font-medium'>{errors.name.message}</span> }
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email">E-mail</label>
        <input 
        type="email" 
        className="border boder-zinc-300 shadow-sm rounded h-10 px-3 dark:bg-zinc-900 text-white border-none"
        {...register('email')}
        />
        {errors.email && <span className='text-red-500 text-sm font-medium'>{errors.email.message}</span> }
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password">Senha</label>
        <input 
        type="password" 
        className="border boder-zinc-300 shadow-sm rounded h-10 px-3 dark:bg-zinc-900 text-white border-none"
        {...register('password')}
        />
        {errors.password && <span className='text-red-500 text-sm font-medium'>{errors.password.message}</span> }
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="" className='flex items-center justify-between'>
          Tecnologias

          <button type='button' onClick={addNewTech} className='text-emerald-500 text-xs'>Adicionar</button>
        </label>

      </div>

      {fields.map((field, index) => {
        return(
          <div className='flex gap-4' key={field.id}>
            <div className='flex flex-1 flex-col gap-1'>
              <input 
                type="text" 
                className="border boder-zinc-300 shadow-sm rounded h-10 px-3 dark:bg-zinc-900 text-white border-none"
                {...register(`techs.${index}.title`)}
              />

              {errors.techs?.[index]?.title && <span className='text-red-500 text-sm font-medium'>{errors.techs?.[index]?.title?.message}</span> }
            </div>

            <div className='flex flex-1 flex-col gap-1'>
              <input 
                type="number" 
                className="w-16 border boder-zinc-300 shadow-sm rounded h-10 px-3 dark:bg-zinc-900 text-white border-none"
                {...register(`techs.${index}.knowledge`)}
              />

              {errors.techs?.[index]?.knowledge && <span className='text-red-500 text-sm font-medium'>{errors.techs?.[index]?.knowledge?.message}</span> }
            </div>
          </div>
        )
      })}

      {errors.techs && <span className='text-red-500 text-sm font-medium'>{errors.techs.message}</span> }


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
