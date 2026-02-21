export interface PillProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
}

export const Pill = ({
  children = "Pill",
  backgroundColor = "bg-white",
  textColor = "text-black",
}: PillProps) => {
  return (
    <a
      className={`py-1 xs:py-1.5 px-4 rounded-full font-geist tracking-[-0.02em] ${backgroundColor} ${textColor} hover:ring-${textColor} hover:ring transition-all duration-200`}
      href=""
    >
      {children}
    </a>
  );
};
