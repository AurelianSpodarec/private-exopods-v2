import logo from './../../../../assets/images/logo.png';

function AuthHeader({ title, description }:any) {
    return (
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
            className="mx-auto h-12 mb-2 w-auto"
            src={logo}
            alt="Your Company"
        />
        <div className="text-center">
            <h2 className="font-bold text-4xl text-[#020100]">
                {title}
            </h2>
            {description && <p className="text-[#667085] text-sm">{description}</p>}
        </div>
    </div>
    )
}

export default AuthHeader;
