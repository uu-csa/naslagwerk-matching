xGsel
|CONTAINER:page__synopsis
Hier staat hoe je de studenten afwijst die het matchingsformulier niet (op tijd) hebben ingediend. De gevolgen hiervan zijn,

* De rubriekstatus `Voorafgaand aan matchingsactiviteit` wijzigt naar `Afgewezen (formulier)`
* De processtatus wijzigt naar `Geannuleerd`
* Het procesbesluit wijzigt naar `Afgewezen`
* Het inschrijfverzoek van de student wordt automatisch ingetrokken
* De SKC-statussen bij de inschrijfregel wijzigen naar,
    * Datum studiekeuzecheck, [datum van afwijzing]
	* Resultaat studiekeuzecheck, `Niet deelgenomen`
	* Toelaatbaar qua studiekeuzecheck, `Nee, geen verplichte deelname SKC`
* De student ontvangt automatisch een afwijzingsbericht ([M-AFW-FOR])
_____
|CARD
Wie, Centrale Studentenadministratie (CSa)
Wanneer, binnen vijf werkdagen na deadline formulier
Hoe, groepsgewijs
Betreft, 'alle studenten die voldoen aan de volgende criteria,

* actief inschrijfverzoek voor bacheloropleiding met matching
* inschrijfverzoek is gedaan vóór/na AMD
* matchingsproces is gestart
* matchingsformulier is nog niet ingediend
* deadline is verstreken
* matchingsproces heeft niet kenmerk van vrijwillige matching
* matchingsproces heeft niet kenmerk van alleen formulier'
_____
|COLLAPSIBLE
### Maak inleesbestand af te wijzen studenten:checked
[nog op te leveren]

### Inlezen antwoorden dossier:checked
1. Ga naar scherm `Aanmeldingen` (2.3.01).
1. Klik onder `Acties` (rechtsboven) op `Inlezen antwoorden dossier`.
1. Vul de volgende antwoorden in:
    * `Proces`, 'BA1920_MATCHING' (deze kun je eventueel ook via het vergrootglas selecteren)
	* `Bestaande antwoorden overschrijven` kan op 'Nee' blijven staan
	* Selecteer het in te lezen bestand
1. Klik op inlezen.
