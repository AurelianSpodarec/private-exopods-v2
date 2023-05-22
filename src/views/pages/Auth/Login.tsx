import { NavLink } from "react-router-dom";

import { AuthCard, AuthFooter, AuthHeader, AuthSocials } from "./_components";
import Input from "atoms/Input";


function Login() {
    return (
       <>
            <AuthHeader title="Welcome Back" description="Glad to see you, Again!" />

            <AuthCard>
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <Input placeholder="Enter your email" id="email" name="email" type="email" autoComplete="email" required />
                    </div>
                    <div>
                        <Input placeholder="Enter your password" id="password" name="password" type="password" required />
                    </div>
               
                    <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Create account
                    </button>
                    </div>
                </form>


            </AuthCard>


            <AuthFooter>

                Don't have an account yet?{' '}
                <NavLink to="/auth/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    Sign Up
                </NavLink>

            </AuthFooter>
        </>
    )
}

export default Login;

