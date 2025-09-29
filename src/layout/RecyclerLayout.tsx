import { Outlet } from "react-router-dom";

export default function RecyclerLayout() {
    return (
        <div className='flex'>
            <div className='h-full text-white'>
                <div className="">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}