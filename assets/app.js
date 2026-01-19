// Bootstrap generale: sceglie la pagina e inizializza le sezioni
document.addEventListener("DOMContentLoaded", () => {
    initGlobal();
    const page = getCurrentPage();

    if (page === "contatti.html") {
        renderContactPage();
        renderFAQ();
        initContactForm();
    } else if (page === "volontariato.html") {
        renderVolunteersPage();
    } else if (page === "galleria.html") {
        renderGalleryPage();
    } else {
        renderHomePage();
        initGallery(); // slider home
    }
});

// --- HELPERS DI BASE ---
// Cache di warning per evitare spam in console quando manca un id
const warnedMissing = new Set();
function logMissing(id) {
    if (warnedMissing.has(id)) return;
    console.warn(`[app] elemento #${id} non trovato`);
    warnedMissing.add(id);
}

// Setta textContent in sicurezza
function setText(id, value) {
    const el = document.getElementById(id);
    if (!el) return logMissing(id);
    el.textContent = value ?? "";
}

// Setta innerHTML (usato solo per HTML fidato)
function setHtml(id, html) {
    const el = document.getElementById(id);
    if (!el) return logMissing(id);
    el.innerHTML = html ?? "";
}

// Setta o rimuove un attributo
function setAttr(id, attr, value) {
    const el = document.getElementById(id);
    if (!el) return logMissing(id);
    if (value === undefined || value === null) {
        el.removeAttribute(attr);
    } else {
        el.setAttribute(attr, value);
    }
}

// Ritorna la pagina corrente (nome file)
function getCurrentPage() {
    const path = window.location.pathname;
    const last = path.split("/").filter(Boolean).pop();
    return last || "index.html";
}

// --- GLOBAL ---
// Imposta titoli/meta/logo e costruisce il menu
function initGlobal() {
    const g = SITE_DATA.general;
    const current = getCurrentPage();
    const labels = {
        "index.html": "Home",
        "contatti.html": "Contatti",
        "volontariato.html": "Il Nucleo",
        "galleria.html": "Galleria"
    };
    const metaDesc = document.querySelector('meta[name="description"]#meta-description') || document.querySelector('meta[name="description"]');
    const metaOgTitle = document.getElementById("meta-og-title");
    const metaOgDesc = document.getElementById("meta-og-description");
    const metaOgImg = document.getElementById("meta-og-image");

    const pageMeta = SITE_DATA.meta?.[current] || {};
    const pageTitle = pageMeta.title || labels[current] || g.headerTitle;
    const pageDesc = pageMeta.description || g.metaDescription;
    const pageOgImg = pageMeta.ogImage || g.ogImage;

    document.title = `${g.siteTitle} | ${pageTitle}`;
    if (metaDesc && pageDesc) metaDesc.setAttribute("content", pageDesc);
    if (metaOgTitle && pageTitle) metaOgTitle.setAttribute("content", `${g.siteTitle} | ${pageTitle}`);
    if (metaOgDesc && pageDesc) metaOgDesc.setAttribute("content", pageDesc);
    if (metaOgImg && pageOgImg) metaOgImg.setAttribute("content", pageOgImg);

    setAttr("header-logo-img", "src", g.logoSrc);
    setAttr("header-logo-img", "alt", g.logoAlt);
    setText("brand-title", g.headerTitle);
    setText("brand-subtitle", g.headerSubtitle);
    setText("footer-copy", g.footerText);

    const navList = document.getElementById("nav-list");
    if (navList) {
        const frag = document.createDocumentFragment();
        SITE_DATA.menu.forEach(item => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = item.link;
            a.textContent = item.label;
            const isRoot = current === "" || current === "index.html";
            const isActive = item.link === current || (item.link === "index.html" && isRoot) || window.location.pathname.endsWith(item.link);
            if (isActive) a.classList.add("active");
            li.appendChild(a);
            frag.appendChild(li);
        });
        navList.replaceChildren(frag);
    }

    const menuBtn = document.getElementById("mobile-menu-btn");
    const nav = document.querySelector(".main-nav");
    if (menuBtn && nav) {
        menuBtn.addEventListener("click", () => {
            nav.classList.toggle("open");
            menuBtn.setAttribute("aria-expanded", nav.classList.contains("open"));
            menuBtn.innerHTML = nav.classList.contains("open") ? '<i class="fa-solid fa-times"></i>' : '<i class="fa-solid fa-bars"></i>';
        });
    }
}

