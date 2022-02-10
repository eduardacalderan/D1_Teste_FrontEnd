import { AiOutlineCheck, AiOutlinePlayCircle } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { IoBedOutline } from "react-icons/io5";
import { RiSendPlane2Line } from "react-icons/ri";
import styles from "./styles.module.scss";

interface JourneysItemProps {
  name: string;
  status: number;
  recipients: string;
  success: string;
}

export function JourneysTable(props: JourneysItemProps) {
  function status() {
    switch (props.status) {
      case 1:
        return (
          <td className={styles.status} {...props.status}>
            <i>
              {" "}
              <RiSendPlane2Line
                style={{
                  color: "#C1CA4F",
                  marginRight: "0.7rem",
                  fontSize: "1rem",
                }}
              />
            </i>
            Enviando
          </td>
        );

      case 2:
        return (
          <td className={styles.status} {...props.status}>
            <i>
              {" "}
              <AiOutlinePlayCircle
                style={{
                  color: "#35C667",
                  marginRight: "0.7rem",
                  fontSize: "1rem",
                }}
              />
            </i>
            Ativadas
          </td>
        );

      case 3:
        return (
          <td className={styles.status} {...props.status}>
            <i>
              {" "}
              <BsPencil
                style={{
                  color: "#3FA8F4",
                  marginRight: "0.7rem",
                  fontSize: "1rem",
                }}
              />
            </i>
            Configurando
          </td>
        );

      case 4:
        return (
          <td className={styles.status} {...props.status}>
            <i>
              {" "}
              <IoBedOutline
                style={{
                  color: "#EBBD3E",
                  marginRight: "0.7rem",
                  fontSize: "1rem",
                }}
              />
            </i>
            Ociosa
          </td>
        );
      case 5:
        return (
          <td className={styles.status} {...props.status}>
            <i>
              {" "}
              <AiOutlineCheck
                style={{
                  color: "#9FABD5",
                  marginRight: "0.7rem",
                  fontSize: "1rem",
                }}
              />
            </i>
            Concluída
          </td>
        );
    }
  }

  return (
    <tr>
      <td className={styles.name}>{props.name}</td>
      <td style={{ textAlign: "center" }}>{props.recipients}</td>
      <td style={{ textAlign: "center" }}>{props.success}</td>
      {status()}
    </tr>
  );
}
