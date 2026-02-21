import type { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  width?: number | string;
  heigth?: number | string;
}

export const SearchIcon = ({
  color = "currentColor",
  size = 24,
  opacity = 0.3,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.17781 10.3556C3.73068 10.3556 2.50606 9.8543 1.50395 8.85166C0.50185 7.84903 0.000531479 6.62441 4.21474e-07 5.17781C-0.000530636 3.73121 0.500787 2.50659 1.50395 1.50395C2.50712 0.501318 3.73174 0 5.17781 0C6.62388 0 7.84876 0.501318 8.85246 1.50395C9.85616 2.50659 10.3572 3.73121 10.3556 5.17781C10.3556 5.76197 10.2627 6.31294 10.0768 6.83073C9.89094 7.34851 9.63869 7.80654 9.32006 8.20484L13.7809 12.6657C13.927 12.8118 14 12.9976 14 13.2233C14 13.449 13.927 13.6349 13.7809 13.7809C13.6349 13.927 13.449 14 13.2233 14C12.9976 14 12.8118 13.927 12.6657 13.7809L8.20484 9.32006C7.80654 9.63869 7.34851 9.89094 6.83073 10.0768C6.31294 10.2627 5.76197 10.3556 5.17781 10.3556ZM5.17781 8.76245C6.17354 8.76245 7.02005 8.41407 7.71733 7.71733C8.4146 7.02058 8.76298 6.17407 8.76245 5.17781C8.76192 4.18155 8.41354 3.33531 7.71733 2.63909C7.02111 1.94287 6.1746 1.59423 5.17781 1.59317C4.18102 1.59211 3.33478 1.94075 2.63909 2.63909C1.9434 3.33743 1.59477 4.18367 1.59317 5.17781C1.59158 6.17195 1.94022 7.01845 2.63909 7.71733C3.33796 8.4162 4.1842 8.76457 5.17781 8.76245Z"
      fill={color}
      fill-opacity={opacity}
    />
  </svg>
);

export const ShopCartIcon = ({
  stroke = "2",
  color = "currentColor",
  size = 24,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.6001 11.739C3.06423 11.739 3.50935 11.9029 3.83753 12.1946C4.16572 12.4863 4.3501 12.882 4.3501 13.2945C4.3501 13.7071 4.16572 14.1028 3.83753 14.3945C3.50935 14.6862 3.06423 14.8501 2.6001 14.8501C2.13597 14.8501 1.69085 14.6862 1.36266 14.3945C1.03447 14.1028 0.850098 13.7071 0.850098 13.2945C0.850098 12.882 1.03447 12.4863 1.36266 12.1946C1.69085 11.9029 2.13597 11.739 2.6001 11.739ZM2.6001 11.739H12.2251M2.6001 11.739V0.850098H0.850098M12.2251 11.739C12.6892 11.739 13.1343 11.9029 13.4625 12.1946C13.7907 12.4863 13.9751 12.882 13.9751 13.2945C13.9751 13.7071 13.7907 14.1028 13.4625 14.3945C13.1343 14.6862 12.6892 14.8501 12.2251 14.8501C11.761 14.8501 11.3158 14.6862 10.9877 14.3945C10.6595 14.1028 10.4751 13.7071 10.4751 13.2945C10.4751 12.882 10.6595 12.4863 10.9877 12.1946C11.3158 11.9029 11.761 11.739 12.2251 11.739ZM2.6001 2.40565L14.8501 3.18343L13.9751 8.62788H2.6001"
      stroke={color}
      stroke-width={stroke}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const MenuBtnIcon = ({
  stroke = "2",
  color = "currentColor",
  size = 24,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    stroke-width={stroke}
    stroke-linecap="round"
    stroke-linejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 8l16 0" />
    <path d="M4 16l16 0" />
  </svg>
);

export const ArrowIcon = ({
  opacity = "1",
  color = "currentColor",
  width = 24,
  height = 24,
  ...props
}: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 8 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.7158 0.295798C6.62284 0.20207 6.51223 0.127676 6.39038 0.0769072C6.26852 0.0261385 6.13781 0 6.0058 0C5.87379 0 5.74308 0.0261385 5.62122 0.0769072C5.49936 0.127676 5.38876 0.20207 5.2958 0.295798L0.295798 5.2958C0.20207 5.38876 0.127676 5.49936 0.0769069 5.62122C0.0261382 5.74308 0 5.87379 0 6.0058C0 6.13781 0.0261382 6.26852 0.0769069 6.39038C0.127676 6.51223 0.20207 6.62284 0.295798 6.7158L5.2958 11.7158C5.38876 11.8095 5.49936 11.8839 5.62122 11.9347C5.74308 11.9855 5.87379 12.0116 6.0058 12.0116C6.13781 12.0116 6.26852 11.9855 6.39038 11.9347C6.51223 11.8839 6.62284 11.8095 6.7158 11.7158C6.80953 11.6228 6.88392 11.5122 6.93469 11.3904C6.98546 11.2685 7.0116 11.1378 7.0116 11.0058C7.0116 10.8738 6.98546 10.7431 6.93469 10.6212C6.88392 10.4994 6.80953 10.3888 6.7158 10.2958L2.4158 6.0058L6.7158 1.7158C6.80953 1.62284 6.88392 1.51223 6.93469 1.39038C6.98546 1.26852 7.0116 1.13781 7.0116 1.0058C7.0116 0.873786 6.98546 0.743081 6.93469 0.621222C6.88392 0.499362 6.80953 0.388761 6.7158 0.295798Z"
      fill={color}
      fill-opacity={opacity}
    />
  </svg>
);

export const ChatIcon = ({
  opacity = "1",
  color = "currentColor",
  size = 24,
  height = 24,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-message-circle"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
  </svg>
);

export const InstagramIcon = ({
  size = 24,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4l0 -8" />
    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
    <path d="M16.5 7.5v.01" />
  </svg>
);

export const WhatsappIcon = ({
  color = "currentColor",
  size = 24,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
  </svg>
);

export const ArrowLabel = ({ color = "currentColor", ...props }: IconProps) => (
  <svg
    width="14"
    height="10"
    viewBox="0 0 14 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.75 4.77295C0.335786 4.77295 0 5.10874 0 5.52295C0 5.93716 0.335786 6.27295 0.75 6.27295V5.52295V4.77295ZM13.2803 6.05328C13.5732 5.76039 13.5732 5.28551 13.2803 4.99262L8.50736 0.219648C8.21447 -0.073245 7.73959 -0.073245 7.4467 0.219648C7.15381 0.512542 7.15381 0.987415 7.4467 1.28031L11.6893 5.52295L7.4467 9.76559C7.15381 10.0585 7.15381 10.5334 7.4467 10.8263C7.73959 11.1191 8.21447 11.1191 8.50736 10.8263L13.2803 6.05328ZM0.75 5.52295V6.27295H12.75V5.52295V4.77295H0.75V5.52295Z"
      fill={color}
    />
  </svg>
);

export const Icons = {
  Shopcart: ShopCartIcon,
  Search: SearchIcon,
  Menu: MenuBtnIcon,
  Arrow: ArrowIcon,
  ArrowLabel: ArrowLabel,
  Chat: ChatIcon,
  Instagram: InstagramIcon,
  Whatsapp: WhatsappIcon,
} as const;
