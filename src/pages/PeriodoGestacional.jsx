import React from "react";
import "./PeriodoGestacional.module.css";

const PeriodoGestacional = () => {
  return (
    <div>
      <section className="hero-text">
        <nav className="breadcrumb">Artigos &gt; Período Gestacional</nav>

        <h1 className="title">
          Período Gestacional: tudo que você precisa saber
        </h1>

        <p className="intro">
          A gestação é um período especial, cheio de mudanças físicas e
          emocionais. Saber como acompanhar cada etapa ajuda a mãe e o bebê a
          terem uma experiência saudável e tranquila.
        </p>

        <div className="meta-info">
          <span className="reading-time">🕒 8 min de leitura</span>
        </div>
      </section>

      <section className="article-section">
        <div className="article-main">
          <div className="medical-review">
            <p>
              Revisão por <strong>Equipe BabyBuddy</strong>, com informações de
              fontes médicas confiáveis
            </p>
          </div>

          <div className="review-box">
            <p className="review-label">✅ Padrões de verificação de fatos</p>
            <p className="review-text">
              Todo o conteúdo deste artigo segue padrões médicos confiáveis,
              incluindo dados atualizados sobre acompanhamento pré-natal,
              cuidados com gestantes e orientações oficiais de saúde.
            </p>
          </div>

          <h2>Principais pontos sobre o período gestacional</h2>
          <ul className="key-points">
            <li>
              Uma gestação dura, em média, 40 semanas, divididas em três
              trimestres.
            </li>
            <li>
              O acompanhamento médico regular é essencial para saúde da mãe e do
              bebê.
            </li>
            <li>
              Alimentação, exercícios leves, descanso e cuidado emocional
              contribuem para uma gestação tranquila.
            </li>
            <li>
              Informar-se sobre sinais de alerta ajuda a prevenir complicações.
            </li>
          </ul>

          <h2>Contagem de semanas e trimestres</h2>
          <p>
            A gestação é contada a partir do primeiro dia da última menstruação.
            Ela é dividida em três trimestres:
          </p>
          <ul>
            <li>
              <strong>1º Trimestre (0-12 semanas):</strong> Formação inicial do
              bebê e maior atenção aos riscos de aborto.
            </li>
            <li>
              <strong>2º Trimestre (13-27 semanas):</strong> Desenvolvimento
              mais visível, sintomas como náuseas diminuem.
            </li>
            <li>
              <strong>3º Trimestre (28-40 semanas):</strong> Crescimento
              acelerado do bebê e preparação para o parto.
            </li>
          </ul>

          <h2>Acompanhamento médico</h2>
          <p>
            Consultas regulares com o obstetra são fundamentais. Entre os
            principais exames e acompanhamentos estão:
          </p>
          <ul>
            <li>
              Exames de sangue e urina para monitorar saúde da mãe e do bebê.
            </li>
            <li>Ultrassonografias para verificar crescimento fetal.</li>
            <li>
              Acompanhamento de pressão arterial, peso e sinais de diabetes
              gestacional ou pré-eclâmpsia.
            </li>
            <li>
              Orientações sobre vacinação, hábitos saudáveis e dieta balanceada.
            </li>
          </ul>

          <h2>Cuidados durante a gestação</h2>
          <p>Algumas recomendações importantes incluem:</p>
          <ul>
            <li>
              Alimentação equilibrada, rica em vitaminas, minerais e ácido
              fólico.
            </li>
            <li>
              Evitar álcool, cigarro e medicamentos sem orientação médica.
            </li>
            <li>
              Praticar exercícios leves ou moderados, se liberado pelo médico.
            </li>
            <li>
              Descansar adequadamente e cuidar da saúde emocional.
            </li>
          </ul>

          <h2>Dicas para uma gestação tranquila</h2>
          <ul>
            <li>Organize uma rotina de consultas e exames pré-natais.</li>
            <li>
              Informe-se sobre sinais de alerta, como sangramentos, dores
              intensas ou febre.
            </li>
            <li>
              Converse com familiares ou grupos de apoio para reduzir ansiedade.
            </li>
            <li>
              Invista em roupas confortáveis, hidratação constante e cuidados
              com a pele.
            </li>
            <li>
              Participe de cursos de gestantes para se preparar para parto e
              pós-parto.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PeriodoGestacional;
