function AuthContent({ children }:any) {
    return (
        <div className="mt-10 sm:mx-auto">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">

            {children}

        </div>
        </div>
    )
}

export default AuthContent;
