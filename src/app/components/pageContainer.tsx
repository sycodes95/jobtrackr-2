interface PageContainerProps {
  children: React.ReactNode;
}

export default function PageContainer ({children} : PageContainerProps) {
  return (
    <div className="flex justify-center bg-background w-full h-full max-w-7xl ">
      {children}
    </div>
  )
}