function Card({ title, children, className }:CardProps) {
    return (
        <div className={`${className} rounded-2xl border border-stroke border-gray-100 bg-[#F5F5F7] p-6 mb-6`}>
            {children ? children : title}
        </div>
    )
}

export default Card;

interface CardProps {
    title?: string;
    children?: React.ReactNode;
    className?: string;
}
