import LoginPage from "./pages/login";
import AuthWrapper from "./components/wrapper";
import Register from "./components/register_wrapper";
import StudentRegistrationForm from "./pages/register_student";
import EditorRegistrationForm from "./pages/register_editor";
import ClientRegistrationForm from "./pages/register_client";
import EmailVerification from "./pages/email_verification";
import ForgotPassword from "./pages/forgot_password";
import { useAuthContext, AuthProvider } from "./contexts/authContext";

export {
    LoginPage,
    AuthWrapper,
    Register,
    StudentRegistrationForm,
    EditorRegistrationForm,
    ClientRegistrationForm,
    EmailVerification,
    ForgotPassword,
    useAuthContext,
    AuthProvider,
}