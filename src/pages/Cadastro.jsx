import React from "react";
import styles from "./cadastro.module.css";

export default function Cadastro() {
  const togglePassword = (id, element) => {
    const input = document.getElementById(id);
    if (input.type === "password") {
      input.type = "text";
      element.querySelector("i").classList.remove("fa-eye");
      element.querySelector("i").classList.add("fa-eye-slash");
    } else {
      input.type = "password";
      element.querySelector("i").classList.remove("fa-eye-slash");
      element.querySelector("i").classList.add("fa-eye");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário enviado!");
  };

  return (
    <div className={styles.appWrapper}>
      <div className={styles.cadastroContainer}>
        <h2>BabyBuddy</h2>
        <form id="formCadastro" onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input type="text" id="nome" placeholder="Nome completo" required />
            <i className="fa fa-user"></i>
          </div>

          <div className={styles.inputGroup}>
            <input type="tel" id="telefone" placeholder="Telefone" required />
            <i className="fa fa-phone"></i>
          </div>

          <div className={styles.inputGroup}>
            <input type="email" id="email" placeholder="Email" required />
            <i className="fa fa-envelope"></i>
          </div>

          <div className={styles.inputGroup}>
            <input type="password" id="senha" placeholder="Senha" required />
            <span
              className={styles.togglePassword}
              onClick={(e) => togglePassword("senha", e.currentTarget)}
            >
              <i className="fa fa-eye"></i>
            </span>
          </div>

          <div className={styles.inputGroup}>
            <input
              type="password"
              id="confirmaSenha"
              placeholder="Confirmar Senha"
              required
            />
            <span
              className={styles.togglePassword}
              onClick={(e) =>
                togglePassword("confirmaSenha", e.currentTarget)
              }
            >
              <i className="fa fa-eye"></i>
            </span>
          </div>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
