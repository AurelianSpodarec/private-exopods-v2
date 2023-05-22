import { NavLink } from "react-router-dom";

import { AuthCard, AuthFooter, AuthHeader, AuthSocials } from "./_components";
import Input from "atoms/Input";

function Register() {
    return (
        <>
            <AuthHeader title="Sign in to your account" />

            <AuthCard>
                <form className="space-y-6" action="#" method="POST">
                    <div className="grid grid-cols-2 gap-4">
                        <Input placeholder="First name" id="firstName" name="lastName" type="text"  />
                        <Input placeholder="Last name" id="lastName" name="lastName" type="text"/>
                    </div>
                    <div>
                        <Input placeholder="Enter your email" id="email" name="email" type="email" autoComplete="email" required />
                    </div>
                    <div>
                        <Input placeholder="Enter your password" id="password" name="password" type="password" required />
                    </div>
                    <div>
                        <Input placeholder="Confirm your password" id="confirmPassword" name="configmPassword" type="password" required />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-900">
                            Remember me
                            </label>
                        </div>

                        <div className="text-sm leading-6">
                            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Forgot password?
                            </a>
                        </div>
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

                <AuthSocials />

            </AuthCard>


            <AuthFooter>
            Already have an account?{' '}
            <NavLink to="/auth/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Log in
            </NavLink>

            </AuthFooter>
        </>
    )
}

export default Register;
