const SITE_DATA = {
    // --- GENERALI ---
    general: {
        siteTitle: "ANC Sezione di Pavia",
        metaDescription: "Sito ufficiale ANC Pavia. Associazione Nazionale Carabinieri.",
        logoSrc: "assets/images/logo.png",
        logoAlt: "Logo ANC Pavia",
        headerTitle: "Associazione Nazionale Carabinieri",
        headerSubtitle: "Sezione di Pavia",
        footerText: "(c) 2026 Associazione Nazionale Carabinieri - Sezione di Pavia. Tutti i diritti riservati.",
        ogImage: "assets/images/logo.png"
    },
    // Meta per pagina
    meta: {
        "index.html": {
            title: "Home",
            description: "ANC Sezione di Pavia: valori, volontariato e vita sociale dell'Associazione Nazionale Carabinieri.",
            ogImage: "assets/images/logo.png"
        },
        "volontariato.html": {
            title: "Le cariche sociali",
            description: "Conosci la sezione ANC Pavia e le attività del nucleo.",
            ogImage: "assets/images/logo.png"
        },
        "galleria.html": {
            title: "Galleria",
            description: "Archivio fotografico delle attività e cerimonie della Sezione ANC Pavia.",
            ogImage: "assets/images/logo.png"
        },
        "contatti.html": {
            title: "Contatti & Iscrizione",
            description: "Contatta la Sezione ANC Pavia, orari segreteria, recapiti e FAQ.",
            ogImage: "assets/images/logo.png"
        }
    },

    // --- MENU ---
    menu: [
        { label: "Home", link: "index.html" },
        { label: "Le cariche sociali", link: "volontariato.html" },
        { label: "Galleria", link: "galleria.html" },
        { label: "Contatti & Iscrizione", link: "contatti.html" }
    ],

    // --- HOME PAGE ---
    home: {
        hero: {
            image: "assets/images/26.jpg",
            title: "Fedeli nei Secoli, presenti nel futuro.",
            subtitle: "La sezione di Pavia al servizio della comunità, portando avanti i valori dell'Arma.",
            ctaText: "ISCRIVITI ORA",
            ctaLink: "contatti.html",
            ctaSecondaryText: "Scopri il Nucleo",
            ctaSecondaryLink: "volontariato.html",
            ctaFiveText: "Scopri il 5x1000",
            ctaFiveLink: "#five-x-1000",
            badge: "Dal 1923"
        },

        stats: [
            { number: "1923", label: "Anno Fondazione" },
            { number: "250+", label: "Soci Iscritti" },
            { number: "100+", label: "Servizi Annuali" }
        ],

        whatWeDo: {
            title: "Cosa Facciamo",
            intro: "Le nostre attività si dividono in tre aree principali per servire i soci e la cittadinanza.",
            items: [
                { icon: "fa-solid fa-person-military-pointing", title: "Rappresentanza", text: "Partecipiamo con Bandiera e Labaro alle cerimonie istituzionali, religiose e patriottiche." },
                { icon: "fa-solid fa-hand-holding-heart", title: "Volontariato", text: "Supporto alle Forze dell'Ordine e assistenza alla popolazione durante eventi e calamità." },
                { icon: "fa-solid fa-users", title: "Vita Sociale", text: "Organizziamo pranzi sociali e incontri culturali per mantenere vivo lo spirito di corpo." }
            ]
        },

        // SLIDER HOME (Solo le migliori)
        gallery: {
            title: "Le Nostre Attività",
            subtitle: "Una selezione dei momenti più significativi.",
            viewAllText: "GUARDA TUTTE LE FOTO", // Pulsante verso la galleria completa
            viewAllLink: "galleria.html",
            // USARE FOTO CARTELLA 'HOME'
            images: [
                "assets/images/home/72.jpg",
                "assets/images/home/45.jpg",
                "assets/images/home/43.jpg",
                "assets/images/home/35.jpg",
                "assets/images/home/21.jpg",
                "assets/images/home/19.jpg",
                "assets/images/home/7.jpg",
                "assets/images/home/4.jpg"
            ]
        },

        whyJoin: {
            title: "Perché Iscriversi",
            reasons: [
                "Per restare parte della grande famiglia dell'Arma.",
                "Per partecipare attivamente alla vita sociale e culturale.",
                "Per dare un aiuto concreto alla tua comunità tramite il volontariato.",
                "Per accedere alle convenzioni riservate ai soci ANC."
            ],
            ctaText: "DIVENTA SOCIO",
            ctaLink: "contatti.html"
        },

        about: {
            sectionTitle: "Chi Siamo",
            paragraph1: "L'Associazione Nazionale Carabinieri (A.N.C.) Sezione di Pavia è un ente apolitico che aggrega carabinieri in congedo, in servizio, e simpatizzanti che condividono i valori di fedeltà, onore e spirito di servizio che contraddistinguono l'Arma.",
            paragraph2: "La nostra missione è duplice: mantenere vivo il legame tra i soci e proiettare questi valori nella società civile attraverso attività di volontariato e supporto alle istituzioni.",
            signature: "Il Presidente di Sezione Vice Brig. Negri Marco<br>Il Presidente del Nucleo di Volontariato App. Sc. Q.S. Cantone Claudio"
        },

        fivex1000: {
            title: "Destina il tuo 5x1000",
            text: "Sostieni le nostre attività di volontariato. A te non costa nulla, per noi è un aiuto fondamentale per servire meglio la comunità. Firma e inserisci il codice fiscale nella tua dichiarazione dei redditi nel riquadro dedicato al volontariato.",
            fiscalCode: "C.F. 96088530181"
        }
    },

    // --- PAGINA: GALLERIA COMPLETA ---
    fullGallery: {
        title: "Archivio Fotografico",
        intro: "Rivivi i momenti più belli delle nostre attività, cerimonie e servizi.",
        // USARE FOTO CARTELLA 'EVENTI'
        images: [
            "assets/images/eventi/1.jpg",
            "assets/images/eventi/2.jpg",
            "assets/images/eventi/3.jpg",
            "assets/images/eventi/4.jpg",
            "assets/images/eventi/5.jpg",
            "assets/images/eventi/6.jpg",
            "assets/images/eventi/7.jpg",
            "assets/images/eventi/8.jpg",
            "assets/images/eventi/9.jpg",
            "assets/images/eventi/10.jpg",
            "assets/images/eventi/11.jpg",
            "assets/images/eventi/12.jpg",
            "assets/images/eventi/13.jpg",
            "assets/images/eventi/14.jpg",
            "assets/images/eventi/15.jpg",
            "assets/images/eventi/16.jpg",
            "assets/images/eventi/17.jpg",
            "assets/images/eventi/18.jpg",
            "assets/images/eventi/19.jpg",
            "assets/images/eventi/20.jpg",
            "assets/images/eventi/21.jpg",
            "assets/images/eventi/22.jpg",
            "assets/images/eventi/23.jpg",
            "assets/images/eventi/24.jpg",
            "assets/images/eventi/25.jpg",
            "assets/images/eventi/26.jpg",
            "assets/images/eventi/27.jpg",
            "assets/images/eventi/28.jpg",
            "assets/images/eventi/29.jpg",
            "assets/images/eventi/30.jpg",
            "assets/images/eventi/31.jpg",
            "assets/images/eventi/32.jpg",
            "assets/images/eventi/33.jpg",
            "assets/images/eventi/34.jpg",
            "assets/images/eventi/35.jpg",
            "assets/images/eventi/36.jpg",
            "assets/images/eventi/37.jpg",
            "assets/images/eventi/38.jpg",
            "assets/images/eventi/39.jpg",
            "assets/images/eventi/40.jpg",
            "assets/images/eventi/41.jpg",
            "assets/images/eventi/42.jpg",
            "assets/images/eventi/43.jpg",
            "assets/images/eventi/44.jpg",
            "assets/images/eventi/45.jpg",
            "assets/images/eventi/46.jpg",
            "assets/images/eventi/47.jpg",
            "assets/images/eventi/48.jpg",
            "assets/images/eventi/49.jpg",
            "assets/images/eventi/50.jpg",
            "assets/images/eventi/51.jpg",
            "assets/images/eventi/52.jpg",
            "assets/images/eventi/53.jpg",
            "assets/images/eventi/54.jpg",
            "assets/images/eventi/55.jpg",
            "assets/images/eventi/56.jpg",
            "assets/images/eventi/57.jpg",
            "assets/images/eventi/58.jpg",
            "assets/images/eventi/59.jpg",
            "assets/images/eventi/60.jpg",
            "assets/images/eventi/61.jpg",
            "assets/images/eventi/62.jpg",
            "assets/images/eventi/63.jpg",
            "assets/images/eventi/64.jpg",
            "assets/images/eventi/65.jpg",
            "assets/images/eventi/66.jpg",
            "assets/images/eventi/67.jpg",
            "assets/images/eventi/68.jpg"
        ]
    },

    // --- IL NUCLEO ---
    volunteers: {
        headerTitle: "Le nostre cariche sociali",
        introText: "Le cariche sociali svolgono il proprio ruolo con impegno, responsabilità e spirito di servizio, rappresentando l’associazione con competenza e attenzione verso la comunità.",
        list: [
            { name: "V. Brig. Marco Negri", role: "Presidente di sezione", desc: "Coordinamento della Sezione e gestione dei rapporti con le Istituzioni.", image: "" },
            { name: "App. Sc. Q.S. Claudio Cantone", role: "Presidente del nucleo di volontariato", desc: "Coordinamento del nucleo volontario e gestione dei rapporti con le Istituzioni.", image: "" },
            { name: "Brig. Cap. Palmieri Armando", role: "Vice Presidente di sezione", desc: "Gestione operativa e supporto al coordinamento della Sezione.", image: "" },
            { name: "Sig. Spingola Francesco", role: "Vice Presidente del nucleo di volontariato", desc: "Gestione operativa e supporto al coordinamento del nucleo volontario.", image: "" },
            { name: "Lgt. C.S. Ales Gaetano", role: "Tesoriere", desc: "Amministrazione contabile e gestione delle risorse finanziarie.", image: "" },
        ]
    },

    // --- CONTATTI ---
    contact: {
        pageTitle: "Contatti & Sede",
        detailsTitle: "Associazione Nazionale Carabinieri",
        address: "Via Pasino, 7 - Pavia",
        faqTitle: "Domande Frequenti",
        formTitle: "Scrivici",

        phones: [
            { role: "Presidente", name: "Vice Brig. Negri Marco", number: "Cel. +39 333 975 6070" },
            { role: "Presidente Nucleo Volontariato", name: "App. Sc. Q.S. Cantone Claudio", number: "Cel. +39 331 361 7195" }
        ],

        hoursLabel: "Orari Segreteria:",
        openingHours: "Domenica: 09:30 - 12:00",
        emailInfo: "pavia@sezioni-anc.it",

        social: {
            facebook: "https://www.facebook.com/ASNAZC/",
            instagram: "https://www.instagram.com/anc_pavia/"
        },
        transportTitle: "Come Raggiungerci:",
        transportLines: [
            "Mezzi Pubblici: Fermate Pavia – Dei Mille/Beretta oppure Pavia – Dei Mille/Pasino. Linee autobus 1 – 21 – 22",
            "In Auto: Parcheggio pubblico nelle vie limitrofe"
        ],
        mapIframeSrc: "https://maps.google.com/maps?q=Via+Pasino+7+Pavia&t=&z=15&ie=UTF8&iwloc=&output=embed",
        privacyTitle: "Informativa sulla Privacy",
        privacyText: "L'ANC tratta i dati inviati dagli utenti nel rispetto della normativa vigente (GDPR)."
    },

    // --- FAQ ---
    faq: [
        {
            question: "Chi può far parte dell'Associazione Nazionale Carabinieri?",
            answer: "Possono iscriversi all'Associazione:<br><strong>Soci effettivi:</strong> i militari che prestano o hanno prestato servizio nell'Arma.<br><strong>Soci familiari:</strong> gli appartenenti al 'nucleo familiare'.<br><strong>Soci simpatizzanti:</strong> coloro che condividono i valori dell'Arma."
        },
        {
            question: "Come si diventa Volontario Operativo?",
            answer: "<br><strong>Per entrare nel Nucleo di Volontariato è necessario:</strong><ul><li>Essere regolarmente iscritti all'ANC.</li><li>Presentare specifica domanda al Presidente di Sezione.</li><li>La disponibilità a garantire una presenza minima mensile.</li><li>Superare il periodo di prova. L'uniforme operativa viene consegnata a conclusione del periodo di prova. È possibile procedere anche con l'acquisto dell'uniforme sociale.</ul>"
        },
        {
            question: "Quali documenti bisogna presentare per iscriversi?",
            answer: "<ul><li>n. 2 foto formato tessera</li><li>Copia del certificato di congedo (soci effettivi)</li><li>Copia documento identità</li><li>Autocertificazione buona condotta morale.</li></ul>"
        },
        {
            question: "Come posso contattare la segreteria?",
            answer: "Puoi utilizzare il modulo in questa pagina per mandarci una mail, chiamare negli orari indicati o recarti direttamente presso la nostra sede."
        }
    ]
};
