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

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

const fileSchema = z
  .instanceof(FileList, { message: "An image file is required." })
  .refine(
    (fileList) => fileList.length > 0, // Check for file existence on the list
    "An image file is required."
  )
  .transform((fileList) => fileList[0]) // Transform to get the single File object
  .refine(
    (file) => file.size <= MAX_FILE_SIZE, // Refine the size of the single File
    `Max image size is 5MB.`
  )
  .refine(
    (file) => ACCEPTED_IMAGE_TYPES.includes(file.type), // Refine the type of the single File
    "Only .jpg, .jpeg, and .png formats are supported."
);

  
export const PostSchema = z.object({
  title: z.string().min(1, "Post Title is required"),
  waste_type: z.string().min(1, "Waste type is required"),
  quantity: z.number().min(1, "Waste quantity is required"),
  reward_estimate: z.string().min(1, "Price is required"),
  image_url: fileSchema,
  pickup_location: z.string().min(1, "Location is required"),
  phone: z.string().min(1, "Phone is required"),
});

export type PostSchema = z.infer<typeof PostSchema>;


export interface UserData {
  tokens: {
    access: string;
    refresh_token: string;
  };
}