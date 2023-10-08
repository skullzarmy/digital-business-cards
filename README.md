# Digital Business Card Web Component

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A customizable web component for generating digital business cards. Easily embed a business card into your web page with various themes and font variants. This component is lightweight, easy to use, and fully customizable.

## Table of Contents

-   [Features](#features)
-   [Getting Started](#getting-started)
-   [Usage](#usage)
-   [Attributes](#attributes)
-   [Themes and Font Variants](#themes-and-font-variants)
-   [QR Code](#qr-code)
-   [Contributing](#contributing)
-   [License](#license)
-   [Contact](#contact)
-   [Acknowledgments](#acknowledgments)

## Features

-   Customizable: Easily change the card's appearance with attributes.
-   Themes: Light and dark themes available.
-   Font Variants: Choose from a variety of font styles.
-   QR Code: Automatically generates a QR code for contact information.
-   Self-contained: No need for external image files; supports Base64 encoded images.

## Getting Started

To get started, include the following script tag in your HTML file:

```html
<script src="https://skullzarmy.github.io/digital-business-cards/digital-business-cards.js"></script>
```

## Prerequisites

No prerequisites are required. The component dynamically loads all necessary resources.

## Installation

Simply include the script in your HTML file, and you're good to go!

```html
<script src="https://skullzarmy.github.io/digital-business-cards/digital-business-cards.js"></script>
```

## Usage

Here's a simple example to embed a digital business card into your web page:

```html
<digital-business-card
    name="John Doe"
    email="johndoe@example.org"
    phone="(555) 555-5555"
    website="https://example.org"
    address="1234 Main St. City ST 001100"
    theme="dark"
    fontVariant="sans"
    imageSrc="data:image/webp;base64,..."
>
</digital-business-card>
```

![Jane Doe dark serif example business card](./Jane-Doe-digital-business-card.png)

![John Doe light sans example business card](./John-Doe-digital-business-card.png)

## Attributes

-   `name`: The name to display on the card.
-   `email`: The email address. Builds mailto link.
-   `phone`: The phone number. Builds tel link.
-   `website`: The website URL. Builds standard href link.
-   `address`: The physical address. Builds link to Google Maps.
-   `theme`: The theme of the card (light or dark).
-   `fontVariant`: The font variant (sans, serif, handwritten, gothic).
-   `imageSrc`: The source for the profile image (supports Base64).
-   `imageShape`: The shape of the image (circle or square).

## Themes and Font Variants

### Themes

-   `light`: Light background with dark text.
-   `dark`: Dark background with light text.

### Font Variants

-   `sans`: Sans-serif font.
-   `serif`: Serif font.
-   `handwritten`: Handwritten-style font.
-   `gothic`: Gothic-style font.

## QR Code

The component automatically generates a QR code based on the provided contact information. Users can scan OR click the QR code to save the contact information to their device via standard vCard v3.0 formatting.

## Contributing

Contributions are welcome! Please read the contributing guidelines first.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Contact

-   **Author**: Joe Peterson
-   **Email**: joe@joepeterson.work
-   **Website**: https://joepeterson.work

## Acknowledgments

-   Google Fonts for providing the font styles.
-   QRCode.js for generating QR codes.

## Generator

TBD: Link to the generator for this component will be added soon.
