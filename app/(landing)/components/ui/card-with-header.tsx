type TCardWithHeaderProps = {
    title: string,
    children: React.ReactNode;
    className?: string
}

const CardWithHeader = ({title, children, className}: TCardWithHeaderProps) => {
  return (
    <div className={`bg-white ${className}`}>
        <div className="px-5 py-4 border-b border-gray-200">
            <h2 className="font-bold text-lg">{title}</h2>
        </div>
        {children}
    </div>
  )  
}

export default CardWithHeader;