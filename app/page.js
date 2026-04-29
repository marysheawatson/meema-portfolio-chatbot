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

function ChevronLeftIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M7.5 2L3.5 6L7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M4.5 2L8.5 6L4.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" aria-hidden="true">
      <line x1="1" y1="1" x2="13" y2="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="1" y1="6" x2="13" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="1" y1="11" x2="13" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path d="M6.5 11V2M2.5 6L6.5 2L10.5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function DiceIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M8.26 1.98 Q10 1 11.74 1.98 L16.26 4.52 Q18 5.5 18 7.5 L18 12.5 Q18 14.5 16.26 15.48 L11.74 18.02 Q10 19 8.26 18.02 L3.74 15.48 Q2 14.5 2 12.5 L2 7.5 Q2 5.5 3.74 4.52 L8.26 1.98 Z"
        fill="white" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
      />
      <line x1="10" y1="10" x2="18" y2="5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="10" y1="10" x2="2" y2="5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="10" y1="10" x2="10" y2="18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="10" cy="5.5" r="1.3" fill="currentColor"/>
      <circle cx="15.5" cy="9" r="1.3" fill="currentColor"/>
      <circle cx="12.5" cy="15" r="1.3" fill="currentColor"/>
      <circle cx="4.5" cy="9" r="1.3" fill="currentColor"/>
      <circle cx="6.5" cy="12" r="1.3" fill="currentColor"/>
      <circle cx="8" cy="15.5" r="1.3" fill="currentColor"/>
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
    href: "https://www.figma.com/slides/XdM231e0EKd03a82jiyJbH/PayPal-Agentic-AI-Interview-Case-Studies?node-id=1-111&t=Z5iOW2nNlFGRT97Q-0",
    newTab: true,
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
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [placeholder, setPlaceholder] = useState("What would you like to know about Mary Shea?");

  useEffect(() => {
    if (localStorage.getItem("meema_unlocked") === "1") setUnlocked(true);
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
      setPlaceholder("Ask about Mary Shea's work");
    }
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
  const pendingFollowups = useRef([]);
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
    setInput(q);
    textareaRef.current?.focus();
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
      if (pendingFollowups.current.length > 0) {
        const followups = pendingFollowups.current;
        pendingFollowups.current = [];
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { ...updated[updated.length - 1], followups };
          return updated;
        });
      }
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

      // Strip [FOLLOWUPS] block before draining
      const followupMarker = "\n[FOLLOWUPS]\n";
      const followupIdx = pendingBuffer.current.indexOf(followupMarker);
      if (followupIdx !== -1) {
        const followupText = pendingBuffer.current.slice(followupIdx + followupMarker.length);
        pendingBuffer.current = pendingBuffer.current.slice(0, followupIdx);
        pendingFollowups.current = followupText
          .split("\n")
          .map((l) => l.replace(/^[-•]\s*/, "").trim())
          .filter(Boolean);
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
            <div className="password-input-wrap">
              <input
                type={passwordVisible ? "text" : "password"}
                value={passwordInput}
                onChange={(e) => { setPasswordInput(e.target.value); setPasswordError(false); }}
                placeholder="Password"
                autoFocus
                className="password-input"
              />
              <button
                type="button"
                className="password-eye"
                onClick={() => setPasswordVisible((v) => !v)}
                aria-label={passwordVisible ? "Hide password" : "Show password"}
              >
                {passwordVisible ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                )}
              </button>
            </div>
            {passwordError && <p className="password-error">Incorrect password</p>}
            <button type="submit" className="send-btn" style={{ width: "100%" }}>Enter</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="layout">
      <aside className={`sidebar${sidebarOpen ? "" : " sidebar-collapsed"}`}>
        <button
          className="sidebar-toggle-close"
          onClick={() => setSidebarOpen((o) => !o)}
          aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
          {sidebarOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </button>
        <div className="meema-cartwheel-wrap">
          <MeemaIdle />
        </div>
        <h1 className="sidebar-name">Meema</h1>
        <h2 className="sidebar-tagline">Most designers build a portfolio. Mary Shea built an AI.</h2>
        <h3 className="sidebar-intro">Welcome to the &lsquo;Meet Mary Shea&rsquo; experience, or &lsquo;Meema&rsquo; for short. It&rsquo;s a portfolio that talks back.</h3>
        <p className="sidebar-intro">Her work, in (mostly) her words. Just ask.</p>

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

      {sidebarOpen && (
        <div
          className="sidebar-backdrop"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      <main className={`main${sidebarOpen ? "" : " sidebar-is-closed"}`} aria-label="Meema — Meet Mary Shea">
        <button
          className="sidebar-toggle-open"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
          style={{ display: sidebarOpen ? "none" : undefined }}
        >
          <MenuIcon />
        </button>
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
              {msg.followups?.length > 0 && (
                <div className="followup-pills">
                  {msg.followups.map((q, k) => (
                    <button key={k} className="pill" onClick={() => sendText(q)} disabled={thinking}>{q}</button>
                  ))}
                </div>
              )}
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
            <div className="input-field-wrap">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                onFocus={() => setTimeout(() => textareaRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 300)}
                placeholder={placeholder}
                rows={1}
                disabled={thinking}
                aria-label="Message input"
              />
              <div className="input-icon-group">
                <button
                  className="input-send-icon"
                  onClick={send}
                  disabled={thinking || !input.trim()}
                  aria-label="Send message"
                  title="Send"
                >
                  <SendIcon />
                </button>
                <button
                  className="input-surprise-icon"
                  onClick={handleSurprise}
                  disabled={thinking}
                  aria-label="Ask a random question about Mary Shea"
                  title="Surprise me"
                >
                  <DiceIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
