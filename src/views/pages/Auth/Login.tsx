import { NavLink, Navigate, useNavigate } from "react-router-dom";

import { AuthCard, AuthFooter, AuthForm, AuthHeader } from "./_components";

import Input from "atoms/Input";
import Button from "atoms/Button/Button";
import { configPages } from "config/configPages";
import useAuth from "context/AuthContext/useAuth";

function Login() {
    const navigate = useNavigate();
    const { setUser } = useAuth();

    function handlerLogin() {
        setUser({
            name: "Hi",
        })
        
        navigate(configPages.DASHBOARD.path);
    }

    return (
       <>
            <AuthHeader title="Welcome <span class='text-[#08A593]'>Back</span>" description="Glad to see you, Again!" />

            <AuthCard>
                <AuthForm>
                    <form action="#" method="POST">
                    <div className="space-y-6">
                        <div>
                            <Input placeholder="Your email" id="email" name="email" type="email" autoComplete="email" required />
                        </div>
                        <div>
                            <Input placeholder="Your password" id="password" name="password" type="password" autoComplete="password" required />
                        </div>
                    </div>
                    </form>
                </AuthForm>

                <Button onClick={() => handlerLogin()} type="submit" size="lg" shadow className="block w-full bg-[#020100]">Log In</Button>
            </AuthCard>


            <AuthFooter>
                Don't have an account yet?{' '}
                <NavLink to={configPages.AUTH.path + configPages.REGISTER.path} className="font-semibold leading-6 text-[#08A593]">
                    Sign Up
                </NavLink>
            </AuthFooter>
        </>
    )
}

export default Login;

