import { Outlet } from 'react-router-dom'
export default function RootLayout() {
    
    return (
        <div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}