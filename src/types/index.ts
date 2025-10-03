import type { ReactNode } from "react";
import { z } from "zod";
import type { IconType } from "react-icons/lib";
//sidebar linkType
export interface LinkType {
  to: string;
  label: string;
  icon: IconType;
}

//mobile sidebar
export interface MobileProps {
  links: LinkType[];
  isActive: (path: string) => boolean;
  setShowMobileMenu: (show: boolean) => void;
  activeClass: string;
  inactiveClass: string;
}

//desktop sidebar
export interface DesktopProps {
  links: LinkType[];
  isActive: (path: string) => boolean;
  activeClass: string;
  inactiveClass: string;
}

//Main Header Prop Types...dashboard
export interface MainHeaderProps {
  firstName: string;
  question: string;
  points: number;
  initial: string;
  user: string;
}

//Sub Header Prop Types...user account items
export interface SubHeaderProps {
  title: string;
  points: number;
  initial: string;
  user: string;
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
  last_name: z.string().min(1, "Last Name is Required"),
  first_name: z.string().min(1, "First Name is Required"),
  email: z.string().min(1).email(),
  phone: z.string().min(1, "Mobile Number is Required"),
  gender: z.enum(["male", "female"]),
  id: z.string().min(1, "ID (NIN) is Required"),
  address: z.string().min(1, "Address is Required"),
});

//inferring types form the above schema for type validation
export type ProfileSchema = z.infer<typeof ProfileSchema>;

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const PostSchema = z.object({
  title: z.string().min(1, "Post Title is required"),
  waste_type: z.string().min(1, "Waste type is required"),
  quantity: z.string().min(1, "Waste quantity is required"),
  quantity_type: z.enum(["kg", "k", "count"]),
  price: z.string().min(1, "Price is required"),
  photo: z.instanceof(File, { message: "Please select an image file." }),
  location: z.string().min(1, "Location is required"),
  preferred_contact: z.enum(["Call", "whatsapp"]),
  contact: z.string().min(1, "Phone is required"),
});

export type PostSchema = z.infer<typeof PostSchema>;


export interface UserData {
  tokens: {
    access_token: string;
    refresh_token: string;
  };
}