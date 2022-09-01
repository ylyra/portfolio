import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import InputMask from "react-input-mask";

import api from "../services/api";

import styles from "../styles/components/Contact.module.css";

export function Contact() {
  return (
    <section id="contact" className={styles.contactContainer}>
      <div className="container">
        <h2 className="subtitle center">CONTATO</h2>

        <div className={`row dflex ${styles.dflex}`}>
          <div className={`col s12 m6 ${styles.asc}`}>
            <p style={{ maxWidth: "470px" }}>
              Caso prefira você também também pode entrar em contato atráves do
              WhatsApp ou por uma das outras redes sociais que é uma forma mais
              rápida de ter uma resposta.
            </p>
            <div className={styles.socials}>
              <a
                href="https://fb.com/ylyra1"
                rel="noopener"
                target="_blank"
                className={`social ${styles.social}`}
              >
                <img
                  src="./assets/images/socials/facebook.svg"
                  alt="Icon from Facebook"
                />
                <p>
                  <span className={styles.socialInfo}>
                    Me chama no Facebook
                  </span>
                  <span className={styles.socialUser}>@ylyra1</span>
                </p>
              </a>

              <a
                href="https://instagram.com/ylyra1"
                rel="noopener"
                target="_blank"
                className={`social ${styles.social}`}
              >
                <img
                  src="./assets/images/socials/instagram.svg"
                  alt="Icon from Instagram"
                />
                <p>
                  <span className={styles.socialInfo}>
                    Siga-me no Instagram
                  </span>
                  <span className={styles.socialUser}>@ylyra1</span>
                </p>
              </a>

              <a
                href="https://twitter.com/ylyra1"
                rel="noopener"
                target="_blank"
                className={`social ${styles.social}`}
              >
                <img
                  src="./assets/images/socials/twitter.svg"
                  alt="Icon from Twitter"
                />
                <p>
                  <span className={styles.socialInfo}>Siga-me no Twitter</span>
                  <span className={styles.socialUser}>@ylyra1</span>
                </p>
              </a>

              <a
                href="https://github.com/ylyra"
                rel="noopener"
                target="_blank"
                className={`social ${styles.social}`}
              >
                <img
                  src="./assets/images/socials/github.svg"
                  alt="Icon from github"
                />
                <p>
                  <span className={styles.socialInfo}>Siga-me no GitHub</span>
                  <span className={styles.socialUser}>@ylyra</span>
                </p>
              </a>

              <a
                href="https://wa.me/+5527996484419?text=Tenho interesse em te contratar para a criação de um site, está disponivel?"
                rel="noopener"
                target="_blank"
                className={`social ${styles.social}`}
              >
                <img
                  src="./assets/images/socials/whatsapp.svg"
                  alt="Icon from WhatsApp"
                />
                <p>
                  <span className={styles.socialInfo}>
                    Me chama no WhatsApp
                  </span>
                  <span className={styles.socialUser}>+5527996484419</span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
