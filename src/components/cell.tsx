import clsx from "clsx";

interface Props extends React.PropsWithChildren {
  onClick?: any;
  key?: any;
  className?: string;
}

const Cell: React.FC<Props> = ({ onClick, children, className }) => {
  return (
    <div className={className}>
      {/* @ts-ignore */}
      {onClick ? (
        <button onClick={onClick}>{children}</button>
      ) : (
        <div
          className={clsx(
            "h-12 flex items-center justify-center border-b border-r hover:font-bold"
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Cell;
