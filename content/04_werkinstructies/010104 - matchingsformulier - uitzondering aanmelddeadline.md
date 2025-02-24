tq5XV
|CONTAINER:page__synopsis
Hier staat hoe je het matchingsproces start voor studenten die op basis van een uitzondering alsnog mogen deelnemen aan de matching.
_____
|CARD
Wie, Centrale Studentenadministratie (CSa)
Wanneer, nadat uitzonderingsverzoek is ingediend/goedgekeurd of bezwaar geschikt/gegrond is
Hoe, individueel
Betreft, 'alle te late ingetrokken inschrijfverzoeken waarbij de student,

* een uitzonderingsverzoek heeft ingediend
* een bezwaar heeft ingediend waarop geschikt is
* een bezwaar heeft ingediend dat gegrond verklaard is'
_____
|COLLAPSIBLE
### Herstel inschrijfregel:checked
1. Ga naar scherm `Student - Inschrijvingen CROHO` (2.1.30).
1. Maak de volgende velden leeg:
    * `Intrekking vooraanmelding`
    * `Datum studiekeuzecheck`
    * `Resultaat studiekeuzecheck`
    * `Toelaatbaar qua studiekeuzecheck`
1. Wijzig `Toelaatbaar qua aanmelddeadline` naar 'Ja, toestemming van instelling' indien:
    * Student geldig bewijsstuk heeft aangeleverd bij uitzonderingsverzoek
    * Student via een bezwaar alsnog deel mag nemen aan de matching

Indien er nog geen bewijsstuk aanwezig is, dan blijft dit veld ongewijzigd. Het veld blokkeert de inschrijving in het Stoplicht.

### Koppel proces aan inschrijfregel:checked
In deze stap koppel je het matchingsproces aan de betreffende inschrijfregel. De student ontvangt een uitnodiging om het matchingsformulier in te vullen (zie [M-FOR-U-****]).

1. Ga naar scherm `Starten aanmeldingen` (2.3.02).
1. Zoek op studentnummer.
1. Selecteer de relevante inschrijfregel in de resultatenlijst (let op opleiding en jaartal).
1. Klik op `Actie, Starten aanmeldingen` (rechtsboven).
1. Voer het Matchingsproces (BA****_MATCHING) in bij het invulveld `Proces`.
1. Klik op `Aanmeldingen starten` (‘Criteria automatisch starten toepassen?’ moet op ‘Nee’ blijven staan.)

### Registreer uitzonderingscategorie:checked
In deze stap registreer je bij het matchingsproces het kenmerk dat de student in een uitzonderingscategorie valt.

1. Zoek de student op in OSIRIS.
1. Ga naar `OSIRIS Aanmelding > Aanmeldingen` (2.1.18).
1. Wijzig de status van de rubriek `Checklist, Kenmerken` naar ‘Van toepassing’. Hiermee worden de checklistitems opengezet voor bewerking.
1. Wijzig de status van het checklistitem `Uitzonderingscategorie` naar:
    * ‘NBSA’ indien de student een uitzonderingsverzoek heeft ingediend.
    * ‘Bezwaar’ indien de student alsnog tot de matching is toegelaten na een ingediend bezwaar.
1. Sla de wijzigingen op via `<ctrl-s>` of de knop `Opslaan` (rechtsboven).
