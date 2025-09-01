ED53u
|CONTAINER:page__synopsis
Hier staat hoe je studenten twee weken van te voren groepsgewijs uitnodigt voor de matchingsactiviteit.
_____
|CARD
Wie, Faculteit
Wanneer, twee weken voor de matchingsactiviteit
Hoe, groepsgewijs
Betreft, 'studenten van de eigen opleiding die voldoen aan de volgende criteria:

* actief inschrijfverzoek voor bacheloropleiding met matching
* matchingsformulier is ingediend
* opgegeven matchingsdatum is voor de komende matchingsactiviteit'
_____
> **LET OP!**
>
> * Je kunt pas uitnodigen voor een matchingsdatum als deze datum dichtstaat in het matchingsformulier. Controleer dus eerst in de tabel [Matchingsdata] of de datum 'Dicht' verstreken is.
> * Controleer bij het maken van de selectie of er nog processen in behandeling zijn van studenten die een eerdere (reeds verstreken) matchingsdatum gekozen hebben.

_____
|COLLAPSIBLE
### Zet vraag over matchingsdatum dicht:checked
In deze stap zet je de vraag over de matchingsdatum dicht zodat studenten die zelf niet meer kunnen wijzigen.

1. Ga naar scherm 'Aanmeldingen' (`2.3.01`).
1. Selecteer de standaardselectie [M-2-ACT-UIT] in het zoekscherm.
1. Vul in het zoekscherm de volgende velden:
    * Bij 'Vraag/checklist 3' vul `O_DATUM_` aan met de opleidingscode.
    * Bij 'Antwoordcode 3' selecteer de correcte matchingsdatum via het vergrootglas.
    * Klik op Zoeken.
1. Selecteer in de resultatenlijst alle regels (met `<ctrl-a>` of via 'Bekijken > Selecteer alle rijen'). 
1. Klik op 'Acties' (rechtsboven) en selecteer de optie 'Mutatiestop instellen of opheffen'.
1. Kies bij 'Mutatiestop' 'Instellen', vink de rubriek `S_DATUM` aan en klik op 'Uitvoeren'.
1. Houd het scherm open en ga naar de volgende stap.

### Verstuur uitnodigingsmail:checked
In deze stap selecteer je de uit te nodigen studenten en stuur je ze de uitnodigingsmail voor de matchingsactiviteit.

1. Ga verder met de selectie uit de vorige stap.
1. Klik op 'Acties' (rechtsboven) en selecteer 'Rubriekstatus wijzigen'.
1. Selecteer in het pop-up menu:
    * 'Rubriek': 'Uitnodiging activiteit' (`VOOR_ACTIVITEIT`)
    * 'Nieuwe status': 'Uitnodigingsbericht' (`UIT_BERICHT`)
1. Klik op 'Wijzig rubriekstatus' om de uitnodiging te versturen en de rubriekstatus te wijzigen.

#### Resultaat
- Rubriekstatus wijzigt naar 'Uitgenodigd' (`UITGENODIGD`).
- Checklistitem 'Student uitgenodigd?' wijzigt naar 'Ja'. Studenten ontvangen mededeling  [M-ACT-U-****] met daarin verdere instructies over de matchingsactiviteit en de voorbereidingen daarvoor.
- Checklistitem 'Sunrise datum' wordt automatisch op '1-1-2025' gezet. Dit hoeft niet meer handmatig ingevoerd te worden.
- Tegelijk met de uitnodiging krijgt de student automatisch toegang tot een Sunrise-account.

-----

Zie [Registraties in het proces] voor de gevolgen voor het aanmeldproces.
