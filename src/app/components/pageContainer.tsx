interface PageContainerProps {
  children?: React.ReactNode;
}

export default function PageContainer ({children} : PageContainerProps) {
  return (
    <div className="flex justify-center w-full h-full max-w-7xl grow p-4 md:p-8 ">
      {children}
    </div>
  )
}