// TODO: Add social media links to the card. -- support an array of networks and links with icons

/**
 * Digital Business Card Web Component
 * @license MIT
 * @author Joe Peterson
 * @link https://joepeterson.work
 * @year 2023
 */

/**
 * Define the template for the Digital Business Card
 */
const template = document.createElement("template");
template.innerHTML = `
  <style id="dynamic-styles">
  /* CSS Reset */
    :host, :host * {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    :host {
      display: inline-block;
      margin: 14px;
      font-size: var(--general-font-size, 16px);
    }
    .card {
      display: flex;
      align-items: center;
      font-family: var(--font-family, 'Arial, sans-serif');
      border: 1px solid var(--border-color, #ccc);
      padding: 16px;
      width: 400px;
      height: 200px;
      background-color: var(--background-color, #fff);
      color: var(--text-color, #000);
      line-height: 1.5;
      font-size: var(--general-font-size, 16px);
    }
    .text-container {
      display: flex;
      flex-direction: column;
      flex-grow: 2;
    }
    .name-container {
      display: flex;
      align-items: center;
    }
    .image {
      height: 28px;
      width: 28px;
      object-fit: contain;
      margin-right: 10px;
      padding: 0px;
      box-sizing: border-box;
      mask-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="100" height="100" rx="50" ry="50"/></svg>');
      mask-composite: exclude;
    }
    .image.square {
      mask-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="100" height="100"/></svg>');
    }
    .name {
      font-size: var(--name-font-size, 24px);
      font-weight: 700;
      flex-grow: 1;
    }
    .email, .phone, .website, .address {
      margin-top: 8px;
      font-weight: 400;
    }
    .email a, .phone a, .website a, .address a {
      color: inherit;
      text-decoration: none;
    }
    .email a:hover, .phone a:hover, .website a:hover, .address a:hover {
      cursor: pointer;
    }
    .qr-container {
      margin-left: 16px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
    }
    .qr-label {
      font-family: monospace;
      font-size: 5pt;
      text-align: center;
      margin-top: 4px;
      margin-left: auto;
      margin-right: auto;
    }
  </style>
  <div class="card">
    <div class="text-container">
      <div class="name-container">
        <img class="image" style="display: none;" />
        <div class="name"></div>
      </div>
      <div class="phone"></div>
      <div class="email"></div>
      <div class="address"></div>
      <div class="website"></div>
    </div>
    <div class="qr-container"></div>
  </div>
`;

/**
 * DigitalBusinessCard Class
 * @extends HTMLElement
 */
class DigitalBusinessCard extends HTMLElement {
    /**
     * Constructor for DigitalBusinessCard
     */
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // Dynamically inject Google Fonts into the main document
        if (!document.getElementById("digital-business-card-fonts")) {
            const link = document.createElement("link");
            link.id = "digital-business-card-fonts";
            link.rel = "stylesheet";
            link.href =
                "https://fonts.googleapis.com/css2?family=Carrois+Gothic&family=Caveat&family=Rubik&family=Playfair+Display&display=swap";
            document.head.appendChild(link);
        }

