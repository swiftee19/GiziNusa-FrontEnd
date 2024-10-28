import { SidebarButtonDataType } from "./sidebarButtonsData";
import styles from "../../../styles/components/sidebar/SidebarButton.module.css";

interface SidebarButtonProps {
  sidebarButtonData: SidebarButtonDataType;
}

export default function SidebarButton({
  sidebarButtonData,
}: SidebarButtonProps) {
  return (
    <>
      <div
        className={`px-4 w-full min-h-12 flex items-center gap-4 hover:cursor-pointer ${styles.sidebarButton}`}
      >
        <img
          className={`size-6 ${styles.sidebarButtonImage}`}
          src={sidebarButtonData.icon}
        />
        <p
          className={`text-gray font-semibold text-md transition ${styles.sidebarButtonText}`}
        >
          {sidebarButtonData.text}
        </p>
      </div>
    </>
  );
}
