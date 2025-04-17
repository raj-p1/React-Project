import React, { useEffect } from 'react'
import { useState, useCallback, useRef } from 'react'

function PwdGenerator() { // Defining the PwdGenerator functional component

    // State to manage the password length, default is 8
    const [length, setLength] = useState(8)
    // State to toggle inclusion of numbers in the password
    const [numberAllowed, setNumberAllowed] = useState(false)
    // State to toggle inclusion of special characters in the password
    const [charAllowed, setCharAllowed] = useState(false)
    // State to store the generated password
    // The password is generated using the useCallback hook to memoize the function
    const [Password, setPassword] = useState('')

    //useRef  hook
    // useRef to reference the password input field for clipboard operations
    const passwordRef = useRef(null)

    // Memoized function to generate a password
    const passwordGenerator = useCallback(() => {
        let pass = "" // Initialize an empty password string
        let str = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" // Base string with alphabets
        if (numberAllowed) str += "0123456789" // Append numbers if allowed
        if (charAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?" // Append special characters if allowed

        for (let i = 1; i <= length; i++) { // Loop to generate a password of the specified length
            let char = Math.floor(Math.random() * str.length + 1) // Randomly select a character index
            pass += str.charAt(char) // Append the character to the password
        }
        setPassword(pass) // Update the password state
    }, [length, numberAllowed, charAllowed, setPassword]) // Dependencies for the useCallback hook

    const copyPasswordToClipboard = useCallback(() => { // Memoized function to copy the password to the clipboard
        passwordRef.current?.select() // Select the password input field
        passwordRef.current?.setSelectionRange(0, 20) // Set the selection range for the input field
        window.navigator.clipboard.writeText(Password) // Write the password to the clipboard
        
    }, [Password]) // Dependency for the useCallback hook

    useEffect(() => { // useEffect to generate a password whenever dependencies change
        passwordGenerator() // Call the password generator function
    }, [length, numberAllowed, charAllowed, passwordGenerator]) // Dependencies for the useEffect hook

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