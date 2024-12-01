import { ReactElement,useState } from "react"
import { useGalleryStore } from "./Stores/GalleryStore"
import { IconArrowRight, IconArrowLeft, IconX } from "@tabler/icons"

export const OverlayGallery = ():ReactElement => {

    const [cur_index, setCurIndex] = useState(0)

    const images = useGalleryStore(state => state.images)
    const setImages = useGalleryStore((state) => state.setImages);

    return (

        <>

        {
            images &&
            <>
                <div className=" fixed w-[100vw] h-[100vh] bg-black z-[100] opacity-50">

                </div>

                <div className="fixed bg-white w-[80%] max-w-[90%] p-4 rounded-md z-[100] mx-auto left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 ">
                    <div className="grid grid-cols-[5%_auto_5%] w-full h-full text-xl">

                        <div className="flex items-center">
                            <button onClick={()=>{setCurIndex((cur_index-1+images.length)%images.length)}} className="mx-auto ">
                                <IconArrowLeft className="h-10 w-10 max-h-full max-w-full hover:scale-125 hover:text-[var(--bg-buttons)] text-black" />
                            </button>

                        </div>


                        <div className="w-full h-full">
                            <img src={`images/${images[cur_index]}`} alt="gallery" className="h-full object-contain rounded-md aspect-video mx-auto" />

                        </div>  


                        <div className="relative flex items-center">
                            <button onClick={()=>{setImages(undefined); setCurIndex(0)}} className=" absolute top-0 right-0">
                                <IconX className="h-10 w-10 max-h-full max-w-full  min-w-[10px] hover:scale-125 hover:text-[var(--bg-buttons)] text-black" />
                            </button>
                            <button onClick={()=>{setCurIndex((cur_index+1)%images.length)}} className="mx-auto">
                                <IconArrowRight className="h-10 w-10 max-h-full max-w-full hover:scale-125 hover:text-[var(--bg-buttons)] text-black" />
                            </button>
                        </div>

                    </div>
                    <div className="w-full text-gray-600 text-xl mb-2">
                        <span className="bg-gray-200 p-4 rounded-lg">Index {cur_index+1} / {images.length}</span>

                    </div>


                </div>

            </>
        }

        </>
    )
}