        // Dynamically load the QR code library
        const qrScript = document.createElement("script");
        qrScript.src = "https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js";
        qrScript.onload = () => {
            this.qrCodeReady = true;
            this.updateCard();
        };
        document.head.appendChild(qrScript);
    }

    /**
     * List of observed attributes
     * @return {Array} attributes to observe
     */
    static get observedAttributes() {
        return [
            "name",
            "email",
            "phone",
            "website",
            "address",
            "theme",
            "fontVariant",
            "imageSrc",
            "imageShape",
            "fontSize",
        ];
    }

    /**
     * Lifecycle method called when the element is connected to the DOM
     */
    connectedCallback() {
        this.updateCard();
    }

    /**
     * Lifecycle method called when an attribute is changed
     * @param {string} name - Name of the attribute
     * @param {string} oldValue - Old value of the attribute
     * @param {string} newValue - New value of the attribute
     */
    attributeChangedCallback(name, oldValue, newValue) {
        // console.log(`attributeChangedCallback triggered for ${name}`);
        // console.log("Old value:", oldValue);
        // console.log("New value:", newValue);
        if (oldValue !== newValue) {
            this.updateCard();
        }
    }

    /**
     * Update the card based on the attributes
     */
    updateCard() {
        // Handle image
        const imageSrc = this.getAttribute("imageSrc");
        // console.log("Image Src in updateCard:", imageSrc); // Add this line
        const imageShape = this.getAttribute("imageShape");
        const imageElement = this.shadowRoot.querySelector(".image");

        if (imageSrc) {
            imageElement.src = imageSrc;
            imageElement.style.display = "block";
        } else {
            imageElement.style.display = "none";
        }

        if (imageShape === "circle") {
            imageElement.classList.add("circle");
        } else {
            imageElement.classList.remove("square");
        }
        const attributes = ["name", "email", "phone", "website", "address"];
        attributes.forEach((attr) => {
            const value = this.getAttribute(attr);
            let element = this.shadowRoot.querySelector(`.${attr}`);

            if (value) {
                element.style.display = "block"; // Show the element

                switch (attr) {
                    case "email":
                        element.innerHTML = `<a href="mailto:${value}" target="_blank" rel="noopener">${value}</a>`;
                        break;
                    case "phone":
                        element.innerHTML = `<a href="tel:${value}">${value}</a>`;
                        break;
                    case "website":
                        element.innerHTML = `<a href="${value}" target="_blank" rel="noopener">${value}</a>`;
                        break;
                    case "address":
                        const encodedAddress = encodeURIComponent(value);
                        element.innerHTML = `<a href="https://www.google.com/maps/search/?api=1&query=${encodedAddress}" target="_blank" rel="noopener">${value}</a>`;
                        break;
                    default:
                        element.textContent = value;
                        break;
                }
            } else {
                element.style.display = "none"; // Hide the element
            }
        });

        const theme = this.getAttribute("theme") || "light";
        const fontVariant = this.getAttribute("fontVariant") || "sans";
        this.applyTheme(theme, fontVariant);

        if (this.qrCodeReady) {
            this.generateQRCode();
        }
    }

    /**
     * Apply the theme to the card
     * @param {string} theme - Theme name
     * @param {string} fontVariant - Font variant name
     */
    applyTheme(theme, fontVariant) {
        const baseStyles = {
            light: {
                "--background-color": "#fff",
                "--text-color": "#000",
                "--border-color": "#ccc",
            },
            dark: {
                "--background-color": "#333",
                "--text-color": "#fff",
                "--border-color": "#444",
            },
        };

        const fontVariants = {
            sans: {
                "--font-family": "'Rubik', sans-serif",
                "--general-font-size": "16px",
            },
            serif: {
                "--font-family": "'Playfair Display', serif",
                "--general-font-size": "16px",
            },
            handwritten: {
                "--font-family": "'Caveat', cursive",
                "--general-font-size": "20px",
            },
            gothic: {
                "--font-family": "'Carrois Gothic', sans-serif",
                "--general-font-size": "16px",
            },
        };

        const generalFontSize = this.getAttribute("fontSize") || "16px";
        this.shadowRoot.querySelector(".card").style.setProperty("--general-font-size", generalFontSize);

        const finalStyles = { ...baseStyles[theme], ...fontVariants[fontVariant] };

        Object.keys(finalStyles).forEach((cssVar) => {
            this.shadowRoot.querySelector(".card").style.setProperty(cssVar, finalStyles[cssVar]);
        });
    }

    /**
     * Generate QR Code for the contact card
     */
    generateQRCode() {
        // Clear existing QR code if any
        const qrContainer = this.shadowRoot.querySelector(".qr-container");
        qrContainer.innerHTML = "";

        const name = this.getAttribute("name") || "N/A";
        const email = this.getAttribute("email") || "N/A";
        let phone = this.getAttribute("phone") || "N/A";

        // Normalize the phone number by removing non-numeric characters
        phone = phone.replace(/\D/g, "");

        // Generate vCard data
        const vCardData = [
            "BEGIN:VCARD",
            "VERSION:3.0",
            `FN:${name}`,
            `TEL:${phone}`,
            `EMAIL:${email}`,
            "END:VCARD",
        ].join("\n");

        // Create an element to hold the QR code
        const qrCodeElement = document.createElement("div");
        qrContainer.appendChild(qrCodeElement);

        // Generate the QR code
        new QRCode(qrCodeElement, {
            text: vCardData,
            width: 120,
            height: 120,
            colorDark: this.shadowRoot.querySelector(".card").style.getPropertyValue("--text-color"),
            colorLight: this.shadowRoot.querySelector(".card").style.getPropertyValue("--background-color"),
        });

        // Create a Blob from the vCard data
        const vCardBlob = new Blob([vCardData], { type: "text/vcard" });

        // Create an invisible anchor element with a download attribute
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(vCardBlob);
        downloadLink.download = `${name}.vcf`;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);

        // Add click event to the QR code to trigger the download
        qrCodeElement.addEventListener("click", () => {
            downloadLink.click();
            document.body.removeChild(downloadLink);
        });

        // Create and append a label under the QR code
        const qrLabel = document.createElement("span");
        qrLabel.textContent = "Click or scan to save contact";
        qrLabel.classList.add("qr-label");
        qrContainer.appendChild(qrLabel);
    }
}

// Register the custom element
customElements.define("digital-business-card", DigitalBusinessCard);
