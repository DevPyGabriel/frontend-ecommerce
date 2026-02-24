export interface TagProps {
  props?: string;
  available?: boolean;
}

export const Tag = ({
  available = true,
  props
}: TagProps) => {

  return (
    <a
      className={`
        py-0.5 sm:py-1 px-2 sm:px-3 rounded-sm w-fit ${props} flex items-center h-fit
        font-geist tracking-[-0.02em] 
        ${available ? "bg-green-700/20 text-green-500" : "bg-red-700/20 text-red-500"}
      `}
      href=""
    >
      <span>{available ? "Disponible" : "Agotado"}</span>
    </a>
  );
};
