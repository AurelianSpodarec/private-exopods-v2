import { NavLink } from "react-router-dom";

import { AuthCard, AuthFooter, AuthHeader, AuthSocials } from "./_components";
import Input from "atoms/Input";
import Button from "atoms/Button/Button";


function Login() {
    return (
       <>
            <AuthHeader title="Welcome Back" description="Glad to see you, Again!" />

            <AuthCard>
                <form action="#" method="POST">
                    <div className="space-y-6">
                        <div>
                            <Input placeholder="Enter your email" id="email" name="email" type="email" autoComplete="email" required />
                        </div>
                        <div>
                            <Input placeholder="Enter your password" id="password" name="password" type="password" required />
                        </div>
                    </div>
               
                    <div className="pt-16">
                    <Button type="submit" size="lg" shadow className="block w-full bg-[#020100]">Log In</Button>
                    </div>
                </form>


            </AuthCard>


            <AuthFooter>

                Don't have an account yet?{' '}
                <NavLink to="/auth/register" className="font-semibold leading-6 text-[#08A593]">
                    Sign Up
                </NavLink>

            </AuthFooter>
        </>
    )
}

export default Login;

