import type { MetaFunction } from '@remix-run/node'
import logo from '../assets/images/logo.svg'
import heroRight from '../assets/images/desktop/image-hero-right.png'
import heroLeft from '../assets/images/desktop/image-hero-left.png'
import manTexting from '../assets/images/desktop/image-man-texting.jpg'
import menInMeeting from '../assets/images/desktop/image-men-in-meeting.jpg'
import womanInVideocall from '../assets/images/desktop/image-woman-in-videocall.jpg'
import womenVideochatting from '../assets/images/desktop/image-women-videochatting.jpg'
import Button from '~/components/Button'
import Number from '~/components/Number'

export const meta: MetaFunction = () => {
  return [{ title: 'Meet Landing Page' }, { name: 'description', content: 'A Challenge from Frontend Mentor!' }]
}

export default function Index() {
  return (
    <main className="relative flex flex-col items-center">
      <img src={logo} alt="logo" className="my-12" />
      <div className="grid grid-cols-[minmax(0,1fr)_2fr_2fr_minmax(0,1fr)] items-center justify-items-center gap-9 lg:grid-cols-[minmax(0,1fr)_2fr_minmax(0,1fr)]">
        <img src={heroLeft} alt="hero left" className="col-span-2 place-self-end lg:col-span-1 lg:place-self-center" />
        <img
          src={heroRight}
          alt="hero right"
          className="col-span-2 place-self-start lg:col-span-1 lg:col-start-3 lg:place-self-center"
        />
        <div className="col-span-4 p-6 text-center md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-2 lg:row-start-1">
          <h1 className="text-[2.5rem] font-black leading-[2.75rem] md:text-5xl md:leading-[3rem] lg:text-[4rem] lg:leading-[4rem]">
            Group Chat for Everyone
          </h1>
          <p className="mb-8 mt-6 font-medium leading-[1.625rem] text-light lg:text-lg">
            Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.
          </p>
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
            <Button className="hover:bg-primary-light cursor-pointer bg-primary">
              Download <span className="text-primary-bright">v1.3</span>
            </Button>
            <Button className="hover:bg-secondary-light my-4 cursor-pointer bg-secondary">What is it?</Button>
          </div>
        </div>
      </div>
      <Number className="mt-16">01</Number>
      <div className="mt-8 grid grid-cols-2 gap-6 p-6 md:grid-cols-4 lg:px-40">
        <img src={womanInVideocall} alt="Woman in videocall" className="rounded-xl" />
        <img src={womenVideochatting} alt="Woman videochatting" className="rounded-xl" />
        <img src={menInMeeting} alt="Men in meeting" className="rounded-xl" />
        <img src={manTexting} alt="Man textign" className="rounded-xl" />
      </div>
      <div className="p-6 text-center lg:max-w-[33.75rem]">
        <h2 className="mb-6 font-black uppercase leading-[0.625rem] tracking-[0.25rem] text-primary">
          Built for modern use
        </h2>
        <h3 className="mb-8 text-[2rem] font-black leading-[2.25rem] text-dark md:text-[2.5rem] md:leading-[2.75rem]">
          Smarter meetings, all in one place
        </h3>
        <p className="font-medium leading-[1.625rem] text-light lg:text-lg">
          Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can
          join with invite-only team access, data encryption, and data export.
        </p>
      </div>

      <Number className="relative z-10 translate-y-[2rem]">02</Number>
      <div className="relative mb-4 flex w-full flex-col items-center bg-primary/90 bg-opacity-10 p-6 text-center text-white md:p-36 lg:flex-row lg:items-center lg:justify-evenly lg:px-4">
        <div className="absolute bottom-0 left-0 right-0 top-0 z-[-1] bg-[url('/images/mobile/image-footer.jpg')] bg-cover bg-center bg-no-repeat md:bg-[url('/images/tablet/image-footer.jpg')] lg:bg-[url('/images/desktop/image-footer.jpg')]"></div>
        <h2 className="mt-16 text-[2rem] font-black leading-[2.25rem] md:px-10 md:text-[2.5rem] md:leading-[2.75rem] lg:mt-0 lg:max-w-lg lg:px-0">
          Experience more together
        </h2>
        <p className="mt-6 text-lg font-medium leading-[1.625rem] text-very-light md:mt-8 lg:mt-0 lg:max-w-xs">
          Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.
        </p>
        <Button className="hover:bg-secondary-light mb-8 mt-8 cursor-pointer bg-secondary md:mt-10 lg:mb-0 lg:mt-0 lg:min-w-fit">
          Download <span className="text-secondary-bright">v1.3</span>
        </Button>
      </div>
    </main>
  )
}
