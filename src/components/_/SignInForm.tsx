'use client'
// yarn add react-hook-form
// https://react-hook-form.com/

// yarn add zod
// https://zod.dev/
import { FieldValues, useForm } from 'react-hook-form'
import { z } from 'zod' // 스키마 만들기

// 타입 검증 가능 : 타입스크립트는 컴파일타임에 모두 자바스크립트로 변경
// 조드는 내부적으로 여러가지 타입 검사 있어서 런타임에도 (js)변경 이후에도 타입 에러를 반환
const signInSchema = z.object({
  email: z.string().email({ message: 'invalid email' }), // 이것 때문에 유효성 검사 없이도 런타임에도 잘 작성 가능
  password: z.string()
})

const SignInForm = () => {
  console.log('render!')

  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange', // onChange, onBlur
    defaultValues: {
      email: '123',
      password: ''
    }
  })
  const onSubmit = (value: FieldValues) => {
    console.log(value)
    console.log('formState:', formState)
    // formState 객체
    // defaultValues, 초기에 넣어준 값
    // dirtyFields, 디폴트에 넣어둔 값이 변경 됬는지 안됬는지(mode)
    // disabled,
    // errors
    console.log(signInSchema.parse(value)) // 파스 통과시 벨류 반환
  }

  console.log('error:', formState.errors)
  console.log('valid:', formState.isValid)

  console.log('Dirty Fields:', formState.dirtyFields)
  // handleSubmit : form submit 안에
  // register : 사용하고 있는 input 등록

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-5 items-center w-full m-auto">
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          {...register('email', {
            // required: true,
            // required: 'Email is required',
            required: {
              value: true,
              message: '유효성 검사 개이득?'
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: '유효성 검사 개이득'
            }
          })}
          type="email"
          placeholder="Email"
          className="text-black"
        />
        {formState.errors.email && <span>{formState.errors.email.message}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <input
          {...register('password', {
            required: true
          })}
          type="password"
          placeholder="Password"
          className="text-black"
        />
      </div>
      <button className="bg-gray-800 text-white px-4 py-2 rounded-md" type="submit" disabled={!formState.isValid}>
        Sign In
      </button>
    </form>
  )
}

export default SignInForm
