'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export default function Facebook() {

    const router = useRouter()

    const handleBtnOnClick = () => {
        router.push("/")
    }
    return (
        <>
            <div>
                This Is Facebook Page!!!
            </div>
            <div>
                <button className='bg-white text-slate-900' onClick={() => { handleBtnOnClick() }}>
                    Back Home
                </button>
            </div>
        </>
    )
}
