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
1. Zoek student op in OSIRIS dmv (`2.3.01`) en het invoeren van de `io_aanvr_id` vanuit de werkvoorraad.
1. Ga naar 'Studentgegevens > Adressen' (`2.1.04`).
1. Controleer dat er geen GV-adres aanwezig is. Indien dit wel het geval is, controleer dan de status ‘Vertrokken’ onder 'Personalia – DUO/SL'.
1. Indien de student voor ontheffing in aanmerking komt, volg dan onderstaande instructies bij 'Registreer toekenning verzoek ontheffing' en anders bij 'Registreer afwijzing verzoek ontheffing'.


### Controleer aangeleverd bewijsstuk:checked 
1. Ga naar 'OSIRIS Aanmelding > Aanmeldingen' (`2.1.18`).
1. Klik op het proces `BA_M_ONT_**`en controleer onder de rubriek 'Formulier: uploads' het aangeleverde bewijs onder het checklistitem '-Bijlagen'. 
1. Beoordeel of het document akkoord is, door te kijken naar naam, adres en datum. 
1. Mocht het bewijs onvoldoende zijn, houd dit scherm dan over en ga naar de volgende stap. Mocht het voldoende zijn, sla de volgende stap dan over en ga naar 'Registreer toekenning verzoek ontheffing'

### Onvoldoende bewijs: checked
1. Ga naar 'Uploads' onder 'Formulier: Uploads' en klik op het rode uitroepteken. In 'Wijzig status', selecteer bij *'Status' 'Onvoldoende'. Noteer bij 'Opmerking student' wat er ontbreekt en wat de student moet indienen. Klk op `OK`. 
1. Wat je als standaardreactie zou kunnen vermelden bij 'Opmerking student' is: "Als je in het buitenland woont en ontheffing van matching wilt aanvragen, moet je bewijs aanleveren dat je op het moment van de matchingactiviteit niet in Nederland bent. Geldige documenten zijn bijvoorbeeld een werk- of stagecontract, een verklaring van de gemeente, of een officieel document van een andere instantie. Het document moet duidelijk je naam, buitenlandse adres en een recente datum vermelden."

#### Resultaat
1. Rubriek 'Checklist: Dossier controle' krijgt de status 'Afkeur upload'. 
2. Student krijgt de mededeling `M_ONTHEF_AFK`. Hiermee krijgt de student nog een kans om een juist bewijsstuk te uploaden.


### Registreer toekenning verzoek ontheffing:checked
1. Controleer of het dossier compleet is. Ga naar rubriek "Checklist: Dossier controle". Indien compleet, selecteer "Ja" en sla op `<ctrl-s>`.
1. Beoordeel of het ontheffingsverzoek akkoord is. Ga naar rubriek "Checklist: Verwerking". Indien akkoord, selecteer "Toegekend" en sla op `<ctrl-s>`. 
1. Ga naar proces `BA2526_MATCHING` en klik op 'Acties' (rechtsbovenin) en vervolgens 'Rubriek toepassen of verwijderen'.
1. Kies bij '*Rubriek' voor 'Registratie ontheffing matching' (`ONTHEFFING`) en bij 'Actie' de optie 'Toepassen'. 
1. De rubriek 'Checklist: Registratie ontheffing matching' ontstaat. Deze is te vinden onderaan de lijst rubrieken. 
1. Zet het checklistitem 'Ontheffing registreren' op 'Ja'. 

#### Resultaat
1. Het matchingsproces krijgt status 'Afgehandeld zonder besluit'. Doen we dit niet dan wordt student alsnog uitgenodigd voor matchingsactiviteit. 
1. Inschrijfregel krijgt de juiste skc-velden: datum skc: 01-05-2025, resultaat skc: vrijstelling, toelaatbaar qua skc: Ja, vrijstelling. Doen we dit niet blijft (normaliter) stoplicht qua skc op geel staan (en kan dus niet ingeschreven worden)
1. Student krijgt mededeling ‘Toekenning verzoek ontheffing’ (`M_ONTEF_OK`)

### Registreer afwijzing verzoek ontheffing:checked
Mocht de student meermaals onvoldoende bewijs leveren dan kan de ontheffing afgewezen worden. 

1. Controleer of het dossier compleet is. Ga naar rubriek 'Checklist: Dossier controle'. Indien niet compleet, selecteer 'Nee' en sla op  `<ctrl-s>`.
1. Beoordeel of het ontheffingsverzoek akkoord is. Ga naar rubriek "Checklist: Verwerking". Indien niet akkoord, selecteer 'Afgekeurd' en sla op `<ctrl-s>`. 
1. Ga naar proces `BA2526_MATCHING` en klik op 'Acties' (rechtsbovenin) en vervolgens 'Rubriek toepassen of verwijderen'.
1. Kies bij '*Rubriek' voor 'Registratie ontheffing matching' (`ONTHEFFING`) en bij 'Actie' de optie 'Toepassen'. 
1. De rubriek 'Checklist: Registratie ontheffing matching' ontstaat. Deze is te vinden onderaan de lijst rubrieken. 
1. Zet het checklistitem 'Ontheffing registreren' op 'Nee'. 

#### Resultaat
1. Student krijgt mededeling ‘Toekenning verzoek ontheffing’ (`M_ONTEF_NOK`)


### Registreer toekenning verzoek meerdere aanmeldingen ontheffing:checked
Indien een student meerdere aanmeldingen heeft, dan kun je ontheffing voor alle aanmeldprocessen registreren.

1. Ga naar 'OSIRIS Aanmelding > Aanmeldingen' (`2.1.18`).
1. Wijzig de status van de rubriek 'Checklist: Kenmerken' naar ‘Van toepassing’. Hiermee worden de checklistitems opengezet voor bewerking.
1. Wijzig de status van het checklistitem 'Ontheffing' naar: ‘Ja’.
1. Controleer de status van de rubriek 'Na matchingsactiviteit':
    - Indien de status leeg is, wijzig deze dan naar 'In behandeling'
1. Vul de volgende checklistitems in de rubriek:
    - 'Datum matchingsactiviteit': datum van vrijstelling.
    - 'Resultaat matchingsactiviteit': 'Vrijstelling'
1. Sla de wijzigingen op via `<ctrl-s>` of de knop 'Opslaan' (rechtsboven).
1. Verstuur het bericht [M_ACT_B_CSA]

-----
