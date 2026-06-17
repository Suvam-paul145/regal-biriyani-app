/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
              "brand-maroon": "#4B0000",
              "brand-gold": "#D4AF37",
              "brand-amber": "#FFB347",
              "brand-brown": "#2E1B12",
              "brand-black": "#0B0B0B",
              "on-surface": "#1e1b14",
              "spice-red": "#B91C1C",
              "on-secondary": "#ffffff",
              "text-dark": "#1F1A17",
              "secondary-container": "#ffc641",
              "surface-white": "#FFFFFF",
              "surface-container-low": "#faf3e7",
              "surface-container-high": "#eee7dc",
              "tertiary": "#361f00",
              "outline-variant": "#dbc0be",
              "inverse-on-surface": "#f7f0e4",
              "surface-container-highest": "#e8e2d6",
              "on-secondary-container": "#715300",
              "on-secondary-fixed-variant": "#5c4300",
              "primary-fixed": "#ffdad7",
              "fresh-green": "#2F7D32",
              "secondary-fixed": "#ffdfa0",
              "surface-container": "#f4ede1",
              "primary": "#4d070b",
              "on-secondary-fixed": "#261a00",
              "secondary-fixed-dim": "#f6be39",
              "text-muted": "#6B5E55",
              "surface-variant": "#e8e2d6",
              "on-tertiary-container": "#e39100",
              "on-error": "#ffffff",
              "secondary": "#795900",
              "error-container": "#ffdad6",
              "surface-bright": "#fff9ef",
              "on-tertiary-fixed": "#2a1700",
              "on-primary-container": "#f0847f",
              "on-surface-variant": "#554241",
              "on-primary": "#ffffff",
              "inverse-primary": "#ffb3ae",
              "primary-container": "#6b1e1e",
              "on-tertiary-fixed-variant": "#653e00",
              "background": "#fff9ef",
              "surface-dim": "#e0d9ce",
              "on-tertiary": "#ffffff",
              "outline": "#887270",
              "on-background": "#1e1b14",
              "error": "#ba1a1a",
              "tertiary-container": "#533200",
              "border-soft": "#E8D8B8",
              "surface-container-lowest": "#ffffff",
              "surface-tint": "#9b423f",
              "primary-fixed-dim": "#ffb3ae",
              "on-primary-fixed": "#410005",
              "tertiary-fixed": "#ffddb8",
              "on-primary-fixed-variant": "#7d2b2a",
              "tertiary-fixed-dim": "#ffb95f",
              "inverse-surface": "#333028",
              "on-error-container": "#93000a",
              "surface": "#fff9ef"
      },
      "borderRadius": {
              "DEFAULT": "0.25rem",
              "lg": "0.5rem",
              "xl": "0.75rem",
              "full": "9999px"
      },
      "spacing": {
              "section-gap-desktop": "80px",
              "container-max-width": "1280px",
              "gutter": "24px",
              "margin-mobile": "20px",
              "margin-desktop": "120px",
              "base": "8px",
              "section-gap-mobile": "48px"
      },
      "fontFamily": {
              "cormorant": [
                      "Cormorant Garamond",
                      "serif"
              ],
              "poppins": [
                      "Poppins",
                      "sans-serif"
              ],
              "body-md": [
                      "Inter"
              ],
              "label-sm": [
                      "Inter"
              ],
              "label-lg": [
                      "Inter"
              ],
              "headline-lg": [
                      "Playfair Display"
              ],
              "display-lg": [
                      "Playfair Display"
              ],
              "headline-md": [
                      "Playfair Display"
              ],
              "headline-lg-mobile": [
                      "Playfair Display"
              ],
              "body-lg": [
                      "Inter"
              ]
      },
      "fontSize": {
              "body-md": [
                      "16px",
                      {
                              "lineHeight": "24px",
                              "fontWeight": "400"
                      }
              ],
              "label-sm": [
                      "12px",
                      {
                              "lineHeight": "16px",
                              "fontWeight": "500"
                      }
              ],
              "label-lg": [
                      "14px",
                      {
                              "lineHeight": "20px",
                              "letterSpacing": "0.05em",
                              "fontWeight": "600"
                      }
              ],
              "headline-lg": [
                      "40px",
                      {
                              "lineHeight": "48px",
                              "fontWeight": "700"
                      }
              ],
              "display-lg": [
                      "56px",
                      {
                              "lineHeight": "64px",
                              "letterSpacing": "-0.02em",
                              "fontWeight": "700"
                      }
              ],
              "headline-md": [
                      "28px",
                      {
                              "lineHeight": "36px",
                              "fontWeight": "600"
                      }
              ],
              "headline-lg-mobile": [
                      "32px",
                      {
                              "lineHeight": "40px",
                              "fontWeight": "700"
                      }
              ],
              "body-lg": [
                      "18px",
                      {
                              "lineHeight": "28px",
                              "fontWeight": "400"
                      }
              ]
      }
    },
  },
  plugins: [],
}
