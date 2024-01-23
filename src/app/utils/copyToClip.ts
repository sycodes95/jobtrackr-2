import { toast } from "sonner"

export const copyToClip = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    toast("Copied to clipboard!", {
      description: text
    })
    //
  } catch (err) {
    toast("Sorry, there was an issue copying to clipboard... It's not your fault, try again!", {
      description: text
    })
    console.error('Error copying text to clipboard', err);
  }
}