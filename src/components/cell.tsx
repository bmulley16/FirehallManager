import clsx from "clsx";

interface Props extends React.PropsWithChildren {
  onClick?: any;
}

const Cell: React.FC<Props> = ({ onClick, children }) => {
  return (
    <div
      className={clsx(
        "h-12 flex items-center justify-center border-b border-r hover:font-bold"
      )}
    >
      {/* @ts-ignore */}
      {onClick ? (
        <button className="h-full w-full" onClick={onClick}>
          {children}
        </button>
      ) : (
        { children }
      )}
    </div>
  );
};

export default Cell;
