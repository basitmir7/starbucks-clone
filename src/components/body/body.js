import "./body.css";
import Section from "./section";
import { image1, image2, image3, image4 } from "../../assets";
import {
  header_1,
  header_2,
  header_3,
  header_4,
  text_1,
  text_3,
  text_4,
} from "../../text";
import Button from "../button/button";
const Body = () => {
  return (
    <>
      <div className="main-content">
        <Section
          bg="#d4e9e2"
          color="#33433d"
          image={image1}
          header={header_1}
          text={text_1}
          btnText="Play to win"
        />

        <section
          style={{
            flexDirection: "row-reverse",
            background: "#d4e9e2",
            color: "#33433d",
          }}
          class="box box-b  grid-col-2"
        >
          <img src={image4} alt="" />
          <div class="box-text section-2-text" style={{ fontWeight: "500" }}>
            <h2 class="text-md">{header_2}</h2>
            <div class="text-sm">
              <p>
                Now you can link your Starbucks® Rewards + Delta SkyMiles®
                accounts to get:
                <br />
              </p>
              <ul className="section-2-list">
                <li>150 Stars + 500 miles when you link before 12/31</li>

                <li>Double Stars on Delta travel days</li>

                <li>
                  1 mile per $1 spent at Starbucks (excludes taxes and
                  gratuities)**
                </li>
              </ul>
            </div>
            <div>
              <Button
                bg="#d4e9e2"
                border="1px solid #33433d"
                color="#33433d"
                text="Link accounts"
              />
            </div>
          </div>
        </section>

        <Section
          bg="#006241"
          color="#fff"
          image={image3}
          header={header_3}
          text={text_3}
          btnText="Order now"
        />
        <Section
          bg="#006241"
          color="#fff"
          align="row-reverse"
          image={image2}
          header={header_4}
          text={text_4}
          btnText="Learn more"
        />
      </div>
    </>
  );
};

export default Body;
