"use client";

import { useState, useRef, useEffect } from "react";

function MeemaAvatar({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="robotBg" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#9BC4BE" />
          <stop offset="100%" stopColor="#3D2B35" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="32" r="32" fill="url(#robotBg)" />
      <line x1="32" y1="10" x2="32" y2="17" stroke="#C4DED8" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="9" r="2.5" fill="#ffcc00" />
      <rect x="18" y="17" width="28" height="22" rx="5" fill="#F0EDE8" />
      <rect x="22" y="23" width="8" height="6" rx="2" fill="#3D2B35" />
      <rect x="34" y="23" width="8" height="6" rx="2" fill="#3D2B35" />
      <rect x="23" y="24" width="3" height="2" rx="1" fill="#9BC4BE" opacity="0.8" />
      <rect x="35" y="24" width="3" height="2" rx="1" fill="#9BC4BE" opacity="0.8" />
      <path d="M26 34 Q32 38.5 38 34" stroke="#3D2B35" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <ellipse cx="20" cy="32" rx="2" ry="1.5" fill="#C4897A" opacity="0.5" />
      <ellipse cx="44" cy="32" rx="2" ry="1.5" fill="#C4897A" opacity="0.5" />
      <rect x="12" y="41" width="5" height="10" rx="2.5" fill="#C4DED8" />
      <rect x="19" y="41" width="26" height="12" rx="4" fill="#C4DED8" />
      <circle cx="28" cy="47" r="2" fill="#3D2B35" opacity="0.3" />
      <circle cx="36" cy="47" r="2" fill="#3D2B35" opacity="0.3" />
      <rect x="47" y="41" width="5" height="10" rx="2.5" fill="#C4DED8" />
    </svg>
  );
}