// --- HOME ---
// Costruisce la home con hero, numeri, cosa facciamo, slider e about
function renderHomePage() {
    const h = SITE_DATA.home;
    if (!document.getElementById("hero-title")) return;

    // Hero + CTA
    const heroWrapper = document.getElementById("hero-img-wrapper");
    if (heroWrapper && h.hero.image) {
        const img = document.createElement("img");
        img.src = h.hero.image;
        img.alt = "Foto Gruppo";
        img.loading = "eager";
        img.decoding = "async";
        img.fetchPriority = "high";
        heroWrapper.style.display = "block";
        heroWrapper.replaceChildren(img);
    }
    setText("hero-title", h.hero.title);
    setText("hero-subtitle", h.hero.subtitle);
    setText("hero-cta", h.hero.ctaText);
    setAttr("hero-cta", "href", h.hero.ctaLink);
    setText("hero-cta-secondary", h.hero.ctaSecondaryText);
    setAttr("hero-cta-secondary", "href", h.hero.ctaSecondaryLink);
    setText("hero-cta-five", h.hero.ctaFiveText);
    setAttr("hero-cta-five", "href", h.hero.ctaFiveLink);

    // Numeri
    const statsContainer = document.getElementById("stats-grid");
    if (statsContainer && h.stats) {
        const frag = document.createDocumentFragment();
        h.stats.forEach(stat => {
            const card = document.createElement("div");
            card.className = "stat-card";
            const num = document.createElement("span");
            num.className = "stat-number";
            num.textContent = stat.number ?? "";
            const label = document.createElement("span");
            label.className = "stat-label";
            label.textContent = stat.label ?? "";
            card.append(num, label);
            frag.appendChild(card);
        });
        statsContainer.replaceChildren(frag);
    }

    // Cosa facciamo
    setText("what-title", h.whatWeDo.title);
    setText("what-intro", h.whatWeDo.intro);
    const whatGrid = document.getElementById("what-grid");
    if (whatGrid && h.whatWeDo.items) {
        const frag = document.createDocumentFragment();
        h.whatWeDo.items.forEach(item => {
            const card = document.createElement("div");
            card.className = "do-card";
            const icon = document.createElement("i");
            icon.className = `${item.icon} do-icon`;
            const h3 = document.createElement("h3");
            h3.textContent = item.title ?? "";
            const p = document.createElement("p");
            p.textContent = item.text ?? "";
            card.append(icon, h3, p);
            frag.appendChild(card);
        });
        whatGrid.replaceChildren(frag);
    }

    // Galleria slider (home)
    setText("gallery-title", h.gallery.title);
    setText("gallery-subtitle", h.gallery.subtitle);
    setText("gallery-cta", h.gallery.viewAllText);
    setAttr("gallery-cta", "href", h.gallery.viewAllLink);

    const galleryTrack = document.getElementById("gallery-track");
    if (galleryTrack && h.gallery.images) {
        const frag = document.createDocumentFragment();
        h.gallery.images.forEach(src => {
            const item = document.createElement("div");
            item.className = "gallery-item";
            const img = document.createElement("img");
            img.src = src;
            img.alt = "Foto Attività";
            img.loading = "lazy";
            img.sizes = "(max-width: 768px) 80vw, 320px";
            item.appendChild(img);
            frag.appendChild(item);
        });
        galleryTrack.replaceChildren(frag);
    }

    // Perché iscriversi
    setText("join-title", h.whyJoin.title);
    setText("join-cta", h.whyJoin.ctaText);
    setAttr("join-cta", "href", h.whyJoin.ctaLink);
    setText("join-helper", h.whyJoin.helper);
    const joinList = document.getElementById("join-list");
    if (joinList && h.whyJoin.reasons) {
        const frag = document.createDocumentFragment();
        h.whyJoin.reasons.forEach(reason => {
            const li = document.createElement("li");
            const icon = document.createElement("i");
            icon.className = "fa-solid fa-check";
            li.append(icon, ` ${reason}`);
            frag.appendChild(li);
        });
        joinList.replaceChildren(frag);
    }

    // About
    setText("about-title", h.about.sectionTitle);
    setText("about-p1", h.about.paragraph1);
    setText("about-p2", h.about.paragraph2);
    setHtml("about-sig", h.about.signature);

    // 5x1000
    if (h.fivex1000) {
        setText("five-title", h.fivex1000.title);
        setText("five-text", h.fivex1000.text);
        setText("five-code", h.fivex1000.fiscalCode);
    }
}

