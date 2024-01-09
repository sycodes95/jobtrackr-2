interface FormItemProps {
  children?: React.ReactNode;
}

export default function FormItem ({children} : FormItemProps) {
  return (
    <div className="flex flex-col gap-2 ">
      {children}
    </div>
  )
}