type TButtonProps = {
    children: React.ReactNode;
    className?: string;
    variant?: 'primary' | 'dark' | 'ghost';
    size?: 'normal' | 'small';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, variant = 'primary', size = 'normal', ...props }: TButtonProps) => {
    const baseStyles = "inline-flex gap-2 duration-300 justify-center cursor-pointer hover:scale-105 items-center";
    const variants = {
        primary: 'bg-primary text-white hover:bg-primary/85',
        dark: 'bg-dark text-white hover:bg-dark/85',
        ghost: 'bg-transparent text-dark hover:bg-gray-100',
    };
    const sizes = {
        normal: 'px-4 py-2 sm:px-9 sm:py-4 sm:text-base text-[12px]',
        small: 'px-7 py-[10px] sm:text-base text-[12px]',
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button;