function MeemaIdle() {
  return (
    <svg width="56" height="66" viewBox="0 0 44 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" overflow="visible">
      <g className="idle-body">
        <line x1="22" y1="6" x2="22" y2="13" stroke="#C4DED8" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="22" cy="5" r="2.5" fill="#ffcc00" className="idle-antenna-glow" />
        <rect x="7" y="13" width="28" height="20" rx="5" fill="#F0EDE8" />
        <g className="idle-eye-left">
          <rect x="10" y="18" width="8" height="7" rx="2.5" fill="#3D2B35" />
          <rect x="11" y="19" width="3" height="2.5" rx="1.2" fill="#9BC4BE" opacity="0.85" />
        </g>
        <g className="idle-eye-right">
          <rect x="24" y="18" width="8" height="7" rx="2.5" fill="#3D2B35" />
          <rect x="25" y="19" width="3" height="2.5" rx="1.2" fill="#9BC4BE" opacity="0.85" />
        </g>
        <path d="M14 28 Q22 33 30 28" stroke="#3D2B35" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.4" />
        <ellipse cx="8.5" cy="26" rx="2.2" ry="1.5" fill="#C4897A" opacity="0.5" />
        <ellipse cx="35.5" cy="26" rx="2.2" ry="1.5" fill="#C4897A" opacity="0.5" />
        <rect x="2" y="35" width="4.5" height="11" rx="2.2" fill="#C4DED8" />
        <rect x="9" y="35" width="24" height="14" rx="5" fill="#C4DED8" />
        <circle cx="16" cy="42" r="2.2" fill="#3D2B35" opacity="0.2" />
        <circle cx="26" cy="42" r="2.2" fill="#3D2B35" opacity="0.2" />
        <g className="idle-wave" style={{ transformOrigin: "37px 35px" }}>
          <rect x="35" y="35" width="4.5" height="11" rx="2.2" fill="#C4DED8" />
          <circle cx="37.5" cy="46" r="2.5" fill="#F0EDE8" />
        </g>
      </g>
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true" style={{ flexShrink: 0, opacity: 0.6 }}>
      <path d="M1 8L8 1M8 1H4M8 1V5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function renderInline(text) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

function timestamp() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

const LOADING_MESSAGES = [
  "Reading Mary Shea's mind…",
  "Tapping on Mary Shea's window…",
  "Translating Mary Shea into words…",
  "Time-traveling to ask her directly…",
  "Decoding Mary Shea's dreams…",
  "Doing a little light telepathy…",
  "Riffling through Mary Shea's subconscious…",
  "Borrowing her brain for a moment…",
  "Visiting Mary Shea in the astral plane…",
  "Staring meaningfully into the middle distance…",
  "Communing with the content gods…",
  "Entering the Meemaverse…",
];

const SURPRISE_QUESTIONS = [
  "What's the most technically ambitious thing Mary Shea has built?",
  "How does she think about AI differently from other designers?",
  "What's a problem she solved that nobody else thought to tackle?",
  "How does she bridge the gap between design and engineering?",
  "Tell me something surprising about her background.",
  "What does she mean by 'code-first content design'?",
  "How did a content designer end up shipping AI agents?",
  "What would she say is her most impactful project, and why?",
  "What makes her approach to conversation design unusual?",
];

const CASE_STUDY_ITEMS = [
  {
    label: "Conversation design",
    href: "#",
  },
  {
    label: "Systems design",
    href: "https://open-design-system-content-layer.replit.app/",
    newTab: true,
  },
  {
    label: "UX writing",
    href: "https://www.figma.com/deck/4vrOoUmwNjyl910ZWJbFxG",
    newTab: true,
  },
];

const MORE_ITEMS = [
  { label: "Resume", href: "#" },
  { label: "Contact", href: "mailto:mary.s.valliant@gmail.com" },
];

const PASSWORD = "hiremegoogle!";

export default function Home() {
  const [unlocked, setUnlocked] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("meema_unlocked") === "1") setUnlocked(true);
  }, []);

  function submitPassword(e) {
    e.preventDefault();
    if (passwordInput === PASSWORD) {
      localStorage.setItem("meema_unlocked", "1");
      setUnlocked(true);
    } else {
      setPasswordError(true);
      setPasswordInput("");
    }
  }

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hey! I’m Meema — short for \"Meet Mary Shea\" — an LLM-based chatbot she built to introduce herself. The fact that I exist is kind of the point. What would you like to explore?",
      time: timestamp(),
    },
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const [pillsVisible, setPillsVisible] = useState(true);
  const [loadingMsgIndex, setLoadingMsgIndex] = useState(0);

  const PILLS = [
    "What's the TL;DR on Mary Shea?",
    "How does she approach conversation design?",
    "How did she architect a code-first content system at PayPal?",
    "Tell me how she helped Microsoft evaluate 20+ AI agents",
    "How is she designing PayPal's first agent for businesses?",
    "What AI tools has Mary Shea built for her team?",
  ];
  const bottomRef = useRef(null);
  const textareaRef = useRef(null);
  const pendingBuffer = useRef("");
  const streamDone = useRef(false);
  const typingTimeout = useRef(null);
  const drainRate = useRef(20);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, thinking]);

  useEffect(() => {
    if (!thinking) return;
    setLoadingMsgIndex(Math.floor(Math.random() * LOADING_MESSAGES.length));
    const interval = setInterval(() => {
      setLoadingMsgIndex((i) => (i + 1) % LOADING_MESSAGES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [thinking]);

  function handleSurprise() {
    const q = SURPRISE_QUESTIONS[Math.floor(Math.random() * SURPRISE_QUESTIONS.length)];
    sendText(q);
  }

  function handleNavClick(e, item) {
    if (item.href?.startsWith("mailto:")) return;
    e.preventDefault();
    if (item.newTab) {
      window.open(item.href, "_blank", "noopener noreferrer");
    }
  }

  function tick() {
    if (pendingBuffer.current.length > 0) {
      const char = pendingBuffer.current[0];
      pendingBuffer.current = pendingBuffer.current.slice(1);
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          ...updated[updated.length - 1],
          content: updated[updated.length - 1].content + char,
        };
        return updated;
      });
      typingTimeout.current = setTimeout(tick, drainRate.current);
    } else if (!streamDone.current) {
      typingTimeout.current = setTimeout(tick, drainRate.current);
    } else {
      typingTimeout.current = null;
    }
  }

  function startTypingDrain() {
    if (typingTimeout.current) return;
    typingTimeout.current = setTimeout(tick, drainRate.current);
  }

  async function sendText(text) {
    if (!text || thinking) return;
    setPillsVisible(false);

    pendingBuffer.current = "";
    streamDone.current = false;
    drainRate.current = 20;
    if (typingTimeout.current) {
      clearTimeout(typingTimeout.current);
      typingTimeout.current = null;
    }

    const userMsg = { role: "user", content: text, time: timestamp() };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setThinking(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.map(({ role, content }) => ({ role, content })),
        }),
      });

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      const BUFFER_THRESHOLD = 200;
      let drainStarted = false;

      function kickoffDrain() {
        if (drainStarted) return;
        drainStarted = true;
        const buffered = pendingBuffer.current.length;
        drainRate.current = Math.max(6, Math.min(16, Math.floor(2000 / Math.max(buffered, 100))));
        setMessages((prev) => [...prev, { role: "assistant", content: "", time: timestamp() }]);
        setThinking(false);
        startTypingDrain();
      }

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        pendingBuffer.current += decoder.decode(value);
        if (!drainStarted && pendingBuffer.current.length >= BUFFER_THRESHOLD) {
          kickoffDrain();
        }
      }

      streamDone.current = true;
      kickoffDrain();
    } catch {
      streamDone.current = true;
      if (typingTimeout.current) {
        clearTimeout(typingTimeout.current);
        typingTimeout.current = null;
      }
      setThinking(false);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Something went wrong. Try again.", time: timestamp() },
      ]);
    }
  }

  async function send() {
    const text = input.trim();
    if (!text || thinking) return;
    setInput("");
    await sendText(text);
  }

  function onKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  if (!unlocked) {
    return (
      <div className="password-overlay">
        <div className="password-modal">
          <MeemaIdle />
          <h1 className="sidebar-name" style={{ alignSelf: "center", marginTop: 8 }}>Meema</h1>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, color: "#B08898", textAlign: "center", margin: 0 }}>Enter the password to continue</p>
          <form onSubmit={submitPassword} className="password-form">
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => { setPasswordInput(e.target.value); setPasswordError(false); }}
              placeholder="Password"
              autoFocus
              className="password-input"
            />
            {passwordError && <p className="password-error">Incorrect password</p>}
            <button type="submit" className="send-btn" style={{ width: "100%" }}>Enter</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="meema-cartwheel-wrap">
          <MeemaIdle />
        </div>
        <h1 className="sidebar-name">Meema</h1>
        <h2 className="sidebar-tagline">Most designers build a portfolio. Mary Shea built an AI.</h2>
        <h3 className="sidebar-intro">Welcome to the &lsquo;Meet Mary Shea&rsquo; experience, or &lsquo;Meema&rsquo; for short. It&rsquo;s a portfolio that talks back.</h3>
        <p className="sidebar-intro">Her work, in (mostly) her words. Just ask.</p>

        <button
          className="sidebar-chat-btn"
          onClick={() => textareaRef.current?.focus()}
        >
          Chat with Meema
        </button>

        <nav className="sidebar-nav" aria-label="Portfolio links">
          <span className="sidebar-nav-label">Case studies</span>
          {CASE_STUDY_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="sidebar-link"
              onClick={(e) => handleNavClick(e, item)}
            >
              {item.label}
              {item.newTab && <ExternalLinkIcon />}
            </a>
          ))}
          <span className="sidebar-nav-label">More</span>
          {MORE_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="sidebar-link"
              onClick={(e) => handleNavClick(e, item)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="sidebar-disclaimer">
          <a href="mailto:mary.s.valliant@gmail.com" className="sidebar-feedback-btn">Submit feedback</a>
          <p>Meema is AI and may occasionally make mistakes. Please verify responses via the links above.</p>
          <p>Mary Shea does not keep any individual user&rsquo;s data. She&rsquo;s working on APIs for a more elegant feedback module and conversation logs. More coming soon!</p>
        </div>

        <div className="sidebar-footer">Powered by Claude Code and coffee</div>
      </aside>

      <main className="main" aria-label="Meema — Meet Mary Shea">
        <div
          className="messages"
          role="log"
          aria-live="polite"
          aria-label="Conversation with Meema"
          aria-busy={thinking}
        >
          {messages.map((msg, i) => msg.role === "assistant" && !msg.content ? null : (
            <div key={i} className={`message ${msg.role}`}>
              <div className="message-meta" aria-hidden="true">
                {msg.role === "assistant" && <MeemaAvatar size={20} />}
                {msg.role === "assistant" ? "Meema" : "You"} &middot; {msg.time}
              </div>
              <div
                className="bubble"
                role="article"
                aria-label={`${msg.role === "assistant" ? "Meema" : "You"} at ${msg.time}`}
              >
                {msg.content.split("\n\n").map((block, j, arr) => {
                  const mb = j < arr.length - 1 ? "0.6em" : 0;
                  if (block.startsWith("## ")) {
                    return (
                      <p key={j} style={{ fontWeight: 500, marginBottom: "0.3em", color: "#2E6B5A" }}>
                        {block.replace(/^## /, "")}
                      </p>
                    );
                  }
                  const lines = block.split("\n");
                  const isList = lines.length > 1 && lines.every((l) => l.trim().startsWith("- "));
                  if (isList) {
                    return (
                      <ul key={j} style={{ marginBottom: mb, paddingLeft: "1.2em" }}>
                        {lines.map((l, k) => <li key={k}>{renderInline(l.trim().replace(/^- /, ""))}</li>)}
                      </ul>
                    );
                  }
                  return <p key={j} style={{ marginBottom: mb }}>{renderInline(block)}</p>;
                })}
              </div>
            </div>
          ))}
          {pillsVisible && (
            <div className="pills" role="list" aria-label="Suggested questions">
              {PILLS.map((pill, i) => (
                <button
                  key={i}
                  className="pill"
                  role="listitem"
                  onClick={() => sendText(pill)}
                  disabled={thinking}
                >
                  {pill}
                </button>
              ))}
            </div>
          )}
          {thinking && (
            <div className="bounce-wrap" aria-live="polite" aria-label="Meema is thinking">
              <span className="bounce-robot" aria-hidden="true">
                <MeemaAvatar size={32} />
              </span>
              <span key={loadingMsgIndex} className="bounce-label">{LOADING_MESSAGES[loadingMsgIndex]}</span>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="input-area">
          <div className="input-row">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="What would you like to know about Mary Shea?"
              rows={1}
              disabled={thinking}
              aria-label="Message input"
            />
            <button
              className="send-btn"
              onClick={send}
              disabled={thinking || !input.trim()}
              aria-label="Send message"
            >
              SEND
            </button>
          </div>
          <button
            className="surprise-btn"
            onClick={handleSurprise}
            disabled={thinking}
            aria-label="Ask a random question about Mary Shea"
          >
            ✦ Surprise me
          </button>
        </div>
      </main>
    </div>
  );
}
