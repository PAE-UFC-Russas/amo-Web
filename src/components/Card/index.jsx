import React from "react";
import "./styles.css";

import { FaRegHandPointRight } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";

import HorizontaLine from "../HorizontalLine";

export default function Card({ author, title, description, date, comments }) {
  return (
    <div className="card">
      <div className="card-img"></div>
      <div className="card-header">
        <div className="author">{author}</div>
      </div>
      <div className="card-body">
        <h3>{title || "Sem título"}</h3>
        <HorizontaLine height="2px" color="#52D6FB" />
        <div class="linha"></div>
        <p>{description}</p>
      </div>

      <div className="card-footer">
        <span>{date}</span>
        <div className="interactions">
          <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            {comments}
            <FaRegMessage size={17} cursor={"pointer"} />
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            {comments}
            <FaRegHandPointRight size={20} cursor={"pointer"} />
          </span>
        </div>
      </div>
    </div>
  );
}
