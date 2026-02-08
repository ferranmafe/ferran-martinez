
type Props = {
  children: React.ReactNode
}

export const Section = ({children}: Props) => {
  return (
    <div className="pt-32">{children}</div>
  )
}