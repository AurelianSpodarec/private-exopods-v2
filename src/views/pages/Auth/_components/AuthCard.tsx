function AuthContent({ children }:any) {
    return (
        <div className="mt-10 sm:mx-auto w-full">
        <div className="bg-white py-12 px-40 shadow sm:rounded-lg">

            {children}

        </div>
        </div>
    )
}

export default AuthContent;
