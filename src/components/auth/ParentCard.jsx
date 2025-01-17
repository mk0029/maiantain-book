const ParentCard = ({ children }) => {
  return (
    <>
      <div className="fixed h-screen w-screen top-0 left-0 flex items-center justify-center">
        <div className="max-w-[375px] w-full border border-solid border-white/40 bg-white px-5 py-10 rounded-xl shadow-2xl shadow-white/30">
          {children}
        </div>
      </div>
    </>
  );
};

export default ParentCard;
