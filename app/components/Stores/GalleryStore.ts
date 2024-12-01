import {create} from "zustand";

export interface GalleryStore {
    images : string[] | undefined;
    setImages: (images: string[] | undefined) => void;
}

export const useGalleryStore = create<GalleryStore>((set) => ({
    images : undefined,
    setImages : (images: string[] | undefined) => set(()=>({
        images : images
      }))

}));