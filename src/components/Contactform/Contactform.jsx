import React from "react";
import styles from "./Contactform.module.css";
import Button from "../Buttton/Button";
import { MdMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Contactform = () => {
  return (
    <section className={` ${styles.container} container`}>
      <div className={styles.contactform}>
        <div className={styles.topbtn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<IoIosCall fontSize="24px" />} />
        </div>
        <Button
          text="VIA EMAIL FORM"
          isscnbtn="true"
          icon={<MdEmail fontSize="24px" />}
        />
        <form>
          <div className={styles.formcontainer}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className={styles.formcontainer}>
            <label htmlFor="mail">E-Mail</label>
            <input type="email" name="mail" id="mail" />
          </div>
          <div className={styles.formcontainer}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows={7}/>
          </div>
          <div className={styles.submitbtn}>
           <Button
            text="Submit"
            // icon={<MdMessage fontSize="24px" />}
          />
          </div>
        </form>
      </div>
      <div className={styles.contactimg}>
        <img src="/Service 24_7-pana 1.svg" alt="callImage" />
      </div>
    </section>
  );
};

export default Contactform;
