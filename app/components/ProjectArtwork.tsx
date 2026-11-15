import { FiPlay, FiTerminal, FiActivity, FiCpu } from "react-icons/fi";

// Editorial illustrations of each project's subject, rather than product screenshots.
export default function ProjectArtwork({ index }: { index: number }) {
  return (
    <div className={`project-art art-${index}`} aria-hidden="true">
      {index === 0 && (
        <div className="video-composition">
          <div className="video-orbit orbit-one" />
          <div className="video-orbit orbit-two" />
          <div className="video-pane">
            <span className="art-label">AUGUST AI</span>
            <div className="video-title">
              An idea.
              <br />A story.
              <br />
              <em>A new perspective.</em>
            </div>
            <div className="video-track">
              <FiPlay />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="floating-tag">
            <FiCpu />
            Powered by imagination
          </div>
        </div>
      )}
      {index === 1 && (
        <>
          <svg viewBox="0 0 500 280" className="medical-art">
            <defs>
              <radialGradient id="scan-glow">
                <stop stopColor="#abf9dc" stopOpacity=".5" />
                <stop offset="1" stopColor="#abf9dc" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="250" cy="140" r="135" fill="url(#scan-glow)" />
            {Array.from({ length: 12 }, (_, i) => (
              <ellipse
                key={i}
                cx="250"
                cy={65 + i * 13}
                rx={35 + Math.sin(i * 0.4) * 38}
                ry="23"
                fill="none"
                stroke="#a1edce"
                strokeOpacity={0.3 + i * 0.045}
                transform={`rotate(-15 250 ${65 + i * 13})`}
              />
            ))}
            <path
              d="M70 140h50l15-30 18 62 18-45 15 13h40M310 140h40l15-30 18 62 18-45 15 13h35"
              stroke="#8ee0c0"
              fill="none"
              opacity=".5"
            />
          </svg>
          <span className="art-corner">
            <FiActivity />
            ANATOMY, RECONSTRUCTED
          </span>
          <span className="art-top">3D / MEDICAL VISUALIZATION</span>
        </>
      )}
      {index === 2 && (
        <>
          <div className="mars-sun" />
          <svg viewBox="0 0 500 280" className="mars-art">
            <path
              d="M0 210L65 180 120 197 210 160 280 180 370 130 500 184V280H0Z"
              fill="#a76145"
            />
            <path
              d="M0 249L100 216 210 238 330 194 500 220V280H0Z"
              fill="#754333"
            />
            <g
              stroke="#fcebd6"
              fill="none"
              strokeWidth="2"
              transform="translate(248 108)"
            >
              <path d="M-16 0L-10-20H10L16 0Z M-26 12L-16 0H16L26 12 M-31 12H-21M21 12H31 M-6 3L0 29 6 3" />
              <path d="M-40-28H40M0-40V-32" opacity=".5" />
            </g>
            <path d="M248 152V195" stroke="#f3c4a3" strokeDasharray="3 5" />
          </svg>
          <span className="art-top">MARS / ENTRY · DESCENT · LANDING</span>
          <span className="art-corner">A softer landing on another world.</span>
        </>
      )}
      {index === 3 && (
        <div className="terminal-window">
          <div className="window-chrome">
            <i />
            <i />
            <i />
            <span>vShell — C / POSIX</span>
          </div>
          <div className="terminal-body">
            <p>
              <span>vishwesh@vshell</span> ~
            </p>
            <p>
              <b>$</b> cat ideas.txt | grep build
            </p>
            <p className="terminal-output">
              Small programs. Powerful possibilities.
            </p>
            <p>
              <b>$</b> ./vshell
            </p>
            <p>Welcome to vShell.</p>
            <p>
              <b>$</b> <span className="terminal-cursor">▋</span>
            </p>
          </div>
          <FiTerminal className="terminal-symbol" />
        </div>
      )}
      {index === 4 && (
        <>
          <svg viewBox="0 0 500 280" className="stars-art">
            {Array.from({ length: 60 }, (_, i) => (
              <circle
                key={i}
                cx={(i * 137 + 21) % 500}
                cy={(i * 79 + 17) % 280}
                r={i % 4 === 0 ? 1.7 : 0.7}
                fill="#fff"
                opacity={0.25 + (i % 6) * 0.12}
              />
            ))}
            <g fill="none" stroke="#c3c1fa" strokeOpacity=".45">
              <ellipse
                cx="250"
                cy="135"
                rx="150"
                ry="45"
                transform="rotate(-25 250 135)"
              />
              <ellipse
                cx="250"
                cy="135"
                rx="125"
                ry="110"
                transform="rotate(-25 250 135)"
              />
              <path d="M100 130L177 87 245 115 318 59 350 145 280 186" />
            </g>
            {[
              [100, 130],
              [177, 87],
              [245, 115],
              [318, 59],
              [350, 145],
              [280, 186],
            ].map(([x, y]) => (
              <circle key={x} cx={x} cy={y} r="3" fill="#eeeaff" />
            ))}
            <circle cx="250" cy="135" r="19" fill="#bbb9f3" />
            <circle cx="245" cy="130" r="19" fill="#252843" />
          </svg>
          <span className="art-top">STAR GAZING / THREE.JS</span>
          <span className="art-corner">A universe worth exploring.</span>
        </>
      )}
      {index === 5 && (
        <>
          <div className="diffusion-frames">
            {[0, 1, 2, 3].map((i) => (
              <div className={`diffusion-frame diffusion-${i}`} key={i}>
                <div />
                <span>0{i + 1}</span>
              </div>
            ))}
          </div>
          <span className="art-top">RESEARCH / DIFFUSION MODELS</span>
          <span className="art-corner">From noise to possibility.</span>
        </>
      )}
    </div>
  );
}
