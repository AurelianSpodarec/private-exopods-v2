function AuthContent({ children }:any) {
    return (
        <div className="sm:mx-auto w-full">
        <div className="bg-white pt-10 pb-8 px-8 lg:px-20 xl:px-36 sm:rounded-lg">

            {children}

        </div>
        </div>
    )
}

export default AuthContent;
