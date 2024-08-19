import { ReactNode, useId } from "react";

interface ISectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  size?: "clean" | "xs" | "sm" | "md" | "lg";
  colors?: "default" | "brand";
}

function Section({ id, className, style, children, color = "default", size = "md" }: ISectionProps) {
  let useID = useId()

  const colors:any = {
    default: "bg-white",
    brand: "bg-[#8f4764]",
  }

  const sizes = {
    clean: "",
    xs: "py-8",
    sm: "py-16",
    md: "py-20",
    lg: "py-24",
    xl: "py-40"
  };

  return (
    <section aria-labelledby={useID} id={id} className={`${className ? className : ""} ${sizes[size]} ${colors[color]} relative`} style={style}>
      {children}
    </section>
  )
}

export default Section;
