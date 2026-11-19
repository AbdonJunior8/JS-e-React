
import { useState } from "react";
import "./FeedbackForm.css";

function FeedbackForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [comentario, setComentario] = useState("");

  function enviarFormulario(event) {
    event.preventDefault();

    if (!nome || !email || !comentario) {
      alert("Preencha todos os campos!");
      return;
    }

    alert(
      "Feedback enviado!\n\n" +
      "Nome: " + nome + "\n" +
      "Email: " + email + "\n" +
      "Comentário: " + comentario
    );

    setNome("");
    setEmail("");
    setComentario("");
  }

  return (
    <div className="feedback-container">
      <h2>Formulário de Feedback</h2>

      <form onSubmit={enviarFormulario}>
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome"
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
        />

        <label>Comentário:</label>
        <textarea
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
          placeholder="Digite seu comentário"
        />

        <button type="submit">Enviar Feedback</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
