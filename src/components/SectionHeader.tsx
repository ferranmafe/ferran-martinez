type Props = {
  children: React.ReactNode;
};

export const SectionHeader = ({ children }: Props) => {
  return (
    <div className="flex items-center gap-4 w-full">
      <div className="text-3xl px-4 py-2 border-2 rounded-2xl bg-white font-bold border-black w-fit">
        {children}
      </div>
      <div className="h-[2px] flex-1 bg-black" aria-hidden="true" />
    </div>
  );
};
