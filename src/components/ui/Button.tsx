export interface ButtonProps {
  backgroundColor?: string;
  textColor?: string;
  children?: React.ReactNode;
  href?: string;
  padding?: string;
}

export const Button = ({
  backgroundColor = "bg-brand-sky",
  textColor = "text-white",
  children = "Iniciar Sesión",
  href = "#",
  padding = "px-5 py-2",
}: ButtonProps) => {
  return (
    <a
      href={href}
      className={`${backgroundColor} ${textColor} ${padding} tracking-tight rounded-sm font-semibold flex items-center justify-center font-rethink hover:opacity-70 transition-all duration-200 select-none`}
    >
      {children}
    </a>
  );
};
