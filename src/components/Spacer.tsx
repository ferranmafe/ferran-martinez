type Props = {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  children?: React.ReactNode;
};

export const Spacer = ({ top, bottom, left, right, children }: Props) => {
  return (
    <div
      style={{
        marginTop: top ? `${top * 4}px` : undefined,
        marginBottom: bottom ? `${bottom * 4}px` : undefined,
        marginLeft: left ? `${left * 4}px` : undefined,
        marginRight: right ? `${right * 4}px` : undefined,
      }}
    >
      {children}
    </div>
  );
};
