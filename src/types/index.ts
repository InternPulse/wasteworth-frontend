

export interface LinkType {
    to: string;
    label: string;
    icon: IconType;
}

export interface MobileProps{
    links: LinkType[];
    isActive: (path: string) => boolean;
    setShowMobileMenu: (show: boolean) => void;
    activeClass: string;
    inactiveClass: string;
}


export interface DesktopProps{
    links: LinkType[];
    isActive: (path: string) => boolean
    activeClass: string;
    inactiveClass: string;
}

export interface MainHeaderProps{
    firstName: string,
    question: string,
    points: number,
    initial: string,
    user: string
}

export interface Tdata {
    id: string;
    quantity_kg: number;
    date: string;
    location: string;
    price: number;
    status: string;
}