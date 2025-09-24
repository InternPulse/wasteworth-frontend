import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import type { MobileProps } from '../../../types';
import { assets } from '../../../assets/assets';



export default function Mobile({ links, isActive, setShowMobileMenu, activeClass, inactiveClass }: MobileProps) {


    return (
        <div className="fixed inset-0 z-999 min-h-screen backdrop-blur-md">
             <div className="bg-[#FFFFFF] min-h-screen fixed px-4 w-64 border-r border-gray-300 z-50">
                 {/* Close button */}
                <div className="flex justify-end px-4 pt-1">
                     <FaTimes
                         className="w-8 h-8 cursor-pointer text-[#006837]"
                         onClick={() => setShowMobileMenu(false)}
                     />
                 </div>
                
                <img src={assets.greenLogo} alt="waste_worth" width={60} className='mx-auto' />
                 
                 <ul className='flex flex-col mt-5 text-[14px] px-4 space-y-3'>
                     {links.map((link, index) => {
                         const Icon = link.icon;
                         return (
                            <Link
                                key={index}
                                to={link.to}
                                className={`flex items-center py-3 px-2 space-x-4 rounded-md ${isActive(link.to) ? activeClass : inactiveClass}`}
                                onClick={() => setShowMobileMenu(false)}
                            >
                                <Icon className="w-5 h-5" />
                                <span>{link.label}</span>
                            </Link>
                         );
                     })}
                 </ul>
             </div>
        </div>
    );
}