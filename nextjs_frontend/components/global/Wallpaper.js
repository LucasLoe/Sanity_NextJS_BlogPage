import Image from 'next/image'
export default function Wallpaper() {
  return (
    <Image
        className='w-full h-48 top-0 object-cover absolute border-black border-b-[6px] md:visible'
        src="/../public/assets/wallpaper_header.jpg"
        alt="Picture of the author"
        width={1600}
        height={700}
        priority
    />
  )
}