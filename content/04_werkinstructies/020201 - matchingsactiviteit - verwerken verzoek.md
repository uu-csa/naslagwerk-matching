qOuQE
|CONTAINER:page__synopsis
Hier staat hoe je een beoordeeld ‘verzoek alternatieve datum’ verwerkt. Indien goedgekeurd wordt de datum matchingsactiviteit aangepast naar een nieuwe datum.

Let op dat het formulier ingediend moet zijn om het verzoek te kunnen verwerken.
_____
|CARD
Wie,     Faculteit
Wanneer, nadat student tijdig verzoek alternatieve datum heeft ingediend
Hoe,     individueel
Betreft, 'studenten van de eigen opleiding die voldoen aan de volgende criteria:

- actief inschrijfverzoek voor bacheloropleiding met matching
- matchingsformulier heeft de status `ingediend`
- (eventueel) uitgenodigd voor de komende matchingsactiviteit
- verzoek alternatieve datum is vóór of op de matchingsdatum gedaan'
_____
|COLLAPSIBLE
### Registreer toewijzing verzoek:checked
In deze stap registreer je dat het verzoek van de student is goedgekeurd en wat de reden was voor de toekenning. Daarnaast wordt een nieuwe matchingsdatum opgegeven zodat deze aan de student gecommuniceerd kan worden via een automatisch gegenereerd bericht (zie [M-ALT-OK]).

1. Zoek de student op in OSIRIS.
1. Ga naar `OSIRIS Aanmelding > Aanmeldingen` (2.1.18).
1. Selecteer bij de studentvraag `Datum matchingsactiviteit` de nieuwe datum waarop de student mag gaan matchen.
1. Ga naar de rubriek `Voorafgaand aan matchingsactiviteit` en zet `VAD ingediend` op 'Ja'. Vervolgens klapt de checklist verder open.
1. Vul bij `TOEWIJZING | Reden toewijzing VAD` onder welke categorie het verzoek valt en sla de wijzigingen op via `<ctrl-s>` of de knop `Opslaan`.
1. Indien de categorie `Overige vorm van overmacht` is, vul dan ook het checklistitem `Overige vorm van overmacht, namelijk:` in.
1. Wijzig het checklistitem `Student uitgenodigd?` van 'Ja' naar *leeg*.
1. Selecteer bij het checklistitem `Beoordeling VAD` de optie 'Toegewezen'. Hierdoor wordt de rubriekstatus automatisch gewijzigd naar `VAD Toegewezen`. Gevolg hiervan is dat automatisch het bericht [M-ALT-OK] aan de student wordt gestuurd waarin de nieuwe matchingsdatum staat.
1. Sla de wijzigingen op via `<ctrl-s>` of de knop `Opslaan` (rechtsboven).

### Registreer afwijzing verzoek:checked
In deze stap registreer je dat het verzoek van de student is afgekeurd. De student ontvangt een automatische gegenereerd bericht waarin staat dat de matchingsdatum niet gewijzigd is (zie [M-ALT-NOK]).

1. Zoek de student op in OSIRIS.
1. Ga naar `OSIRIS Aanmelding > Aanmeldingen` (2.1.18).
1. Ga naar de rubriek `Voorafgaand aan matchingsactiviteit` en zet `VAD ingediend` op 'Ja'. Vervolgens klapt de checklist verder open.
1. Vul onder `AFWIJZING | Toelichting bij afwijzing VAD tbv e-mail` waarom het verzoek niet goedgekeurd is. **LET OP!** Dit veld wordt getoond in het bericht, je kunt het dus niet leeg laten.
1. Selecteer bij het checklistitem `Beoordeling VAD` de optie 'Afgewezen'. Hierdoor wordt de rubriekstatus automatisch gewijzigd naar `VAD Afgewezen`. Gevolg hiervan is dat automatisch het bericht [M-ALT-NOK] aan de student wordt gestuurd waarin de ingevulde toelichting staat en de ongewijzigde matchingsdatum.
1. Sla de wijzigingen op via `<ctrl-s>` of de knop `Opslaan` (rechtsboven).

_____
De gevolgen voor het matchingsproces van de student zijn bij toewijzing:
-	De rubriekstatus `Voorafgaand aan matchingsactiviteit` wijzigt naar `VAD Toegewezen`

De gevolgen voor het matchingsproces van de student zijn bij afwijzing:
-	De rubriekstatus `Voorafgaand aan matchingsactiviteit` wijzigt naar `VAD Afgewezen`