// --- GALLERIA COMPLETA ---
// Costruisce la griglia archivio
function renderGalleryPage() {
    const g = SITE_DATA.fullGallery;
    const grid = document.getElementById("full-gallery-grid");
    if (!grid) return;

    setText("page-title", g.title);
    setText("page-intro", g.intro);

    const frag = document.createDocumentFragment();
    if (g.images && g.images.length > 0) {
        g.images.forEach(src => {
            const item = document.createElement("div");
            item.className = "gallery-page-item";
            const img = document.createElement("img");
            img.src = src;
            img.alt = "Foto Archivio";
            img.loading = "lazy";
            img.sizes = "(max-width: 768px) 100vw, 250px";
            item.appendChild(img);
            frag.appendChild(item);
        });
        grid.replaceChildren(frag);
    } else {
        grid.innerHTML = "<p>Nessuna foto presente in archivio.</p>";
    }
}

// Slider home: step dinamico, dots e sync con scroll
function initGallery() {
    const track = document.getElementById("gallery-track");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    if (!track || !prevBtn || !nextBtn) return;

    const items = Array.from(track.children);
    let currentIndex = 0;

    const stepSize = () => {
        const item = items[0];
        const gap = parseInt(getComputedStyle(track).gap || "0", 10) || 0;
        return (item ? item.getBoundingClientRect().width : 320) + gap;
    };

    const scrollToIndex = (idx) => {
        currentIndex = Math.max(0, Math.min(items.length - 1, idx));
        const target = items[currentIndex];
        if (target) {
            const left = target.offsetLeft - track.offsetLeft;
            track.scrollTo({ left, behavior: "smooth" });
        }
        updateDots();
    };

    const updateIndexFromScroll = () => {
        const left = track.scrollLeft;
        let nearest = 0;
        let minDelta = Infinity;
        items.forEach((el, i) => {
            const delta = Math.abs(el.offsetLeft - left);
            if (delta < minDelta) {
                minDelta = delta;
                nearest = i;
            }
        });
        currentIndex = nearest;
        updateDots();
    };

    nextBtn.addEventListener("click", () => scrollToIndex(currentIndex + 1));
    prevBtn.addEventListener("click", () => scrollToIndex(currentIndex - 1));

    // Sync dots con scroll (debounce via rAF)
    let ticking = false;
    track.addEventListener("scroll", () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            updateIndexFromScroll();
            ticking = false;
        });
    });
}

// --- VOLONTARI ---
// Griglia del nucleo
function renderVolunteersPage() {
    const v = SITE_DATA.volunteers;
    const grid = document.getElementById("vol-grid");
    if (!grid) return;
    setText("vol-header-title", v.headerTitle);
    setText("vol-intro-text", v.introText);

    const frag = document.createDocumentFragment();
    if (v.list && v.list.length > 0) {
        v.list.forEach(vol => {
            const card = document.createElement("div");
            card.className = "vol-card";

            const imgContainer = document.createElement("div");
            imgContainer.className = "vol-img-container";
            if (vol.image) {
                const img = document.createElement("img");
                img.src = vol.image;
                img.alt = vol.name || "Volontario";
                img.loading = "lazy";
                img.decoding = "async";
                imgContainer.appendChild(img);
            } else {
                const placeholder = document.createElement("div");
                placeholder.className = "vol-placeholder";
                const icon = document.createElement("i");
                icon.className = "fa-solid fa-user-shield";
                placeholder.appendChild(icon);
                imgContainer.appendChild(placeholder);
            }

            const info = document.createElement("div");
            info.className = "vol-info";
            const role = document.createElement("span");
            role.className = "vol-role";
            role.textContent = vol.role ?? "";
            const name = document.createElement("h3");
            name.textContent = vol.name ?? "";
            const desc = document.createElement("p");
            desc.textContent = vol.desc ?? "";
            info.append(role, name, desc);

            card.append(imgContainer, info);
            frag.appendChild(card);
        });
        grid.replaceChildren(frag);
    } else {
        grid.textContent = "Nessun volontario inserito.";
    }
}

