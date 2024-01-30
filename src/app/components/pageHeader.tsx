interface PageHeaderProps {
  children?: React.ReactNode;
  title: string;
  description?: string;
}

export default function PageHeader ( { children, title, description } : PageHeaderProps ) {
  return (
    <h1 className="flex flex-col gap-2">
      <span className="font-inter-tight-display text-2xl text-primary flex gap-2 items-center">
        {
        children && 
        children
        }
        {title}
      </span>
      {
      description && 
      <span className="text-xs text-primary">
        {description}
      </span>
      }
    </h1>
  )
}