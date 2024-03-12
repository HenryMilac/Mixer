import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type FormValues = {
    name: string;
    emailAddress: string;
    dateBirth: string;
    password: string;
    confirmPassword: string;
    branch: string;
    webDeveloper: string;
    mobileDeveloper: string;
    dataScience: string;
    hacking: string;
    picture: string;
    termsConditions: boolean;
}

export default function ExlFormReactHookForm() {
    const { 
        register, 
        handleSubmit, 
        setValue, 
        watch, 
        formState: { errors } 
    } = useForm<FormValues>();
    
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
        console.log('Acá tienes que usar el fetch para enviar los datos al servidor')
    };

    return (
        <div>
            <h2>React Hook Form: <hr /></h2>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>

                {/* ------------------------- Name ------------------------- */}
                <input type="text" {...register('name', { 
                    required: {value: true, message: 'Campo requerido'}, 
                    minLength: {value: 3, message: 'Mínimo 3 caracteres'},
                    maxLength: {value: 20, message: 'Máximo 20 caracteres' }
                })} className='text-black' placeholder='Name'/>
                {errors.name && <p className='text-red-600'>{errors.name.message}</p>}

                {/* ------------------------- Last Name ------------------------- */}
                <input type="email" {...register('emailAddress', {
                    required: {value: true, message: 'Campo requerido'},
                    pattern: {value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: 'Email inválido'}
                })} className='text-black' placeholder='Email'/>
                {errors.emailAddress && <p className='text-red-600'>{errors.emailAddress.message}</p>}

                {/* ------------------------- Date of Birth ------------------------- */}
                <input type="date" {...register('dateBirth', {
                    required: {value: true, message: 'Campo requerido'},
                    validate: (value) => {
                        const dateBirth = new Date(value).getTime();
                        const dateNow = new Date().getTime();
                        const age = (dateNow - dateBirth) / (1000 * 60 * 60 * 24 * 365);
                        return age >= 18 || 'Debes ser mayor de edad';
                    }
                })} className='text-black'/>
                {errors.dateBirth && <p className='text-red-600'>{errors.dateBirth.message}</p>}

                {/* ------------------------- Password ------------------------- */}
                <input type="password" {...register('password', {
                    required: {value: true, message: 'Campo requerido'},
                    minLength: {value: 8, message: 'Mínimo 8 caracteres'}
                })} className='text-black' placeholder='Password'/>
                {errors.password && <p className='text-red-600'>{errors.password.message}</p>}

                {/* ------------------------- Confirm Password ------------------------- */}
                <input type="password" {...register('confirmPassword', {
                    required: {value: true, message: 'Campo requerido'},
                    validate: (value) => value === watch('password') || 'Las contraseñas no coinciden'
                })} className='text-black' placeholder='Confirm Password'/>
                {errors.confirmPassword && <p className='text-red-600'>{errors.confirmPassword.message}</p>}

                {/* ------------------------- Branch ------------------------- */}
                <select {...register('branch')} defaultValue="" className='text-black'>
                    <option value="" disabled>Select your branch</option>
                    <option value="wd">Web Developer</option>
                    <option value="md">Mobile Developer</option>
                    <option value="ds">Data Science</option>
                    <option value="hk">Hacking</option>
                </select>
                {/* Solo está hecho con el Web Developer */}
                {watch('branch') === 'wd' && (
                    <>
                        <input type="text" {...register('webDeveloper', {
                            required: {value: true, message: 'Especifica tu rol en el desarrollo web'},
                        })} className='text-black' placeholder='Rama del Desarrollo Web a la que te dediques'/>
                        {errors.webDeveloper && <p className='text-red-600'>{errors.webDeveloper.message}</p>}
                    </>
                )}

                {/* ------------------------- Picture ------------------------- */}
                {/* De esta forma nos va a mostrar el objecto: FileList, y nosotros queremos ingresar solo al nombre del archivo */}
                {/* <input type="file" {...register('picture')}/> */}
                {/* En este caso solo va a pasar el nombre del archivo */}
                <input type="file" onChange={e => {
                    if (e.target.files) {
                        setValue('picture', e.target.files[0].name);
                        console.log(e.target.files[0].name);
                    }
                }}/>

                {/* ------------------------- Terms & Conditions ------------------------- */}
                <div>
                    <input type="checkbox" {...register('termsConditions', {
                        required: {
                            value: true,
                            message: 'Debes aceptar los términos y condiciones'
                        }
                    })}/>
                    <span>Términos y condiciones</span>
                    {errors.termsConditions && <p className='text-red-600'>{errors.termsConditions.message}</p>}
                </div>













                <input type="submit" value="Add" />

                <div>
                    <h2>Values: <hr /></h2>
                    <pre>{JSON.stringify(watch(), null, 2)}</pre>
                </div>
            </form>
        </div>
    );
}