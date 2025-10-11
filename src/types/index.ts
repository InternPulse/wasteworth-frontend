import type { ReactNode } from "react";
import { z } from "zod";
import type { IconType } from "react-icons/lib";
//sidebar linkType
export interface LinkType {
  to: string;
  label: string;
  icon: IconType;
}

// types/transaction.ts

export interface Transaction {
  transaction_id: string
  wallet_id: string
  user_name: string
  user_email: string
  transaction_type: string
  transaction_type_display: string
  amount: number | null
  points: number
  currency: string
  description: string
  reference: string
  payment_method: string
  payment_method_display: string
  status: string
  status_display: string
  metadata: Record<string, any> | null
  created_at: string
}

export interface TransactionResponse {
  success: boolean
  message: string
  count: number
  next: string | null
  previous: string | null
  results: Transaction[]
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
    _id: string; 
    id: string; 
    title: string | null;
    waste_type: string;
    quantity: number;
    reward_estimate: string;
    phone: string | null;
    status: string; 
    created_at: string; 
    pickup_location: string | {
        city: string;
        state: string;
        address: string;
    } | null; 
};

//myOffers table data
export interface MyOffersData {
  status: string;
  results: number;
  data: Array<{
    id: string;
    waste_type: string;
    quantity: number;
    status: 'pending' | 'accepted' | 'rejected' | string;
    reward_estimate: string;
    final_reward: string | null;
    collector_id_id: string | null;
    user_id_id: string;
    pickup_location: {
      city: string;
      state: string;
      address: string;
      coordinates: {
        latitude: number;
        longitude: number;
      };
    };
    created_at: string;
    updated_at: string;
  }>;
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
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}


//post form
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


//contact cards
export interface TContactDetails{
    id: number;
    icon: React.ReactNode;
    name: string;
    contact: string;
}
//Waste data
export interface Waste {
  collector_id_id: string;
  created_at: string;
  final_reward: string;
  id: string;
  image_url: string;
  phone: string;
  pickup_location: string;
  quantity: number;
  reward_estimate: string;
  status: string;
  title: string;
  updated_at: string;
  user_id_id: string;
  waste_type: string;
}


//recent listingProps
export interface TListing {
  created_at: string;
  id: string;
  image_url: string;
  pickup_location: { lat: string; lng: string } | string;
  quantity: number;
  reward_estimate: string;
  status: string;
  title: string;
  waste_type: string;
}