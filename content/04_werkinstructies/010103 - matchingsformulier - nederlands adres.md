0pUbp
|CONTAINER:page__synopsis
Hier staat hoe je het matchingsproces start voor studenten zonder automatisch gestart proces die matchingsplichtig zijn omdat ze woonachtig zijn in Nederland.
_____
|CARD
Wie, Centrale Studentenadministratie (CSa)
Wanneer, december t/m augustus
Hoe, groepsgewijs
Betreft, 'studenten die voldoen aan de volgende criteria,

* actief inschrijfverzoek voor bacheloropleiding met matching
* matchingsproces is niet automatisch gestart
* matchingsplichtig op basis van Nederlands adres (registratie in BRP)
Opmerking, Na 1 mei moet in de selectie [M-1-FOR-WOON] het veld `datum inschrijfverzoek` > gevuld worden (om te voorkomen dat vroege aanmelders alsnog als matchingsplichtig worden beschouwd).'
_____
|COLLAPSIBLE
### Koppel proces aan inschrijfregel:checked
In deze stap koppel je het matchingsproces aan de betreffende inschrijfregel. De student ontvangt een uitnodiging om het matchingsformulier in te vullen (zie [M-FOR-U-****]).

1. Ga naar scherm `Starten aanmeldingen` (2.3.02).
1. Selecteer de standaardselectie [M-1-FOR-WOON].
1. Klik op `Zoeken`.
1. Selecteer in de resultatenlijst alle regels (met `<ctrl-a>` of via `Bekijken > Selecteer alle rijen`).
1. Klik op `Actie, Starten aanmeldingen` (rechtsboven).
1. Vul in, ‘BA1920_MATCHING’ bij het invulveld `Proces`. (Het is ook mogelijk om via het vergrootglas het proces te selecteren.)
1. Klik op `Aanmeldingen starten` (‘Criteria automatisch starten toepassen?’ moet op ‘Nee’ blijven staan.)

### Registreer verplichte matching met buitenlandse vooropleiding:checked
In deze stap is het de bedoeling om in het matchingsproces te registreren dat de matching verplicht is op basis van Nederlands woonadres.
Omdat de functionaliteit in OSIRIS ontbreekt om dit efficiënt te kunnen doen, wordt er gebruik gemaakt van een studentgroep.
Bij de aanmeldprocessen die behoren bij deze studentgroep wordt periodiek het checklistitem `Buitenlandse vooropleiding woonachtig in Nederland` geregistreerd.

1. Ga naar scherm `Aanmeldingen` (2.3.01).
1. Exporteer studentnummers naar Excel.
1. Ga naar scherm `Studentgroep` (2.2.10) en selecteer `M-19-WOON`.
1. Voeg studentnummers toe aan groep.

### Koppel proces aan inschrijfregel voor studenten met meerdere VtI’s:checked
In deze stap controleer je of er studenten zijn die meerdere inschrijfregels hebben, de selectie die je gebruikt in de eerste stap is namelijk slechts op studentniveau dekkend. De studenten die meerdere VtI’s hebben dienen voor elke aanmelding een apart het BA1819_MATCHING proces te krijgen. Deze studenten vind je middels een query in Access.

1. Open het Access bestand Monitor - Proces - Uitnodiging bij NL GV-Adres
1. Kies Run.
1. Voer de studentnummers uit tabel `P 04 B Q Output, studenten met meerdere VTI` in het OSIRIS-scherm `Starten aanmeldingen` (2.3.02) en klik op `Zoeken`.
1. Selecteer de juiste inschrijfregels (de regels die overeenkomen met die in de Access tabel) en start ook voor deze regels het proces BA1920_MATCHING via `Acties`.

NB: Pas procesbeschrijving aan zodra nieuwe functionaliteit beschikbaar is.
