import type { MetaFunction } from '@remix-run/node'
import logo from '../assets/images/logo.svg'
import heroRight from '../assets/images/desktop/image-hero-right.png'
import heroLeft from '../assets/images/desktop/image-hero-left.png'
import manTexting from '../assets/images/desktop/image-man-texting.jpg'
import menInMeeting from '../assets/images/desktop/image-men-in-meeting.jpg'
import womanInVideocall from '../assets/images/desktop/image-woman-in-videocall.jpg'
import womenVideochatting from '../assets/images/desktop/image-women-videochatting.jpg'
import footerMobile from '../assets/images/mobile/image-footer.jpg'
import Button from '~/components/Button'
import Number from '~/components/Number'

export const meta: MetaFunction = () => {
  return [{ title: 'Meet Landing Page' }, { name: 'description', content: 'A Challenge from Frontend Mentor!' }]
}

export default function Index() {
  return (
    <main className="flex flex-col items-center">
      <img src={logo} alt="logo" className="my-12" />
      <div className="grid grid-cols-2 justify-items-center gap-9">
        <img src={heroLeft} alt="hero left" className="" />
        <img src={heroRight} alt="hero right" className="" />
        <div className="self col-span-2 p-6 text-center">
          <h1 className="text-[2.5rem] font-black leading-[2.75rem]">Group Chat for Everyone</h1>
          <p className="text-light mb-8 mt-6 font-medium leading-[1.625rem]">
            Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button className="bg-primary">
              Download <span className="text-primary-bright">v1.3</span>
            </Button>
            <Button className="bg-secondary my-4">What is it?</Button>
          </div>
        </div>
      </div>
      <Number className="mt-16">01</Number>
      <div className="mt-8 grid grid-cols-2 gap-6 p-6">
        <img src={womanInVideocall} alt="Woman in videocall" className="rounded-xl" />
        <img src={womenVideochatting} alt="Woman videochatting" className="rounded-xl" />
        <img src={menInMeeting} alt="Men in meeting" className="rounded-xl" />
        <img src={manTexting} alt="Man textign" className="rounded-xl" />
      </div>
      <div className="p-6 text-center">
        <h2 className="text-primary mb-6 font-black uppercase leading-[0.625rem] tracking-[0.25rem]">
          Built for modern use
        </h2>
        <h3 className="text-dark mb-8 text-[2rem] font-black leading-[2.25rem]">Smarter meetings, all in one place</h3>
        <p className="text-light font-medium leading-[1.625rem]">
          Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can
          join with invite-only team access, data encryption, and data export.
        </p>
      </div>
      <Number className="mt-16">02</Number>

      <div className="bg-primary/90 relative mb-4 w-full bg-opacity-10 p-6 text-center text-white">
        <div
          className="absolute bottom-0 left-0 right-0 top-0 z-[-1] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${footerMobile})` }}
        ></div>
        <h2 className="mt-16 text-[2rem] font-black leading-[2.25rem]">Experience more together</h2>
        <p className="text-very-light mt-6 text-lg font-medium leading-[1.625rem]">
          Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.
        </p>
        <Button className="bg-secondary mb-8 mt-8">
          Download <span className="text-secondary-bright">v1.3</span>
        </Button>
      </div>
    </main>
  )
}
