import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom"; 


type ForgotPasswordForm = { email: string }
type ResetPasswordForm = { email: string, otp: string, newPassword: string, confirmPassword: string }

const useForgotPassword = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [otp, setOtp] = useState<number | null>(null);
    const navigate = useNavigate();

    const handleForgotPassword = async ({ email }: ForgotPasswordForm) => {
        setLoading(true);
        setError(null);
        try {
           const response = await axios.post("https://wasteworth-backend-django.onrender.com/api/v1/users/forgotPassword/", {
                email
            });
            console.log("OTP sent successfully:", response.data);
            navigate("/otp-verification");
            alert("Password reset OTP sent successfully!");
        } catch (error) {
            setError("Failed to send OTP");
            console.error("Failed to send OTP:", error);
        } finally {
            setLoading(false);
        }
    };

    const handlePasswordReset = async (data: ResetPasswordForm) => {
        setLoading(true);
        setError(null);
        try {
            const response =await axios.post("https://wasteworth-backend-django.onrender.com/api/v1/users/resetPassword/", {
                email: data.email, otp: String(data.otp).trim(), new_password: data.newPassword, confirm_password: data.confirmPassword
            });
            // Handle successful password reset
            console.log("Password reset successful:", response.data);
            navigate("/login");
            alert("Password reset successful!");
        } catch(error) {
            setError("Failed to reset password");
            console.error("Failed to reset password:", error);
        } finally {
            setLoading(false);
        }
    }

    const clearError = () => setError(null);

  return { handleForgotPassword, handlePasswordReset, loading, error, clearError, otp , setOtp}
}

export default useForgotPassword

