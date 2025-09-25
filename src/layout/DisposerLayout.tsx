import { Outlet } from "react-router-dom";

export default function DisposerLayout() {
    return (
        <div className='flex'>
            <div className='grow h-full lg:h-full text-white'>
                <div className="">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}