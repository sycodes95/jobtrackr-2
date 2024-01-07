interface BackgroundProps {
  className?: string;
}

export default function Background ( { className} : BackgroundProps ) {
  return <div className={className}></div>
}