// --- CONTATTI ---
// Popola la pagina contatti e social
function renderContactPage() {
    const c = SITE_DATA.contact;
    if (!document.getElementById("contatti-page-title")) return;
    setText("contatti-page-title", c.pageTitle);
    setText("details-title", c.detailsTitle);
    setText("faq-title", c.faqTitle);
    setText("contact-form-title", c.formTitle);
    setText("addr-val", c.address);
    setText("email-val", c.emailInfo);
    setText("hours-label", c.hoursLabel);
    setText("hours-val", c.openingHours);

    const phoneContainer = document.getElementById("phone-val");
    if (phoneContainer) {
        phoneContainer.innerHTML = "";
        if (c.phones && c.phones.length > 0) {
            const frag = document.createDocumentFragment();
            c.phones.forEach(p => {
                const block = document.createElement("div");
                block.style.marginBottom = "8px";
                const strong = document.createElement("strong");
                strong.textContent = `${p.role}:`;
                const lineBreak = document.createElement("br");
                block.append(strong, " ", p.name, lineBreak, p.number);
                frag.appendChild(block);
            });
            phoneContainer.appendChild(frag);
        } else if (c.phone) {
            phoneContainer.textContent = c.phone;
        }
    }

    const socialContainer = document.getElementById("social-links-container");
    if (socialContainer && c.social) {
        const icons = document.createElement("div");
        icons.className = "social-icons";
        const hasFb = c.social.facebook;
        const hasIg = c.social.instagram;

        if (hasFb) {
            const a = document.createElement("a");
            a.href = c.social.facebook;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            a.className = "social-btn btn-fb";
            a.title = "Facebook";
            const icon = document.createElement("i");
            icon.className = "fa-brands fa-facebook-f";
            a.appendChild(icon);
            icons.appendChild(a);
        }
        if (hasIg) {
            const a = document.createElement("a");
            a.href = c.social.instagram;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            a.className = "social-btn btn-insta";
            a.title = "Instagram";
            const icon = document.createElement("i");
            icon.className = "fa-brands fa-instagram";
            a.appendChild(icon);
            icons.appendChild(a);
        }

        if (icons.childElementCount > 0) {
            const label = document.createElement("span");
            label.className = "social-label";
            label.textContent = "Seguici su:";
            socialContainer.replaceChildren(label, icons);
        } else {
            socialContainer.style.display = "none";
        }
    }

    const tList = document.getElementById("transport-list");
    setText("transport-title", c.transportTitle);
    if (tList) {
        const frag = document.createDocumentFragment();
        (c.transportLines || []).forEach(line => {
            const li = document.createElement("li");
            const icon = document.createElement("i");
            icon.className = "fa-solid fa-route transport-icon";
            li.append(icon, line);
            frag.appendChild(li);
        });
        tList.replaceChildren(frag);
    }
    setAttr("map-iframe", "src", c.mapIframeSrc);
    setText("privacy-title", c.privacyTitle);
    setText("privacy-text", c.privacyText);
}

// --- FAQ ---
// Costruisce l'accordion e gestisce il toggle
function renderFAQ() {
    const list = document.getElementById("faq-list");
    if (!list || !SITE_DATA.faq) return;
    const frag = document.createDocumentFragment();
    SITE_DATA.faq.forEach((item, idx) => {
        const wrapper = document.createElement("div");
        wrapper.className = "faq-item";

        const btn = document.createElement("button");
        btn.className = "faq-question";
        btn.type = "button";
        const answerId = `faq-answer-${idx}`;
        btn.setAttribute("aria-expanded", "false");
        btn.setAttribute("aria-controls", answerId);
        btn.innerHTML = `${item.question} <i class="fa-solid fa-chevron-down"></i>`;

        const answer = document.createElement("div");
        answer.className = "faq-answer";
        answer.id = answerId;
        const content = document.createElement("div");
        content.className = "faq-content";
        content.innerHTML = item.answer;
        answer.appendChild(content);

        btn.addEventListener("click", () => toggleFaqItem(wrapper, btn));
        wrapper.append(btn, answer);
        frag.appendChild(wrapper);
    });
    list.replaceChildren(frag);
}

function toggleFaqItem(item, btn) {
    item.classList.toggle("active");
    const icon = btn.querySelector("i");
    btn.setAttribute("aria-expanded", item.classList.contains("active") ? "true" : "false");
    if (icon) {
        item.classList.contains("active")
            ? icon.classList.replace("fa-chevron-down", "fa-chevron-up")
            : icon.classList.replace("fa-chevron-up", "fa-chevron-down");
    }
}

// --- FORM CONTATTI ---
// Invio via mailto con feedback inline
function initContactForm() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
    if (!form) return;
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const dest = (SITE_DATA.contact.emailInfo || "").trim();
        const name = (document.getElementById("f-name")?.value || "").trim();
        const msg = (document.getElementById("f-message")?.value || "").trim();

        if (!dest) {
            alert("Indirizzo email non configurato. Contatta la sezione telefonicamente.");
            return;
        }
        if (!name || !msg) {
            alert("Compila nome e messaggio prima di inviare.");
            return;
        }

        if (status) {
            status.style.display = "block";
            status.style.color = "var(--color-primary)";
            status.textContent = "Sto aprendo il client email…";
        }

        window.location.href = `mailto:${dest}?subject=${encodeURIComponent(`Messaggio dal sito: ${name}`)}&body=${encodeURIComponent(`Nome: ${name}\n\nMessaggio:\n${msg}`)}`;
    });
}
