import { useEffect, useRef, useState } from "react";
import { fetchUsers } from "../../redux/slices/list/thunks";
import { Input } from "../../components/input";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export const ListScreen = () => {

    const dispatch = useAppDispatch();

    const { isCreatedUser } = useAppSelector((state) => state.users);

    const [userRegistered, setUserRegistered] = useState(false);

    const [timeToResendCode, setTimeToResendCode] = useState(0);

    const inputRefs = Array(6).fill(0).map(() => useRef<HTMLInputElement>(null));

    const [registerProps, setRegisterProps] = useState({
        name: '',
        lastName: '',
        email: ''
    });

    useEffect(() => {
        if (isCreatedUser) {
            setUserRegistered(true);
            setRegisterProps({
                name: '',
                lastName: '',
                email: ''
            });
        }
    }, [isCreatedUser]);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (timeToResendCode > 0) {
            interval = setInterval(() => {
                setTimeToResendCode(timeToResendCode - 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [timeToResendCode]);

    const onResendOtpCode = () => {
        if(timeToResendCode === 0){
            setTimeToResendCode(60);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black">

            {
                userRegistered ? (
                    <>
                        <p className='text-[24p] w-[355px] text-center text-white'>Digita el código para verificación de tu cuenta</p>
                            <div className='flex flex-col relative items-center justify-center rounded-xl w-[355px] h-[309px] bg-customOrange py-4 px-8 mt-12'>
                            <p className='text-white text-[17px]'>Aviso importante</p>

                            <p className='text-white text-[14px] my-4 text-center'>Digita los 6 números que hemos enviado a tu correo electrónico</p>

                            <div className='flex justify-center space-x-2 mt-10'>
                                <input
                                    ref={inputRefs[0]}
                                    type='text'
                                    maxLength={1}
                                    className='w-8 h-8 border rounded text-center'
                                    onChange={() => inputRefs[1].current?.focus()}
                                />
                                <input
                                    ref={inputRefs[1]}
                                    type='text'
                                    maxLength={1}
                                    onKeyDown={(e) => { if (e.key === 'Backspace') inputRefs[0].current?.focus(); }}
                                    className='w-8 h-8 border rounded text-center'
                                    onChange={() => inputRefs[2].current?.focus()}
                                />
                                <input
                                    ref={inputRefs[2]}
                                    type='text'
                                    maxLength={1}
                                    onKeyDown={(e) => { if (e.key === 'Backspace') inputRefs[1].current?.focus(); }}
                                    className='w-8 h-8 border rounded text-center'
                                    onChange={() => inputRefs[3].current?.focus()}
                                />
                                <input
                                    ref={inputRefs[3]}
                                    type='text'
                                    maxLength={1}
                                    onKeyDown={(e) => { if (e.key === 'Backspace') inputRefs[2].current?.focus(); }}
                                    className='w-8 h-8 border rounded text-center'
                                    onChange={() => inputRefs[4].current?.focus()}
                                />
                                <input
                                    ref={inputRefs[4]}
                                    type='text'
                                    maxLength={1}
                                    onKeyDown={(e) => { if (e.key === 'Backspace') inputRefs[3].current?.focus(); }}
                                    className='w-8 h-8 border rounded text-center'
                                    onChange={() => inputRefs[5].current?.focus()}
                                />
                                <input
                                    ref={inputRefs[5]}
                                    type='text'
                                    maxLength={1}
                                    onKeyDown={(e) => { 
                                        if (e.key === 'Backspace' && e.currentTarget.value === '') {
                                            inputRefs[4].current?.focus(); 
                                        }
                                    }}
                                    className='w-8 h-8 border rounded text-center'
                                />
                            </div>

                            {
                                timeToResendCode === 0 ? (
                                    <button
                                        className='px-4 text-white mt-4'
                                        onClick={() => {
                                            setTimeToResendCode(60)
                                            onResendOtpCode()
                                        }}
                                    >
                                        <span className='text-[15px]'>Reenviar código</span>
                                    </button>
                                ) : (
                                    <p className='text-white text-[12px] mt-4'>
                                        00:{timeToResendCode}
                                    </p>
                                )
                            }
                        </div>
                    </>
                ) : (
                    <>
                        <Input
                            type='text'
                            placeholder='Nombre'
                            value={registerProps.name}
                            onChange={(e) => setRegisterProps({ ...registerProps, name: e.target.value })}
                        />

                        <Input
                            type='text'
                            placeholder='Apellido'
                            value={registerProps.lastName}
                            onChange={(e) => setRegisterProps({ ...registerProps, lastName: e.target.value })}
                        />

                        <Input
                            type='text'
                            placeholder='Correo Electronico'
                            value={registerProps.email}
                            onChange={(e) => setRegisterProps({ ...registerProps, email: e.target.value })}
                        />

                        <button
                            className="bg-white w-80 rounded-xl h-9 mt-6 hover:bg-red-700"
                            onClick={() => dispatch(fetchUsers(
                                registerProps.name,
                                registerProps.lastName,
                                registerProps.email
                            ))}
                        >
                            Registrar
                        </button>
                    </>
                )
            }


        </div>
    );
};