interface LandingPageAlertModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

export default function LandingPageAlertModal({
  isModalOpen,
  closeModal,
}: LandingPageAlertModalProps) {
  return (
    <>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-thinOverlay">
          <div className="bg-white w-1/2 h-1/2 py-4 px-10 rounded-xl flex flex-col gap-4 items-center justify-start">
            <img className="size-20" src="/alert_icon.svg" alt="Alert Icon" />
            <p className="text-xl text-center">
              Aplikasi ini masih dalam tahap pengembangan. Beberapa fitur
              mungkin belum sepenuhnya berfungsi, dan pengguna dapat mengalami
              bug dalam beberapa bagian aplikasi.
            </p>
            <p className="text-xl text-center">
              Kami berkomitmen untuk memperbaiki dan mengembangkan aplikasi ini
              secara berkala.
            </p>
            <button className="btn-primary w-full text-lg font-bold px-14 py-1" onClick={()=>{
                closeModal();
            }}>
              Mulai
            </button>
          </div>
        </div>
      )}
    </>
  );
}
