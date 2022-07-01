import React from "react";
import "../module/modules.css";
import close from "../assets/close.svg";

const ModuleLogin = ({ children, open, isClose }) => {
  if (!open) {
    return null;
  }
  return (
    <div class="module" id="becomeClientsModal">
      <div class="module__inner">
        <div class="module__content">
          {children}{" "}
          <button class="btn" onClick={isClose}>
            <img src={close} alt="close" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ModuleRegister = ({ children, open, isClose }) => {
  if (!open) {
    return null;
  }
  return (
    <div class="module" id="becomeClientsModal">
      <div class="module__inner">
        <div class="module__content">
          {children}{" "}
          <button class="btn" onClick={isClose}>
            <img src={close} alt="close" />
          </button>
        </div>
      </div>
    </div>
  );
};
export { ModuleRegister, ModuleLogin };
