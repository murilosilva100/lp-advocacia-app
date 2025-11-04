import React from "react";
import { RiMedalLine } from "react-icons/ri";
import useScrollAnimation from "../hooks/useScrollAnimation";
import "../styles/Services.css";

export default function Services() {
  useScrollAnimation(".item-services");
  return (
    <div id="services">
      <section id="services-container">
        <div id="services-text">
          <h2 id="sections-title">
            Serviços <span id="sections-title-span">e Áreas de atuação</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus.
          </p>
        </div>
        <div className="services-grid-container">
          <div className="item-services">
            <div className="card-top">
              <RiMedalLine className="card-icon" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Experiência</h3>
              <p className="card-text">
                Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                <br />
                <br />
                Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
          </div>

          <div className="item-services">
            <div className="card-top">
              <RiMedalLine className="card-icon" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Experiência</h3>
              <p className="card-text">
                Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                <br />
                <br />
                Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
          </div>

          <div className="item-services">
            <div className="card-top">
              <RiMedalLine className="card-icon" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Experiência</h3>
              <p className="card-text">
                Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                <br />
                <br />
                Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
          </div>

          <div className="item-services">
            <div className="card-top">
              <RiMedalLine className="card-icon" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Experiência</h3>
              <p className="card-text">
                Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                <br />
                <br />
                Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
