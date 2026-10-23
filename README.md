# Anjali Beauty Parlour — Mundgod (Luxury Aesthetics & Beauty Landing Page)

A bespoke, high-converting, luxury aesthetic clinic website built with **React, Vite, and Tailwind CSS**, optimized for immediate deployment on **Vercel**.

## 🌟 Brand & Design Philosophy
- **Editorial High-End Aesthetic**: Deep Charcoal/Obsidian (`#08080C`, `#121217`), Metallic Champagne Gold (`#D4AB4F`, `#C59632`), Cashmere Cream glassmorphism, and Playfair Display / Cinzel typography.
- **Countering Hygiene Concerns**: Features an official **Hygiene & Safety Charter** detailing 100% autoclave sterilization, disposable single-use needles unsealed in front of clients, and dermatologically tested pigments.
- **Conversion-Driven**: Seamless **WhatsApp Direct Booking API** integration with pre-filled consultation forms, a floating WhatsApp widget, and a sticky mobile conversion bar for Instagram traffic.

---

## 💎 Key Features & Sections
1. **Sticky Transparent-to-Blur Navbar**: Gold monogram emblem, quick navigation, Hygiene Charter trigger, and direct booking CTA.
2. **Cinematic Hero**: "Enhance Your Beauty, Enhance Your Confidence", 4.9★ social proof floating badge, 100% sterile protocol badge, and consultation booking.
3. **Trust & Hygiene Bar**: 4-pillar medical safety commitment (Autoclave Sterilization, US FDA Compliant Pigments, Certified Specialists, Bespoke Skin Consultation) + interactive protocol modal.
4. **Signature Treatments Grid**:
   - **Brow & Eye Tattoo** (Microblading / Ombre powder brows)
   - **Painless Mole Removal** (Scar-free plasma precision)
   - **Lip Colour / Lip Blush** (Natural rose tint)
   - **BB Glow Treatment** (Meso glass-skin infusion)
   - *Tabbed switcher for Classic Bridal & Salon services*
5. **Interactive Before & After Comparison Slider**: Draggable handle allowing clients to compare transformations before and after healing.
6. **Pricing & Packages**:
   - **Special Offer Banner**: "Glow Today, Shine Everyday! - 20% OFF on first-time BB Glow & Brow Styling"
   - 3 Curated Packages: *Aesthetic Glow Starter*, *The Royal Anjali Signature (Most Popular)*, and *Ultimate Bridal Renaissance*.
7. **Our Work Gallery**: Categorized portfolio with hover-zoom and full lightbox preview.
8. **Why Choose Us (About Section)**: Mundgod's premier aesthetic destination narrative, clinical integrity, and master artist credentials.
9. **Verified Client Testimonials**: 5-star "Safe Bubble" reviews praising spotless hygiene, gentle hands, and natural results.
10. **Interactive Booking Form & Location**: Direct WhatsApp message generation, operating hours (10:00 AM – 7:30 PM), and embedded Google Map for Mundgod.
11. **Mobile Bottom Conversion Bar**: Sticky 1-tap "WhatsApp" & "Book Now" buttons for mobile visitors.

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
```

Visit [http://localhost:5173/](http://localhost:5173/) in your browser.

---

## ⚡ Deployment to Vercel

The project includes `vercel.json` configured for single-page applications.

### Option 1: Vercel CLI
```bash
npx vercel
```

### Option 2: GitHub Integration
1. Push this repository to GitHub.
2. Go to [Vercel Dashboard](https://vercel.com) and click **"Add New Project"**.
3. Select your repository.
4. Framework Preset will be automatically detected as **Vite**.
5. Click **"Deploy"**.

---

## 🛠️ Customization Guide

All salon details, pricing, phone numbers, and services are centralized in [`src/data/content.js`](./src/data/content.js):
- **WhatsApp Number**: Change `whatsappNumber` to receive bookings directly on your business phone.
- **Instagram**: Update `instagram` and `instagramUrl`.
- **Prices & Packages**: Edit the `PACKAGES` or `PRIMARY_SERVICES` arrays.
- **Photos**: Drop new high-resolution client photos into `/public/images/`.
"# anjali_beauty_parlour" 
