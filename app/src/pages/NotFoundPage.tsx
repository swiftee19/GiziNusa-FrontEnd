export default function NotFoundPage() {
  const returnToPreviousRoute = () => {
    window.history.back();
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-secondary">
      <h1 className="text-primary px-8 py-1 rounded-xl">On Development</h1>
      <h3 className="hover:cursor-pointer hover:underline" onClick={()=>{returnToPreviousRoute()}}>Return here</h3>
    </div>
  );
}
