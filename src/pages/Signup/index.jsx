import axios from "axios"
import { useFormik } from "formik"
import * as yup from "yup"
import { Navigate } from "react-router-dom"
import { useLocalStorage } from "react-use"

import { Icon, Input } from "~/components"

const validationSchema = yup.object().shape({
  name: yup.string().required('Preencha seu nome'),
  username: yup.string().required('Preencha seu nome de usuário'),
  email: yup.string().required('Preencha seu e-mail').email('Informe um e-mail válido'),
  password: yup.string().required('Digite uma senha'),
})

export const Signup = () => {

  const [auth, setAuth] = useLocalStorage('auth', {})

  const formik = useFormik({
    onSubmit: async (values) => {
      
      const res = await axios({
        method: 'post',
        baseURL: import.meta.env.VITE_API_URL,
        url: 'users',
        data: values
      })

      setAuth(res.data)
    },
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
    validationSchema
  })

  if (auth?.user?.id) {
    return <Navigate to="/dashboard" replace={true} />
  }

  return(
    <div>
      <header className="p-4 border-b border-red-300">
        <div className="container flex justify-center max-w-xl">
          <Icon name="logoBranco" className="w-32 md:w-40"/>
        </div>
      </header>

      <main className='container max-w-xl p-4'>
        <div className='p-4 flex space-x-4 items-center'>
          <a href="/">
            <Icon name="back" className="h-6"/>
          </a>
          <h2 className="text-xl font-bold">Crie sua conta</h2>
        </div>

        <form className="p-4 space-y-6" onSubmit={formik.handleSubmit}>
          <Input
            type='text'
            name='name'
            label='Seu nome'
            placeholder='Digite seu nome.'
            value={formik.values.name}
            error={formik.touched.name && formik.errors.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Input
            type='text'
            name='username'
            label='Seu nome de usuário'
            placeholder='Digite um nome de usuário.'
            value={formik.values.username}
            error={formik.touched.username && formik.errors.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Input
            type='text'
            name='email'
            label='Seu e-mail'
            placeholder='Digite seu e-mail.'
            value={formik.values.email}
            error={formik.touched.email && formik.errors.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Input
            type='password'
            name='password'
            label='Sua senha'
            placeholder='Digite sua senha.'
            value={formik.values.password}
            error={formik.touched.password && formik.errors.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          
          <button 
            type="submit" 
            className="block text-center w-full text-white bg-red-500 px-6 py-3 rounded-xl disabled:opacity-50"
            disabled={!formik.isValid || formik.isSubmitting} 
          >
            {formik.isSubmitting? "Carregando..." : "Criar minha conta"}
          </button>
        </form>
      </main>
    </div>
  );
}