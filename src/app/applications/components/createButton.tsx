import { Button } from "@/components/ui/button"

export default function CreateButton () {
  return (
    <Button className="p-0" variant={`ghost`}>
      <span className="p-2 border font-bold rounded-lg border-primary text-sm text-primary">Create New +</span>
    </Button>
  )
}