import React from 'react'

export default function Number({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <div className="h-[5.25rem] w-[0.0625rem] translate-x-[1.9rem] bg-light opacity-20"></div>
      <div className="rounded-full border bg-very-light px-5 py-4 font-black leading-[1.625rem] text-light">
        {children}
      </div>
    </div>
  )
}
