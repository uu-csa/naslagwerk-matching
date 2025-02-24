t3Pd6
|CONTAINER:page__synopsis
Hier staat hoe je registreert dat de student ontheffing heeft gekregen voor de matching.
_____
|CARD
Wie, Centrale Studentenadministratie (CSa)
Wanneer, nadat verzoek om ontheffing is beoordeeld
Hoe, individueel
Betreft, 'studenten die voldoen aan de volgende criteria:

- actief inschrijfverzoek voor bacheloropleiding met matching
- matchingsproces is gestart'
_____
|COLLAPSIBLE
### Controleer GV-adres:checked
1. Zoek de student op in OSIRIS.
1. Ga naar `Studentgegevens > Adressen` (2.1.04).
1. Controleer dat er geen GV-adres aanwezig is. Indien dit wel het geval is, controleer dan de status ‘Vertrokken’ onder `Personalia – DUO/SL`.
1. Indien de student voor ontheffing in aanmerking komt, volg dan onderstaande instructies bij `Registreer toekenning verzoek ontheffing` en anders bij `Registreer afwijzing verzoek ontheffing`.

### Registreer toekenning verzoek ontheffing:checked
Indien een student meerdere aanmeldingen heeft, dan kun je ontheffing voor alle aanmeldprocessen registreren.

1. Ga naar `OSIRIS Aanmelding > Aanmeldingen` (2.1.18).
1. Wijzig de status van de rubriek `Checklist: Kenmerken` naar ‘Van toepassing’. Hiermee worden de checklistitems opengezet voor bewerking.
1. Wijzig de status van het checklistitem `Ontheffing` naar: ‘Ja’.
1. Controleer de status van de rubriek `Na matchingsactiviteit`:
    - Indien de status leeg is, wijzig deze dan naar `In behandeling`
1. Vul de volgende checklistitems in de rubriek:
    - `Datum matchingsactiviteit`: datum van vrijstelling.
    - `Resultaat matchingsactiviteit`: 'Vrijstelling'
1. Sla de wijzigingen op via `<ctrl-s>` of de knop `Opslaan` (rechtsboven).
1. Verstuur het bericht [M_ACT_B_CSA]

-----

Zie [Registraties in het proces] voor de gevolgen voor het aanmeldproces.

### Registreer afwijzing verzoek ontheffing:checked
1. Ga naar `OSIRIS Aanmelding > Aanmeldingen` (2.1.18).
1. Wijzig de status van de rubriek `Checklist: Kenmerken` naar ‘Van toepassing’. Hiermee worden de checklistitems opengezet voor bewerking.
1. Wijzig de status van het checklistitem `Ontheffing` naar: ‘Nee’.
1. Sla de wijzigingen op via `<ctrl-s>` of de knop `Opslaan` (rechtsboven).
1. Verstuur het bericht [M_ONT_NOK].
