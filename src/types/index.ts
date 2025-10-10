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
  id: string;
  quantity: number;
  created_at: string;
  pickup_location: string;
  reward_estimate: number;
  status: string;
}

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
    access: string;
    refresh_token: string;
  };
}
