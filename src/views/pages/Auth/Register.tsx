import { Link, NavLink } from "react-router-dom";

import { AuthCard, AuthFooter, AuthHeader, AuthSocials } from "./_components";
import Input from "atoms/Input";
import Button from "atoms/Button/Button";


function Register() {
    return (
       <>
            <AuthHeader title="Create Your <span class='text-[#08A593]'>Account</span>" />

            <AuthCard>
                <form action="#" method="POST">
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Input placeholder="First Name" id="firstName" name="firstName" type="text" required />
                            </div>
                            <div>
                                <Input placeholder="Last Name" id="lastName" name="lastName" type="text" required />
                            </div>
                        </div>
                        <div>
                            <Input placeholder="Enter your email" id="email" name="email" type="email" autoComplete="email" required />
                        </div>
                        <div>
                            <Input placeholder="Enter your password" id="password" name="password" type="password" required />
                        </div>
                        <div>
                            <Input placeholder="Confirm your password" id="confirmPassword" name="confirmPassword" type="password" required />
                        </div>
                    </div>

                    <div className="mt-4">
                        Creating an account means you’re okay with our <Link to="/" className="text-[#1A73E8]">Terms of Service</Link>, <Link to="/" className="text-[#1A73E8]">Privacy Policy</Link>, and our default <Link to="/" className="text-[#1A73E8]">Notification Settings</Link>.
                    </div>
               
                    <div className="pt-16">
                        <Button type="submit" size="lg" shadow className="block w-full bg-[#020100]">Create account</Button>
                    </div>
                </form>


            </AuthCard>


            <AuthFooter>

                Already have an account{' '}
                <NavLink to="/auth/register" className="font-semibold leading-6 text-[#08A593]">
                    Log in
                </NavLink>

            </AuthFooter>
        </>
    )
}

export default Register;

