type Props = {
  children: React.ReactNode
}

export const SectionHeader = ({children}: Props) => {
  return (
    <div className="text-3xl px-4 py-2 border-2 rounded-2xl bg-white font-bold border-black w-fit">
      {children}
    </div>
  )
}