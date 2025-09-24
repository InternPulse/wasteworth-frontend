import { Link } from 'react-router-dom';
import type { DesktopProps } from '../../../types';
import { assets } from '../../../assets/assets';


export default function Desktop({ links, isActive, activeClass, inactiveClass }: DesktopProps) {
    
    return (
        <div className="hidden lg:block bg-[#FFFFFF] min-h-screen fixed w-60">
            <ul className='flex flex-col mt-5 text-[16px] px-4 space-y-3 font-semibold'>
                <img src={assets.greenLogo} alt="waste_worth" width={60} className='mx-auto'/>
                {links.map((link, index) => {
                    // Get the icon component from the link data
                    const Icon = link.icon; 
                    return (
                        <Link
                            key={index}
                            to={link.to}
                            className={`flex items-center py-3 px-2 space-x-4 rounded-md ${isActive(link.to) ? activeClass : inactiveClass}`}
                        >
                            <Icon className="w-5 h-5" />
                            <span>{link.label}</span>
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
};