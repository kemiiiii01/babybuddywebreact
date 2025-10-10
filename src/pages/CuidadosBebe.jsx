import React from 'react';
import './CuidadosBebe.module.css';
import gravida from '../assets/gravida.png';
import facilidades from '../assets/facilidade.png';
import compartilhamento from '../assets/compartilhamento.png';

const cuidadosBebeContent = {
  heroText: {
    breadcrumb: 'Artigos > Cuidados com o bebê',
    title: 'Cuidados com o bebê: tudo que você precisa saber de 0 a 1 ano',
    intro: 'O primeiro ano de vida de um bebê é cheio de descobertas, desenvolvimento rápido e aprendizados. Garantir cuidados adequados ajuda na saúde, segurança e bem-estar da criança.',
    readingTime: '🕒 12 min de leitura'
  },
  medicalReview: {
    by: 'Equipe BabyBuddy',
    note: 'com informações baseadas em pediatria e recomendações oficiais de saúde'
  },
  reviewBox: {
    label: '✅ Padrões de verificação de fatos',
    text: 'Todo o conteúdo deste artigo segue recomendações de pediatras, guias de saúde infantil e dados atualizados de instituições de referência em saúde da criança.'
  },
  articleSections: [
    {
      title: 'Principais pontos sobre cuidados com o bebê',
      items: [
        'Alimentação adequada nos primeiros meses é essencial para crescimento e imunidade.',
        'Banho, higiene e cuidado com roupas influenciam diretamente na saúde da pele e conforto do bebê.',
        'Consultas médicas regulares ajudam a monitorar crescimento, vacinação e desenvolvimento.',
        'O primeiro ano é crítico para criar rotinas saudáveis, conforto emocional e vínculos familiares.'
      ]
    },
    {
      title: 'Alimentação do bebê (0 a 12 meses)',
      items: [
        '0 a 6 meses: Aleitamento materno exclusivo é recomendado pela OMS. O leite materno fornece todos os nutrientes e anticorpos necessários.',
        '6 a 12 meses: Introdução gradual de alimentos sólidos (papinhas, frutas, vegetais, cereais) mantendo o leite materno ou fórmula.',
        'Evitar açúcar, sal e alimentos industrializados nos primeiros 12 meses.',
        'Oferecer água em pequenas quantidades a partir do 6º mês.',
        'Observar sinais de alergias ou intolerâncias alimentares e consultar pediatra em caso de dúvidas.'
      ]
    },
    {
      title: 'Banho e higiene',
      items: [
        'Usar água morna (36–37ºC) e sabonete neutro específico para bebês.',
        'Evitar banhos muito longos, principalmente nos recém-nascidos.',
        'Secar cuidadosamente as dobrinhas do corpo, evitando assaduras.',
        'Higienizar fraldas com frequência e utilizar pomadas preventivas contra assaduras.',
        'Manter unhas curtas para evitar arranhões.'
      ]
    },
    {
      title: 'Roupas e conforto',
      items: [
        'Preferir tecidos leves, de algodão, que permitem a respiração da pele.',
        'Evitar roupas apertadas que possam dificultar movimento ou circulação.',
        'Trocar roupas molhadas ou sujas imediatamente para prevenir assaduras e desconforto.',
        'Adaptar vestuário à temperatura ambiente, mantendo o bebê aquecido sem superaquecimento.'
      ]
    },
    {
      title: 'Consultas médicas e vacinação',
      items: [
        'Agendar consultas regulares para medir peso, altura, perímetro cefálico e desenvolvimento motor e cognitivo.',
        'Seguir o calendário de vacinação recomendado pelo Ministério da Saúde.',
        'Monitorar sinais de doenças, febres ou alterações de comportamento e relatar ao pediatra.',
        'Receber orientações sobre introdução alimentar, sono, higiene e prevenção de acidentes.'
      ]
    },
    {
      title: 'Dicas gerais para um primeiro ano saudável',
      items: [
        'Estabelecer rotinas de sono e alimentação para segurança e bem-estar emocional.',
        'Estimular o bebê com brincadeiras, música e interação constante para desenvolvimento cognitivo e social.',
        'Garantir segurança em casa: protetores de tomadas, grades em berço, cantos protegidos e supervisão constante.',
        'Manter ambiente limpo, ventilado e iluminado, evitando exposição a fumaça e poluição.',
        'Participar de grupos de pais ou orientação familiar para trocar experiências e aprender boas práticas.'
      ]
    }
  ],
  cards: [
    {
      image: gravida,
      alt: 'Gestante',
      text: 'Dicas para gestantes'
    },
    {
      image: facilidades,
      alt: 'Facilidades',
      text: 'Facilidades para o dia a dia'
    },
    {
      image: compartilhamento,
      alt: 'Compartilhamento',
      text: 'Compartilhe informações importantes'
    }
  ]
};

export default cuidadosBebeContent;
