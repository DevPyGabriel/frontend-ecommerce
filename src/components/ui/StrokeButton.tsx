export interface StrokeButtonProps {
  borderColor?: string;
  textColor?: string;
  children?: React.ReactNode;
  href?: string;
  padding?: string;
}

export const StrokeButton = ({
  borderColor = "ring-brand-sky",
  textColor = "text-brand-sky",
  children = "Iniciar Sesión",
  href = "#",
  padding= "px-5 py-2",
}: StrokeButtonProps) => {
  return (
    <a
      href={href}
      className={`${borderColor} ${textColor} ${padding} tracking-tight rounded-sm font-semibold flex items-center justify-center font-rethink ring-1 hover:opacity-70 transition-all duration-200`}
    >
      {children}
    </a>
  );
};
