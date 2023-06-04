//skelton loading for user albums
import classNames from "classnames";

function Skeleton({ times, className }) {
  const outerClassNames = classNames(
    "relative",
    "overflow-hidden",
    "bg-gray-200",
    "rounded",
    "mb-2.5",
    className //pass in height and width of boxes
  );
  const innerClassNames = classNames(
    "animate-shimmer",
    "absolute",
    "inset-0",
    "-translate-x-full", //- indicates move back left
    "bg-gradient-to-r",
    "from-gray-200",
    "via-white",
    "to-gray-200"
  );
  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i} className={outerClassNames}>
          <div className={innerClassNames}></div>
        </div>
      );
    });

  return boxes;
}

export default Skeleton;
