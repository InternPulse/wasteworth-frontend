import { useState } from "react";
import useStore from "../../../store/store";

const BASE_URL = import.meta.env.VITE_BASE_URL1;

export function useProfileForm() {
  const { user, setUser, tokens } = useStore();

  const [formData, setFormData] = useState({
    firstName: user?.name?.split(" ")[1] || "",
    lastName: user?.name?.split(" ")[0] || "",
    email: user?.email || "",
    phone: user?.phone || "",
    location: user?.location || "",
    lat: 0,
    lng: 0,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setFormData((prev) => ({ ...prev, lat: latitude, lng: longitude }));
        setMessage("📍 Location fetched successfully!");
      },
      (err) => {
        console.error("Error getting location:", err);
        setMessage("❌ Failed to get location.");
      }
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    setMessage("");

    try {
      const body = {
        name: `${formData.lastName} ${formData.firstName}`.trim(),
        address_location: {
          lat: formData.lat,
          lng: formData.lng,
        },
      };

      const res = await fetch(`${BASE_URL}/api/v1/users/update-user/`, {
        method: "PATCH",
        headers: {
          Authorization: tokens?.access ? `Bearer ${tokens.access}` : "",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error(await res.text());

      const data = await res.json();

      setUser({
        ...user,
        name: data.name || body.name,
        location: formData.location,
      });

      setMessage("✅ Profile updated successfully!");
    } catch (err: any) {
      console.error(err);
      setMessage("❌ Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    handleGetLocation,
    loading,
    message,
  };
}
