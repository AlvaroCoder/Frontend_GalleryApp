import { BrowserRouter } from "react-router-dom";
import UserContext from "../Hooks/UserHook";
import App from "./AppRoutes";
import { GoogleOAuthProvider } from '@react-oauth/google';


export default function MainRoute() {
    return (
        <BrowserRouter>
            <GoogleOAuthProvider clientId="472482666166-0dcm0n5tdvgljnpbrf9podns31ie8eeb.apps.googleusercontent.com">
                <UserContext>
                    <App/>
                </UserContext>
            </GoogleOAuthProvider>
        </BrowserRouter>
        )
}