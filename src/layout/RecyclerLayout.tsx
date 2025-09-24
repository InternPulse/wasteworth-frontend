import { Outlet } from "react-router-dom";

export default function RecyclerLayout() {
    return (
        <div className='flex ml-400'>
            <div className='h-full text-white overflow-hidden'>
                <div className="">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}