7BIwg
|CONTAINER:page__synopsis
Hier staat hoe je het matchingstraject start voor studenten met een buitenlandse vooropleiding die vrijwillig aan de hele matching (formulier en activiteit) willen deelnemen.
Bij dit matchingsproces registreer je het kenmerk "vrijwillig" zodat het inschrijfverzoek later buiten de selecties voor afwijzing valt.

Als een student alléén het matchingsformulier hoeft in te vullen (bv. vanwege matching op afstand), zie dan [Matching op afstand].
_____
|CARD
Wie, Faculteit
Wanneer, nadat student zich gemeld heeft bij faculteit
Hoe, individueel
Betreft, 'studenten van de eigen opleiding die voldoen aan de volgende criteria:

* actief inschrijfverzoek voor bacheloropleiding met matching
* student is niet matchingsplichtig vanwege woonadres in het buitenland
* verzoek ingediend per e-mail voor vrijwillige matching waarbij ze willen deelnemen aan de matchingsactiviteit'
_____
|COLLAPSIBLE
### Koppel proces aan inschrijfregel:checked
In deze stap koppel je het matchingsproces aan de betreffende inschrijfregel. De student ontvangt een uitnodiging om het matchingsformulier in te vullen (zie [M-FOR-U-****]).

1. Ga naar scherm 'Starten aanmeldingen' (`2.3.02`).
1. Selecteer de standaardselectie [M-1-FOR-HANDM]
1. Vul in het zoekscherm de volgende velden:
    * Studentnummer
    * Opleiding met de eigen opleidingscode
1. Klik op 'Zoeken'.
1. Selecteer de relevante inschrijfregel in de resultatenlijst.
1. Klik op 'Actie: Starten aanmeldingen' (rechtsboven).
1. Voer de code van het matchingsproces (`BA****_MATCHING`) in bij het invulveld 'Proces'.
1. Klik op 'Aanmeldingen starten' ('Criteria automatisch starten toepassen?' moet op 'Nee' blijven staan.)

#### Resultaat
Het matchingsrpoces wordt opgestart en de student ontvangt de mededeling [M-FOR-U-****] om het formulier in te vullen.

### Registreer vrijwillige matching:checked
In deze stap registreer je bij het matchingsproces dat de matching vrijwillig is. Dit kenmerk zorgt ervoor dat de student in de afwijsprocedures buiten de selecties wordt gehouden.

1. Zoek de student op in OSIRIS.
1. Ga naar 'OSIRIS Aanmelding > Aanmeldingen' (`2.1.18`).
1. Wijzig van de rubriek 'Checklist: Registratie vrijwillige matching' de status van het checklistitem 'Alleen formulier' naar 'Nee' (`NEE`) en de status van het checklistitem 'Vrijwillige deelname matching' (`VRIJWILLIG`) naar 'Ja' (`JA`).
1. Sla de wijzigingen op via `<ctrl-s>` of de knop 'Opslaan' (rechtsboven).

#### Resultaat
De rubriekstatus 'Checklist: Registratie vrijwillige matching' (`VRIJWILLIG`) wijzigt naar 'Vrijwillige matching' (`VRIJWILLIG`).
