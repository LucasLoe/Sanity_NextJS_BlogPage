import Image from 'next/image'
export default function Wallpaper() {
  return (
    <Image
        className='w-full h-48 top-0 object-cover absolute border-black border-b-[12px] md:visible'
        src="/../public/assets/wallpaper_header.webp"
        alt="Picture of the author"
        width={1500}
        height={1500}
        priority
    />
  )
}