import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const benefits = [
  { title: 'Pureza Absoluta', desc: 'Ativos na dose certa, com a potência real da natureza.' },
  { title: 'Precisão Rítmica', desc: "Fórmulas ancestrais validadas, não 'chás de internet'." },
  { title: 'Investimento Inteligente', desc: 'Fim do gasto com promessas vazias: um guia definitivo.' },
  { title: 'Alívio Consistente', desc: 'Não é paliativo de duas noites — é reequilíbrio hormonal real.' },
  { title: 'Manual de Instruções', desc: 'O passo a passo que explica o porquê de cada sintoma e como vencê-lo.' },
];

function LeafBullet() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 mt-1">
      <path d="M9 1 C9 1, 17 5, 17 10 C17 14.5, 13 17, 9 17 C5 17, 1 14.5, 1 10 C1 5, 9 1, 9 1Z" stroke="hsl(37,34%,54%)" strokeWidth="1" fill="hsl(37,34%,54%,0.18)"/>
      <path d="M9 1 L9 17" stroke="hsl(37,34%,54%)" strokeWidth="0.7" />
    </svg>
  );
}

/* ─────────────── APP SCREENS ─────────────── */

function HomeScreen() {
  const cats = ['Hormônios', 'Sono', 'Mente', 'Humor', 'Libido'];
  return (
    <motion.div
      key="home"
      initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.32 }}
      style={{ padding: '14px 14px 0', height: '100%', overflowY: 'hidden', fontFamily: 'system-ui, sans-serif' }}
    >
      {/* Top bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <div>
          <p style={{ fontSize: 9, color: 'hsl(37,34%,54%)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 2 }}>Protocolo de hoje</p>
          <p style={{ fontSize: 15, fontWeight: 800, color: 'hsl(150,28%,22%)', fontFamily: 'Georgia, serif' }}>Olá, Ana ✨</p>
        </div>
        <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'hsl(150,28%,22%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🌿</div>
      </div>

      {/* Category pills */}
      <div style={{ display: 'flex', gap: 5, marginBottom: 12, overflowX: 'hidden' }}>
        {cats.map((c, i) => (
          <div key={i} style={{
            flexShrink: 0, padding: '4px 9px', borderRadius: 20,
            background: i === 0 ? 'hsl(150,28%,22%)' : 'white',
            border: i === 0 ? 'none' : '1px solid hsl(37,34%,54%,0.3)',
            fontSize: 8.5, fontWeight: 700,
            color: i === 0 ? 'white' : 'hsl(150,28%,22%)',
            letterSpacing: '0.04em',
          }}>{c}</div>
        ))}
      </div>

      {/* Feature card */}
      <div style={{
        background: 'linear-gradient(135deg, hsl(150,28%,20%) 0%, hsl(150,25%,28%) 100%)',
        borderRadius: 14, padding: '13px', marginBottom: 10, position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -8, right: -6, fontSize: 52, opacity: 0.12 }}>🌿</div>
        <p style={{ fontSize: 8, color: 'hsl(37,34%,68%)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 5 }}>Receita do Dia</p>
        <p style={{ fontSize: 12, fontWeight: 800, color: 'white', fontFamily: 'Georgia, serif', lineHeight: 1.3, marginBottom: 7 }}>Tônico de Amora-Preta com Cimicífuga</p>
        <div style={{ display: 'flex', gap: 10, marginBottom: 9 }}>
          <span style={{ fontSize: 8.5, color: 'hsl(37,34%,74%)' }}>⏱ 8 min</span>
          <span style={{ fontSize: 8.5, color: 'hsl(37,34%,74%)' }}>⭐ 4.9</span>
          <span style={{ fontSize: 8.5, color: 'hsl(37,34%,74%)' }}>🌡️ Fogachos</span>
        </div>
        <div style={{ background: 'hsl(37,34%,54%)', borderRadius: 8, padding: '6px 11px', display: 'inline-block', fontSize: 8.5, fontWeight: 800, color: 'white', letterSpacing: '0.05em' }}>
          VER PREPARO →
        </div>
      </div>

      {/* Progress */}
      <div style={{ background: 'white', borderRadius: 12, padding: '9px 11px', marginBottom: 9 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
          <p style={{ fontSize: 9, fontWeight: 700, color: 'hsl(150,28%,22%)' }}>Sintomas monitorados</p>
          <p style={{ fontSize: 9, color: 'hsl(37,34%,54%)', fontWeight: 700 }}>3 / 5 hoje</p>
        </div>
        <div style={{ height: 6, background: 'hsl(150,20%,88%)', borderRadius: 3 }}>
          <div style={{ width: '60%', height: '100%', background: 'hsl(37,34%,54%)', borderRadius: 3 }} />
        </div>
      </div>

      {/* Quick actions */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {[['🆘', 'Busca SOS', 'hsl(150,28%,22%,0.08)'], ['📅', 'Cronograma', 'hsl(37,34%,54%,0.10)']].map(([icon, label, bg], i) => (
          <div key={i} style={{ background: bg as string, borderRadius: 10, padding: '9px 6px', textAlign: 'center' }}>
            <div style={{ fontSize: 18 }}>{icon as string}</div>
            <p style={{ fontSize: 8, fontWeight: 700, color: 'hsl(150,28%,22%)', marginTop: 3 }}>{label as string}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function RecipeScreen() {
  const ingredients = ['1 col. sopa amora-preta seca', '1 col. chá de cimicífuga', '200ml água filtrada', 'Mel puro a gosto'];
  return (
    <motion.div
      key="recipe"
      initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.32 }}
      style={{ height: '100%', overflowY: 'hidden', fontFamily: 'system-ui, sans-serif' }}
    >
      {/* Hero area */}
      <div style={{
        height: 138, background: 'linear-gradient(160deg, hsl(150,30%,18%), hsl(150,26%,30%))',
        position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', padding: 13,
      }}>
        <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)', fontSize: 64, opacity: 0.13 }}>🌿</div>
        <div style={{ position: 'absolute', top: 10, left: 12 }}>
          <div style={{ fontSize: 8.5, color: 'hsl(37,34%,74%)', fontWeight: 700, background: 'rgba(0,0,0,0.28)', padding: '3px 9px', borderRadius: 20, letterSpacing: '0.06em' }}>← VOLTAR</div>
        </div>
        <div>
          <div style={{ display: 'flex', gap: 5, marginBottom: 6 }}>
            <span style={{ fontSize: 8, color: 'white', background: 'hsl(37,34%,54%,0.85)', padding: '2px 8px', borderRadius: 20 }}>Fogachos</span>
            <span style={{ fontSize: 8, color: 'white', background: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: 20 }}>Hormônios</span>
          </div>
          <p style={{ fontSize: 13, fontWeight: 800, color: 'white', fontFamily: 'Georgia, serif', lineHeight: 1.25 }}>Tônico de Amora-Preta com Cimicífuga</p>
        </div>
      </div>

      {/* Stats row */}
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '9px 0', borderBottom: '1px solid hsl(37,34%,54%,0.15)', background: 'white' }}>
        {[['⏱', '8 min'], ['🌡️', 'Fogachos'], ['⭐', '4.9']].map(([icon, label], i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 14 }}>{icon}</div>
            <div style={{ fontSize: 8, color: 'hsl(150,28%,22%)', fontWeight: 700, marginTop: 1 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Ingredients */}
      <div style={{ padding: '12px 13px' }}>
        <p style={{ fontSize: 9, fontWeight: 800, color: 'hsl(150,28%,22%)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Ingredientes</p>
        {ingredients.map((ing, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'hsl(37,34%,54%)', flexShrink: 0 }} />
            <p style={{ fontSize: 9.5, color: 'hsl(30,15%,30%)', lineHeight: 1.3 }}>{ing}</p>
          </div>
        ))}
        <div style={{ marginTop: 10, background: 'hsl(150,20%,94%)', borderRadius: 10, padding: '9px 11px', borderLeft: '3px solid hsl(37,34%,54%)' }}>
          <p style={{ fontSize: 8.5, fontWeight: 700, color: 'hsl(150,28%,22%)', marginBottom: 3 }}>Modo de Preparo</p>
          <p style={{ fontSize: 8.5, color: 'hsl(30,15%,30%)', lineHeight: 1.5 }}>Ferva a água, adicione as ervas e tampe. Aguarde 10 min em repouso. Coe e adoce com mel.</p>
        </div>
        <div style={{ marginTop: 10, background: 'hsl(150,28%,22%)', borderRadius: 10, padding: '9px', textAlign: 'center' }}>
          <p style={{ fontSize: 9.5, fontWeight: 800, color: 'white', letterSpacing: '0.05em' }}>INICIAR PREPARO →</p>
        </div>
      </div>
    </motion.div>
  );
}

function SOSScreen() {
  const symptoms = ['🔥 Fogacho', '😴 Insônia', '⚖️ Inchaço', '😤 Irritação', '🧠 Névoa Mental'];
  return (
    <motion.div
      key="sos"
      initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.32 }}
      style={{ padding: '14px', height: '100%', overflowY: 'hidden', fontFamily: 'system-ui, sans-serif' }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 12 }}>
        <div style={{ fontSize: 28 }}>🆘</div>
        <p style={{ fontSize: 14, fontWeight: 800, color: 'hsl(150,28%,22%)', fontFamily: 'Georgia, serif', marginTop: 3 }}>Busca SOS</p>
        <p style={{ fontSize: 9, color: 'hsl(30,15%,40%)', marginTop: 2 }}>O que você está sentindo agora?</p>
      </div>

      {/* Search bar */}
      <div style={{ background: 'white', borderRadius: 10, border: '1.5px solid hsl(37,34%,54%,0.4)', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 7, marginBottom: 13 }}>
        <span style={{ fontSize: 12 }}>🔍</span>
        <span style={{ fontSize: 9.5, color: 'hsl(30,15%,60%)' }}>Buscar sintoma...</span>
      </div>

      {/* Symptom chips */}
      <p style={{ fontSize: 8, fontWeight: 800, color: 'hsl(150,28%,22%)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 7 }}>Sintomas Frequentes</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 13 }}>
        {symptoms.map((s, i) => (
          <div key={i} style={{
            padding: '5px 9px', borderRadius: 20, fontSize: 8.5, fontWeight: 700,
            background: i === 0 ? 'hsl(150,28%,22%)' : 'white',
            border: i === 0 ? 'none' : '1px solid hsl(37,34%,54%,0.3)',
            color: i === 0 ? 'white' : 'hsl(150,28%,22%)',
          }}>{s}</div>
        ))}
      </div>

      {/* Quick result */}
      <div style={{ background: 'hsl(150,28%,22%)', borderRadius: 12, padding: '11px 13px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -6, right: -4, fontSize: 40, opacity: 0.10 }}>⚡</div>
        <p style={{ fontSize: 8, color: 'hsl(37,34%,68%)', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>⚡ Resultado Rápido</p>
        <p style={{ fontSize: 11, color: 'white', fontWeight: 800, fontFamily: 'Georgia, serif', marginBottom: 3 }}>Para fogachos agora:</p>
        <p style={{ fontSize: 9.5, color: 'hsl(37,34%,74%)', marginBottom: 8 }}>Tônico de Sálvia Hormonal · 5 min</p>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div style={{ background: 'hsl(37,34%,54%)', borderRadius: 8, padding: '5px 11px', fontSize: 9, fontWeight: 800, color: 'white' }}>VER PREPARO →</div>
        </div>
      </div>

      {/* Assistant */}
      <div style={{ marginTop: 9, background: 'white', borderRadius: 10, padding: '9px 12px', display: 'flex', alignItems: 'center', gap: 9, border: '1px solid hsl(37,34%,54%,0.2)' }}>
        <span style={{ fontSize: 20 }}>🤖</span>
        <div>
          <p style={{ fontSize: 9, fontWeight: 700, color: 'hsl(150,28%,22%)' }}>Assistente Virtual 24h</p>
          <p style={{ fontSize: 8.5, color: 'hsl(30,15%,40%)', lineHeight: 1.4 }}>Pergunte qualquer coisa sobre seu protocolo</p>
        </div>
      </div>
    </motion.div>
  );
}

function DiaryScreen() {
  const entries = [
    { date: 'Hoje', tags: ['Fogacho'], dots: 2, note: 'Tônico de amora às 8h ✓' },
    { date: 'Ontem', tags: ['Sono', 'Humor'], dots: 4, note: 'Noite tranquila' },
    { date: '25 Mai', tags: ['Névoa'], dots: 3, note: 'Protocolo completo ✓' },
  ];
  return (
    <motion.div
      key="diary"
      initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.32 }}
      style={{ padding: '14px', height: '100%', overflowY: 'hidden', fontFamily: 'system-ui, sans-serif' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <div>
          <p style={{ fontSize: 9, color: 'hsl(37,34%,54%)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 2 }}>Meu Histórico</p>
          <p style={{ fontSize: 15, fontWeight: 800, color: 'hsl(150,28%,22%)', fontFamily: 'Georgia, serif' }}>Diário 📓</p>
        </div>
        <div style={{ background: 'hsl(150,28%,22%)', borderRadius: 20, padding: '5px 11px', fontSize: 8.5, fontWeight: 800, color: 'white' }}>+ Registrar</div>
      </div>

      {/* Streak */}
      <div style={{ background: 'linear-gradient(135deg, hsl(37,44%,60%), hsl(37,34%,48%))', borderRadius: 12, padding: '10px 13px', marginBottom: 11, display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontSize: 22 }}>🔥</span>
        <div>
          <p style={{ fontSize: 11, fontWeight: 800, color: 'white', fontFamily: 'Georgia, serif' }}>28 dias seguidos!</p>
          <p style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.85)' }}>Continue o protocolo hoje</p>
        </div>
      </div>

      <p style={{ fontSize: 8, fontWeight: 800, color: 'hsl(150,28%,22%)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Registros Recentes</p>
      {entries.map((e, i) => (
        <div key={i} style={{ background: 'white', borderRadius: 10, padding: '9px 11px', marginBottom: 7, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 9, fontWeight: 700, color: 'hsl(150,28%,22%)', marginBottom: 3 }}>{e.date}</p>
            <div style={{ display: 'flex', gap: 4, marginBottom: 3 }}>
              {e.tags.map((t, j) => (
                <span key={j} style={{ fontSize: 7.5, background: 'hsl(150,28%,22%,0.10)', color: 'hsl(150,28%,22%)', borderRadius: 20, padding: '2px 6px', fontWeight: 700 }}>{t}</span>
              ))}
            </div>
            <p style={{ fontSize: 8, color: 'hsl(30,15%,45%)' }}>{e.note}</p>
          </div>
          <div style={{ display: 'flex', gap: 2 }}>
            {[1,2,3,4,5].map(d => (
              <div key={d} style={{ width: 5, height: 5, borderRadius: '50%', background: d <= e.dots ? 'hsl(37,34%,54%)' : 'hsl(37,34%,54%,0.2)' }} />
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
}

function ScheduleScreen() {
  const days = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'];
  const tasks = [
    { time: '8h', icon: '🌿', name: 'Tônico Matinal', done: true },
    { time: '12h', icon: '💧', name: 'Hidratação + Protocolo', done: true },
    { time: '20h', icon: '🌙', name: 'Chá Noturno de Valeriana', done: false },
  ];
  return (
    <motion.div
      key="schedule"
      initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.32 }}
      style={{ padding: '14px', height: '100%', overflowY: 'hidden', fontFamily: 'system-ui, sans-serif' }}
    >
      <p style={{ fontSize: 9, color: 'hsl(37,34%,54%)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 2 }}>Esta Semana</p>
      <p style={{ fontSize: 15, fontWeight: 800, color: 'hsl(150,28%,22%)', fontFamily: 'Georgia, serif', marginBottom: 12 }}>Protocolo Semanal</p>

      {/* Day pills */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, marginBottom: 12 }}>
        {days.map((d, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 7.5, color: 'hsl(30,15%,50%)', fontWeight: 600, marginBottom: 3 }}>{d}</p>
            <div style={{
              width: '100%', aspectRatio: '1', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: i === 2 ? 'hsl(150,28%,22%)' : i < 2 ? 'hsl(37,34%,54%,0.15)' : 'white',
              border: i === 2 ? 'none' : '1px solid hsl(37,34%,54%,0.2)',
              fontSize: 7.5, fontWeight: 800,
              color: i === 2 ? 'white' : i < 2 ? 'hsl(150,28%,22%)' : 'hsl(30,15%,55%)',
            }}>
              {i < 2 ? '✓' : i + 25}
            </div>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 8, fontWeight: 800, color: 'hsl(150,28%,22%)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Hoje — Quarta-feira</p>
      {tasks.map((t, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'white', borderRadius: 10, padding: '9px 11px', marginBottom: 7 }}>
          <div style={{ width: 16, height: 16, borderRadius: '50%', background: t.done ? 'hsl(150,28%,22%)' : 'transparent', border: t.done ? 'none' : '1.5px solid hsl(37,34%,54%,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            {t.done && <span style={{ color: 'white', fontSize: 9 }}>✓</span>}
          </div>
          <span style={{ fontSize: 12 }}>{t.icon}</span>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 9, fontWeight: 700, color: t.done ? 'hsl(30,15%,55%)' : 'hsl(150,28%,22%)', textDecoration: t.done ? 'line-through' : 'none' }}>{t.name}</p>
            <p style={{ fontSize: 8, color: 'hsl(37,34%,54%)', fontWeight: 600 }}>{t.time}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

function ProgressScreen() {
  const symptoms = [
    { name: 'Fogachos', before: 9, after: 3 },
    { name: 'Insônia', before: 8, after: 2 },
    { name: 'Névoa Mental', before: 7, after: 3 },
    { name: 'Irritação', before: 8, after: 2 },
  ];
  return (
    <motion.div
      key="progress"
      initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.32 }}
      style={{ padding: '14px', height: '100%', overflowY: 'hidden', fontFamily: 'system-ui, sans-serif' }}
    >
      <p style={{ fontSize: 9, color: 'hsl(37,34%,54%)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 2 }}>Evolução</p>
      <p style={{ fontSize: 15, fontWeight: 800, color: 'hsl(150,28%,22%)', fontFamily: 'Georgia, serif', marginBottom: 10 }}>Meu Progresso 📈</p>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6, marginBottom: 11 }}>
        {[['28', 'dias'], ['−63%', 'sintomas'], ['Sem. 4', 'protocolo']].map(([val, label], i) => (
          <div key={i} style={{ background: i === 1 ? 'hsl(150,28%,22%)' : 'white', borderRadius: 10, padding: '8px 5px', textAlign: 'center', border: i !== 1 ? '1px solid hsl(37,34%,54%,0.2)' : 'none' }}>
            <p style={{ fontSize: 12, fontWeight: 800, color: i === 1 ? 'hsl(37,44%,72%)' : 'hsl(150,28%,22%)', fontFamily: 'Georgia, serif' }}>{val}</p>
            <p style={{ fontSize: 7.5, color: i === 1 ? 'rgba(255,255,255,0.7)' : 'hsl(30,15%,50%)', fontWeight: 600 }}>{label}</p>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 8, fontWeight: 800, color: 'hsl(150,28%,22%)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Intensidade dos Sintomas</p>
      {symptoms.map((s, i) => (
        <div key={i} style={{ marginBottom: 8 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
            <p style={{ fontSize: 8.5, fontWeight: 700, color: 'hsl(150,28%,22%)' }}>{s.name}</p>
            <p style={{ fontSize: 8, color: 'hsl(37,34%,54%)', fontWeight: 700 }}>{s.before} → {s.after}</p>
          </div>
          <div style={{ height: 6, background: 'hsl(150,20%,88%)', borderRadius: 3, position: 'relative' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${(s.before / 10) * 100}%`, background: 'hsl(0,60%,72%,0.35)', borderRadius: 3 }} />
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${(s.after / 10) * 100}%`, background: 'hsl(150,28%,38%)', borderRadius: 3 }} />
          </div>
        </div>
      ))}

      <div style={{ marginTop: 8, background: 'linear-gradient(135deg, hsl(37,44%,58%), hsl(37,34%,48%))', borderRadius: 10, padding: '9px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 18 }}>🏆</span>
        <div>
          <p style={{ fontSize: 9.5, fontWeight: 800, color: 'white' }}>4 semanas consecutivas!</p>
          <p style={{ fontSize: 8, color: 'rgba(255,255,255,0.8)' }}>Continue o protocolo</p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────── PHONE FRAME ─────────────── */

function AppMockup() {
  const [screen, setScreen] = useState(0);
  const screenLabels = ['Início', 'Receita', 'SOS', 'Diário', 'Semana', 'Progresso'];

  useEffect(() => {
    const t = setInterval(() => setScreen(s => (s + 1) % 6), 3800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* Phone */}
      <div style={{
        width: 260,
        height: 520,
        background: '#1C1C1E',
        borderRadius: 44,
        padding: '10px 7px 14px',
        boxShadow: '0 40px 80px rgba(0,0,0,0.32), 0 0 0 1.5px #3a3a3c, inset 0 0 0 1px rgba(255,255,255,0.06)',
        position: 'relative',
      }}>
        {/* Side buttons */}
        <div style={{ position: 'absolute', left: -3, top: 100, width: 3, height: 32, background: '#3a3a3c', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', left: -3, top: 142, width: 3, height: 32, background: '#3a3a3c', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', right: -3, top: 120, width: 3, height: 48, background: '#3a3a3c', borderRadius: '0 2px 2px 0' }} />

        {/* Screen */}
        <div style={{
          width: '100%', height: '100%',
          background: 'hsl(40,30%,96%)',
          borderRadius: 36, overflow: 'hidden', position: 'relative',
        }}>
          {/* Status bar */}
          <div style={{
            background: 'hsl(150,28%,20%)',
            padding: '9px 16px 7px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <span style={{ color: 'white', fontSize: 10, fontWeight: 700, fontFamily: 'system-ui' }}>9:41</span>
            {/* Dynamic island */}
            <div style={{ width: 60, height: 10, background: '#1C1C1E', borderRadius: 10 }} />
            {/* Battery/signal */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <div style={{ display: 'flex', gap: 1.5, alignItems: 'flex-end' }}>
                {[4, 6, 8, 10].map((h, i) => (
                  <div key={i} style={{ width: 2.5, height: h, background: i < 3 ? 'white' : 'rgba(255,255,255,0.4)', borderRadius: 1 }} />
                ))}
              </div>
              <div style={{ width: 18, height: 9, border: '1.5px solid rgba(255,255,255,0.7)', borderRadius: 2, position: 'relative' }}>
                <div style={{ position: 'absolute', left: 1.5, top: 1.5, bottom: 1.5, right: 4, background: 'white', borderRadius: 1 }} />
                <div style={{ position: 'absolute', right: -2.5, top: 2.5, width: 2, height: 4, background: 'rgba(255,255,255,0.7)', borderRadius: 1 }} />
              </div>
            </div>
          </div>

          {/* App nav label */}
          <div style={{
            background: 'hsl(150,28%,22%)',
            padding: '5px 14px 7px',
            display: 'flex', alignItems: 'center', gap: 7,
          }}>
            <span style={{ fontSize: 10 }}>🌿</span>
            <span style={{ fontSize: 9.5, color: 'hsl(37,34%,74%)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>PROTOCOLO NATIVA</span>
          </div>

          {/* Screen content */}
          <div style={{ flex: 1, height: 'calc(100% - 80px)', position: 'relative' }}>
            <AnimatePresence mode="wait">
              {screen === 0 && <HomeScreen />}
              {screen === 1 && <RecipeScreen />}
              {screen === 2 && <SOSScreen />}
              {screen === 3 && <DiaryScreen />}
              {screen === 4 && <ScheduleScreen />}
              {screen === 5 && <ProgressScreen />}
            </AnimatePresence>
          </div>

          {/* Home bar */}
          <div style={{
            position: 'absolute', bottom: 6, left: '50%', transform: 'translateX(-50%)',
            width: 80, height: 4, background: 'rgba(0,0,0,0.2)', borderRadius: 2,
          }} />
        </div>
      </div>

      {/* Screen dots + labels */}
      <div className="flex items-center gap-3 mt-6 flex-wrap justify-center" style={{ maxWidth: 280 }}>
        {screenLabels.map((label, i) => (
          <button
            key={i}
            onClick={() => setScreen(i)}
            className="flex flex-col items-center gap-1.5 group"
          >
            <div style={{
              width: i === screen ? 20 : 6, height: 6, borderRadius: 4,
              background: i === screen ? 'hsl(var(--brass))' : 'hsl(var(--brass) / 0.28)',
              transition: 'all 0.35s',
            }} />
            <span
              className="font-body text-[0.58rem] tracking-widest uppercase transition-all"
              style={{ color: i === screen ? 'hsl(var(--forest))' : 'hsl(var(--charcoal) / 0.45)', fontWeight: i === screen ? 700 : 400 }}
            >
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─────────────── MAIN SECTION ─────────────── */

export function Solution() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="solution" ref={ref} className="py-20 lg:py-28" style={{ background: 'hsl(var(--parchment))' }}>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Text */}
        <motion.div
          className="flex flex-col gap-7"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow">A SOLUÇÃO</span>
          <h2 className="font-display text-3xl lg:text-[2.2rem] leading-tight" style={{ color: 'hsl(var(--forest))' }}>
            O Protocolo Nativa é um aplicativo que{' '}
            <span className="kw">decodifica a sabedoria ancestral</span>{' '}
            e entrega{' '}
            <span className="kw-strong">o controle do seu corpo de volta às suas mãos</span>{' '}
            — natural e seguro.
          </h2>
          <p className="font-body font-light leading-[1.85]" style={{ color: 'hsl(var(--charcoal))' }}>
            Não é apenas um guia de receitas. É{' '}
            <span className="kw-strong">saúde integrativa na palma da mão</span>: pare de ser refém de hormônios sintéticos e retome o comando com{' '}
            <span className="kw">precisão ancestral + tecnologia moderna</span>.
          </p>

          <ul className="flex flex-col gap-4 mt-2">
            {benefits.map((b, i) => (
              <motion.li
                key={i}
                className="flex gap-3 items-start"
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              >
                <LeafBullet />
                <div>
                  <span className="font-body font-semibold" style={{ color: 'hsl(var(--forest))' }}>{b.title}</span>
                  <span className="font-body font-light" style={{ color: 'hsl(var(--charcoal))' }}> — {b.desc}</span>
                </div>
              </motion.li>
            ))}
          </ul>

          <div className="flex items-center gap-3 mt-2 pt-6" style={{ borderTop: '1px solid hsl(var(--brass) / 0.2)' }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="3" y="2" width="14" height="16" rx="2" stroke="hsl(37,34%,54%)" strokeWidth="1"/>
              <circle cx="10" cy="15" r="1" fill="hsl(37,34%,54%)"/>
            </svg>
            <span className="font-body font-light text-sm italic" style={{ color: 'hsl(var(--charcoal))' }}>Compatível com iOS e Android</span>
          </div>
        </motion.div>

        {/* App Mockup */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <AppMockup />
        </motion.div>
      </div>
    </section>
  );
}
