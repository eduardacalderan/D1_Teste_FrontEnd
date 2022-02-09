import React from "react";
import ReactDOM from "react-dom";

import { BiPieChartAlt2, BiLinkExternal } from "react-icons/bi";
import { IoRocketOutline, IoDiamondOutline } from "react-icons/io5";
import { FaUserFriends, FaExchangeAlt } from "react-icons/fa";
import { AiOutlineCloudServer } from "react-icons/ai";
import { VscTools } from "react-icons/vsc";
import { RiLogoutCircleRLine } from "react-icons/ri";
import ReactTooltip from "react-tooltip";

import logo from "../../assets/d1.svg";
import styles from "./styles.module.scss";

export function SideBar() {
  return (
    <div className={styles.sideBar}>
      <nav className={styles.sidebar}>
        <span className={styles.border}></span>

        <div className={styles.top}>
          <img src={logo} alt="D1" />

          <i>
            <p data-tip="Análises">
              <BiPieChartAlt2 />
            </p>
            <ReactTooltip
              className={styles.tooltip}
              place="right"
              type="light"
              effect="solid"
            />
          </i>
          <i>
            <p data-tip="Jornadas">
              <IoRocketOutline />
            </p>
            <ReactTooltip
              className={styles.tooltip}
              place="right"
              type="light"
              effect="solid"
            />
          </i>
          <i>
            <p data-tip="Clientes">
              <FaUserFriends />
            </p>
            <ReactTooltip
              className={styles.tooltip}
              place="right"
              type="light"
              effect="solid"
            />
          </i>
          <i>
            <p data-tip="CCM Cloud">
              <AiOutlineCloudServer />
            </p>
            <ReactTooltip
              className={styles.tooltip}
              place="right"
              type="light"
              effect="solid"
            />
          </i>
          <span className={styles.divider}></span>
          <i>
            <p data-tip="Versão 01">
              <BiLinkExternal />
            </p>
            <ReactTooltip
              className={styles.tooltip}
              place="right"
              type="light"
              effect="solid"
            />
          </i>
        </div>

        <div>
          <i>
            <p data-tip="Administração">
              <IoDiamondOutline />
            </p>
            <ReactTooltip
              className={styles.tooltip}
              place="right"
              type="light"
              effect="solid"
            />
          </i>
          <i>
            <p data-tip="Help Desk">
              <VscTools />
            </p>
            <ReactTooltip
              className={styles.tooltip}
              place="right"
              type="light"
              effect="solid"
            />
          </i>
          <i>
            {" "}
            <p data-tip="Trocar Conta">
              <FaExchangeAlt />
            </p>
            <ReactTooltip
              className={styles.tooltip}
              place="right"
              type="light"
              effect="solid"
            />
          </i>
          <i>
            <p data-tip="Sair">
              <RiLogoutCircleRLine />
            </p>
            <ReactTooltip
              className={styles.tooltip}
              place="right"
              type="light"
              effect="solid"
            />
          </i>
        </div>
        <span className={styles.border}></span>
      </nav>
    </div>
  );
}
