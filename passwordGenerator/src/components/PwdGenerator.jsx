import React, { useEffect } from 'react'
import { useState, useCallback, useRef } from 'react'

function PwdGenerator() {

    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [Password, setPassword] = useState('')

    //useRef  hook
    const passwordRef = useRef(null)

    const passwordGenerator = useCallback(() => {
        let pass = ""
        let str = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if (numberAllowed) str += "0123456789"
        if (charAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?"

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }
        setPassword(pass)
    }, [length, numberAllowed, charAllowed, setPassword])

    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0, 20) 
        window.navigator.clipboard.writeText(Password)
        
    }, [Password])

    useEffect(() => {
        passwordGenerator()
    }, [length, numberAllowed, charAllowed, passwordGenerator])

    return (
        <>
            <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
                <h1 className='text-white text-center text-2xl font-bold py-4 my-3'>Password Generator</h1>

                <div className=' w-full flex shadow overflow-hidden mb-4 bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md text-center'>
                    <input type='text'
                        value={Password}
                        className='w-full px-3 py-1 rounded-md text-gray-800 outline-none bg-gray-200 w-full'
                        placeholder='Password'
                        readOnly
                        ref={passwordRef}
                    />
                    <button
                        onClick={copyPasswordToClipboard}
                        className='outline-none bg-blue-700 rounded-lg text-white px-3 py-0.5 shrink-0'>copy</button>
                </div>
                <div className='flex text-sm gap-x-2 my-4'>
                    <div className='flex items-center gap-x-1'>
                        <input type='range' min={8} max={20} value={length} onChange={(e) => setLength(e.target.value)} className='cursor-pointer' />
                        <label>Length: {length} </label>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input type='checkbox' defaultChecked={numberAllowed} id="numberInput " onChange={() => setNumberAllowed((prev) => !prev)} />
                        <label htmlFor='numberInput'>Numbers</label>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input type='checkbox' defaultChecked={charAllowed} id="charInput " onChange={() => setCharAllowed((prev) => !prev)} />
                        <label htmlFor='characterInput'>Characters</label>
                    </div>
                </div>
            </div >
        </>
    )
}

export default PwdGenerator