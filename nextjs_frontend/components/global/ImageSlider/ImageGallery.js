import Image from 'next/image'



// https://betterprogramming.pub/react-hooks-slider-how-to-build-an-image-slider-with-smooth-transitions-automatic-resizing-8a99859ac471

export default function ImageGallery(what) {
    console.log(`props: ${what}`)
    return (
        <div className="w-full border-2 relative">
            <Image
                className='w-full h-full object-cover'
                src="/../public/assets/wallpaper_header.webp"
                alt="Picture of the author"
                width={2048}
                height={2048}
            />
            <div id='image-gallery-overlay' className="absolute top-0 w-full h-full flex justify-between">
                <button className="bg-slate-100 h-16 w-16 my-auto">-1</button>
                <button className="bg-slate-100 h-16 w-16 my-auto">+1</button>

            </div>
        </div>)
}