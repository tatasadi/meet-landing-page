import React from 'react'

export default function Button({ className = '', children }: { className: string; children: React.ReactNode }) {
  return (
    <button className={`${className} rounded-full px-10 py-4 font-black leading-[1.625rem] text-white`}>
      {children}
    </button>
  )
}
