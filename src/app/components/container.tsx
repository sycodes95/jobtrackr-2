interface ContainerProps {
  children?: React.ReactNode;
  type?: string;
}

export default function Container ( { children, type = 'default'} : ContainerProps ) {
  const containerTypeStyle: { [key: string] : string } = {
    'header' : ' sticky top-0 h-fit w-full border-b border-b-border border-t-2 border-t-coral z-50',
    'footer' : 'h-fit w-full border-t border-t-border bg-jet',
    'default' : 'h-full w-full'
  }
  return (
    <div className={`flex justify-center bg-background ${type && containerTypeStyle[`${type}`]}`}>
      {children}
    </div>
  )
}