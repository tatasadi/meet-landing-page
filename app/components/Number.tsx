import React from 'react'

export default function Number({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <div className="bg-light h-[5.25rem] w-[0.0625rem] translate-x-[1.9rem] opacity-20"></div>
      <div className="text-light  rounded-full border px-5 py-4 font-black leading-[1.625rem]">{children}</div>
    </div>
  )
}
