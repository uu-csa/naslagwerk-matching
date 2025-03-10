const labels = {
    onderdeel: {
        gw: "Geesteswetenschappen",
        sw: "Sociale Wetenschappen",
        geo: "Geowetenschappen",
        rebo: "Recht, Economie, Bestuur en Organisatie",
        beta: "Bètawetenschappen",
        csa: "Centrale Studentenadministratie",
        alg: "Algemene informatie",
    },
    periode: {
        feb: "februari",
        apr: "april",
        mei: "mei",
        jun: "juni",
        aug: "augustus"
    },
    categorie: {
        her: {
            title: "herinnering",
            description: () => "Herinnering versturen voor het invullen van het matchingsformulier",
            url: "https://uu-csa.github.io/naslagwerk-matching/werkinstructies/matchingsformulier/herinneren/herinnering_voor_activiteit.html"
        },
        uit: {
            title: "uitnodiging",
            description: () => "Uitnodiging versturen voor de matchingsactiviteit",
            url: "https://uu-csa.github.io/naslagwerk-matching/werkinstructies/matchingsactiviteit/uitnodigen/groepsgewijs_uitnodigen.html"
        },
        act: {
            title: "matchingsactiviteit",
            description: () => "De matchingsactiviteit zelf",
        },
        res: {
            title: "resultaat",
            description: () => "Registratie resultaat van de matching",
            url: "https://uu-csa.github.io/naslagwerk-matching/werkinstructies/matchingsactiviteit/registratie_aanwezigheid/inlezen_presentielijst.html"
        },
        aan: {
            title: "aanmelding",
            description: () => "Aanmeldingsperiode voor de matchingsactiviteit",
        },
        deadline: {
            title: "deadline",
            description: item => `Deadline ${item.subonderdeel.toUpperCase()}`,
        },
        afwijzing: {
            title: "afwijzing",
            description: item => `Afwijzing ${item.subonderdeel.toUpperCase()}`,
            url: "https://uu-csa.github.io/naslagwerk-matching/werkinstructies/matchingsformulier/afwijzen/afwijzen_niet_tijdig_indienen_formulier.html"
        }
    }
}

export function renderTimelineItem(item, element, data) {
    return labels.categorie?.[item.categorie]?.title || item.content || item.id
}

export function renderDetailsPanel(item) {
    if (!item) return ""

    const dateOptions = { year: "numeric", month: "long", day: "numeric" }
    const details = labels.categorie[item.categorie]
    const url = details.url ? `<p><a href="${details.url}">Zie werkinstructie.</a></p>` : ""
    const start = new Date(item.start).toLocaleDateString("nl-NL", dateOptions)
    const eind = item.end ? new Date(item.end).toLocaleDateString("nl-NL", dateOptions) : null

    return `
        <h3>${item.onderdeel.toUpperCase()} | ${item.subonderdeel.toUpperCase()} | ${details.title} [${labels.periode[item.periode]}]</h3>
        <p><strong>Wanneer</strong> ${start}${eind ? `-${eind}` : ""}
        <p><strong>Omschrijving</strong> ${details.description(item)}</p>
        ${url}
        `
    // <pre>${JSON.stringify(item, null, 2)}</pre>
}
