interface HeaderContainer {
  children?: React.ReactNode;
  className?: string;
}

export default function HeaderContainer ( {children, className} : HeaderContainer ) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}