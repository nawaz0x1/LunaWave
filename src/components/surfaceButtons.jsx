export default function SurfaceButtons({
  textToShow,
  surfaceName,
  setSurface,
  surface,
}) {
  const selectedClassName = 'bg-blue-600 p-2 rounded-xl';
  return (
    <div className={surface == surfaceName ? selectedClassName : 'p-2'}>
      <div
        className="text-xl font-bold"
        onClick={() => {
          setSurface(surfaceName);
          console.log(surface);
        }}
      >
        {textToShow}
      </div>
    </div>
  );
}
