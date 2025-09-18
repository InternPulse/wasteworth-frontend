import { create } from "zustand";

interface Store {
  email: string;
  setEmail: (email: string) => void;
}
const useStore = create<Store>((set) => ({
  email: "",
  setEmail: (email) => set(() => ({ email })),
}));
export default useStore;
/* {
    "message": "User created successfully",
    "user": {
        "userId": "0d6de97d-3c22-4283-a29c-dcff680b74f4",
        "name": null,
        "email": "tofexzyno@gmail.com",
        "phone": null,
        "role": "recycler",
        "location": null,
        "walletBalance": "0.00",
        "referralCode": "GWB4ZFT7",
        "createdAt": "2025-09-18T06:37:08.116690Z"
    },
    "tokens": {
        "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc1ODc4MjIzMSwiaWF0IjoxNzU4MTc3NDMxLCJqdGkiOiI2YmMyYmEzMDlkMTk0YTg5OWFhODA0ODRkNDY1MDk3OSIsInVzZXJfaWQiOiIwZDZkZTk3ZC0zYzIyLTQyODMtYTI5Yy1kY2ZmNjgwYjc0ZjQifQ.l7xe_TV944lOEokIH0WtrcVmJypfWMFHAyRFLK1JbEE",
        "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzU4MTgxMDMxLCJpYXQiOjE3NTgxNzc0MzEsImp0aSI6ImY4MzE3MzFmZmM3YTRlYjE5ZjFhYzc2NDgwOTMyMTk5IiwidXNlcl9pZCI6IjBkNmRlOTdkLTNjMjItNDI4My1hMjljLWRjZmY2ODBiNzRmNCJ9.33R1yCX_oSSqBia_PoFkxepmPvwNO0xmMzFRPwHVL7k"
    }
} */