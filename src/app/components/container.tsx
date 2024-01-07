interface ContainerProps {
  children: React.ReactNode;
  type?: string;
}

export default function Container ( { children, type } : ContainerProps ) {
  const containerTypeStyle: { [key: string] : string } = {
    'header' : 'border-b border-zinc-300 sticky top-0'
  }
  return (
    <div className={`flex justify-center w-full h-full bg-background ${type && containerTypeStyle[`${type}`]}`}>
      {children}
    </div>
  )
}