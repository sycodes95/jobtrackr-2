interface PageContainerProps {
  children: React.ReactNode;
}

export default function PageContainer ({children} : PageContainerProps) {
  return (
    <div className="flex justify-center w-full h-full max-w-7xl grow  ">
      {children}
    </div>
  )
}