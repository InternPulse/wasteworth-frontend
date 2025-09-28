import { z } from 'zod'

//sidebar linkType
export interface LinkType {
    to: string;
    label: string;
    icon: IconType;
}

//mobile sidebar
export interface MobileProps{
    links: LinkType[];
    isActive: (path: string) => boolean;
    setShowMobileMenu: (show: boolean) => void;
    activeClass: string;
    inactiveClass: string;
}

//desktop sidebar
export interface DesktopProps{
    links: LinkType[];
    isActive: (path: string) => boolean
    activeClass: string;
    inactiveClass: string;
}

//Main Header Prop Types...dashboard
export interface MainHeaderProps{
    firstName: string,
    question: string,
    points: number,
    initial: string,
    user: string
}

//Sub Header Prop Types...user account items
export interface SubHeaderProps{
    title: string,
    points: number,
    initial: string,
    user: string
}

//Recycler Recent Offer Table data
export interface Tdata {
    id: string;
    quantity_kg: number;
    date: string;
    location: string;
    price: number;
    status: string;
}




//valiadtion schema for recycler
export const ProfileSchema = z.object({
    last_name: z.string().min(1, 'Last Name is Required'),
    first_name: z.string().min(1, 'First Name is Required'),
    email: z.string().min(1).email(),
    phone: z.string().min(1, 'Mobile Number is Required'),
    gender: z.enum(['male', 'female']),
    id: z.string().min(1, 'ID (NIN) is Required'),
    address: z.string().min(1, 'Address is Required')
})

//inferring types form the above schema for type validation
export type ProfileSchema = z.infer<typeof ProfileSchema>