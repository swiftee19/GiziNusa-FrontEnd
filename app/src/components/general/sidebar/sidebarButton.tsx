import { SidebarButtonDataType } from "./sidebarButtonsData";
import styles from "../../../styles/components/sidebar/SidebarButton.module.css";
import { Link, useLocation } from "react-router-dom";

interface SidebarButtonProps {
  sidebarButtonData: SidebarButtonDataType;
}

export default function SidebarButton({
  sidebarButtonData,
}: SidebarButtonProps) {
  const location = useLocation();
  const isActive = location.pathname.startsWith(sidebarButtonData.route);

  return (
    <Link className="no-underline" to={sidebarButtonData.route}>
      <div
        className={`px-4 w-full min-h-12 flex items-center gap-4 hover:cursor-pointer ${
          isActive ? styles.sidebarButtonActive : styles.sidebarButton
        }`}
      >
        <img
          className={`size-6 ${
            isActive
              ? styles.sidebarButtonImageActive
              : styles.sidebarButtonImage
          }`}
          src={sidebarButtonData.icon}
        />
        <p
          className={`font-semibold text-md transition ${
            isActive ? styles.sidebarButtonTextActive : styles.sidebarButtonText
          }`}
        >
          {sidebarButtonData.text}
        </p>
      </div>
    </Link>
  );
}
