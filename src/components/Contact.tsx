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
          <div className="col s12 m6">
            <p className={styles.textForm}>
              Entre em contato preenchendo o formulário abaixo, ou caso seja
              urgente use o link para o WhatsApp ao lado.
            </p>

            <form
              action="https://formsubmit.co/yanlyra3@gmail.com"
              method="POST"
            >
              <div className={styles.formGroup}>
                <label htmlFor="name">Seu Nome (Obrigatório)</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Digite o seu nome"
                  className="form-control"
                  defaultValue=""
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Seu E-mail (Obrigatório)</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Digite o seu nome (exemplo: email@gmail.com)"
                  className="form-control"
                  defaultValue=""
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone_number">
                  Número do celular (Opcional)
                </label>
                <InputMask
                  mask="+55 (99) 9-9999-9999"
                  type="text"
                  id="phone_number"
                  className="form-control"
                  placeholder="Digite o telefone para contato por WhatsApp"
                  defaultValue=""
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Mensagem (Obrigatório)</label>
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  placeholder="Deixe sua mensagem de contato aqui"
                  defaultValue=""
                  required
                ></textarea>
              </div>

              <input
                type="hidden"
                name="_next"
                defaultValue="https://yanlyra.dev"
              />
              <input
                type="hidden"
                name="_subject"
                defaultValue="Contato pelo site!"
              />
              <input
                type="text"
                name="_honey"
                defaultValue=""
                style={{
                  display: "none",
                }}
              />
              <input type="hidden" name="_captcha" defaultValue="true" />

              <div className={styles.formButtons}>
                <button
                  type="submit"
                  className={`btn ${styles.btn} ${styles.green}`}
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>

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
