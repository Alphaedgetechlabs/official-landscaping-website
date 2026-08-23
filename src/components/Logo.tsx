import arrowImage from "@/assets/arrow_new.webp";

interface LogoProps {
  /** Font size in px for the wordmark (arrow scales at 1.08em) */
  size?: number;
  /** Use light colors for dark backgrounds */
  inverted?: boolean;
  /** Whether to render the arrow asset (default true) */
  showArrow?: boolean;
  className?: string;
}

const Logo = ({ size = 30, inverted = false, showArrow = true, className }: LogoProps) => (
  <span
    className={`inline-flex items-center leading-none ${className ?? ""}`}
    style={{
      fontFamily: "Montserrat, Poppins, ui-sans-serif, system-ui, sans-serif",
      fontSize: `${size}px`,
    }}
  >
    <span className="flex items-baseline tracking-tight">
      <span style={{ color: "#FF6A1C", fontWeight: 700 }}>Quote</span>
      <span
        style={{
          color: inverted ? "#D6D6D6" : "#666666",
          fontWeight: 500,
          fontSize: "1em",
          transform: "translateY(0.03em)",
        }}
      >
        My
      </span>
      <span style={{ color: inverted ? "#FFFFFF" : "#333333", fontWeight: 700 }}>
        Landscaping
      </span>
    </span>
    <img
      src={arrowImage}
      alt=""
      aria-hidden="true"
      className="ml-[0.5cm] h-[1.08em] w-auto"
    />
  </span>
);

export default Logo;
