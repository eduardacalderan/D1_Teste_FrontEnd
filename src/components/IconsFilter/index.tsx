import { AiOutlineCheck, AiOutlinePlayCircle } from "react-icons/ai";
import { CgViewGrid } from "react-icons/cg";
import { IoBedOutline } from "react-icons/io5";
import { RiSendPlane2Line } from "react-icons/ri";
import { BsPencil } from "react-icons/bs";

import styles from "./styles.module.scss";

export function Icons() {
  return (
    <div className={styles.icons}>
      <i>
        <CgViewGrid />
      </i>
      <i>
        <RiSendPlane2Line />
      </i>
      <i>
        <AiOutlinePlayCircle />
      </i>
      <i>
        <BsPencil />
      </i>
      <i>
        <IoBedOutline />
      </i>
      <i>
        <AiOutlineCheck />
      </i>
    </div>
  );
}
