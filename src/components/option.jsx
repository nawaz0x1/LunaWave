const Option = ({ window, setWindow }) => {
  return (
    <div className="z-50 left-1 text-slate-50 font-bold  text-center fixed flex gap-3 text-2xl">
      <div
        className="hover:bg-slate-700 text-white p-1 rounded-md"
        onClick={() => {
          setWindow('nakamura');
        }}
      >
        <button className="bg-blue-700 p-1 h-12 w-52 text-blue-50 rounded-lg">
          Nakamura Events
        </button>
      </div>
      {/* <div
        className="hover:bg-slate-700 text-white p-1 rounded-md"
        onClick={() => {
          setWindow('timeline');
        }}
      >
        <button className={window == 'timeline' ? 'underline' : ''}>
          Timeline
        </button>
      </div> */}
    </div>
  );
};

export default Option;
