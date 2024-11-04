export default function NotFoundPage() {
  const returnToPreviousRoute = () => {
    window.history.back();
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-lightred">
      <h1 className="text-red px-8 py-1 rounded-xl">Not found</h1>
      <h3 className="hover:cursor-pointer" onClick={()=>{returnToPreviousRoute()}}>Return here</h3>
    </div>
  );
}
