urZgR
|CONTAINER:page__synopsis
Hier staat hoe je de presentielijst na de matchingsactiviteit klaarmaakt zodat je deze in kunt lezen. Hiermee wijs je studenten die afwezig waren af en stuur je een bevestiging van deelname aan de studenten die wel aanwezig waren.
_____
|CARD
Wie, Faculteit
Wanneer, binnen een week na de matchingsactiviteit
Hoe, groepsgewijs
Betreft, 'studenten die zijn uitgenodigd voor de afgelopen matchingsactiviteit.'
_____
>We gaan er in deze instructie vanuit dat je gebruik maakt van de presentielijst zoals deze in de instructie [Maken presentielijst] is aangemaakt. Als het goed is, heb je een bestand met de volgende kolommen:
>
> * Student nummer
> * Naam student
> * Proces
> * Croho
> * Opleiding
> * NA_ACTIVITEIT-SKC_DATUM: Na matchingsactiviteit - Datum matchingsactiviteit
> * NA_ACTIVITEIT-SKC_RESULTAAT: Na matchingsactiviteit - Resultaat matchingsactiviteit
>
> De laatste twee kolommen zijn nog leeg. In de eerste kolom vul je voor alle studenten de datum waarop de matchingsactiviteit heeft plaatsgevonden in. De tweede kolom bevat de aanwezigheid/afwezigheid, en deze moet als volgt geregistreerd worden:
>
> - Aanwezig = `P`
> - Afwezig = `ND`
>
> Sla het bestand op nadat je de presentielijst volledig en correct hebt ingevuld. OSIRIS kan de eigen Dashboard export helaas niet lezen. Daarom is nu nog een conversie nodig. Ga naar [deze pagina](https://colab.research.google.com/drive/1McIr9ZMnpfv-itUHivFF_qGdMarvtqau#scrollTo=zducJ2v-7la-) en volg de instructies op om de conversie uit te voeren.

_____
|COLLAPSIBLE
### Inlezen presentielijst:checked
1. Ga naar scherm `Aanmeldingen` (2.3.01).
1. Klik op `ACTIES` (rechtsboven) en selecteer: `Inlezen antwoorden dossier`.
1. Selecteer in het pop-up scherm:
    * `Proces`: 'BA1920_MATCHING'
    * `Bestaande antwoorden overschrijven`: 'Nee'
    * `Bestand`: kies het geconverteerde excelbestand (zie hierboven) met de presentielijst
1. Klik op `Inlezen`.
_____
Gevolgen voor het proces/inschrijving van de student zijn:
**Student was aanwezig en heeft actief verzoek**
- `Processtatus` wijzigt naar `Afgehandeld`
- `Procesbesluit` wijzigt naar `Voldaan`
- `Rubriekstatus na activiteit` wijzigt naar `Deelgenomen aan activiteit`
- `Resultaat Studiekeuzecheck` wijzigt (in checklist en bij vti) naar `P`
- `Datum Studiekeuzecheck` wijzigt (in checklist en bij vti) naar de datum van de matchingsactiviteit
- De mededeling [M-ACT-B-CSA] wordt verstuurd

**Student was aanwezig en heeft geen actief verzoek**
- `Resultaat Studiekeuzecheck` wijzigt (in checklist en bij vti) naar `P`
- `Datum Studiekeuzecheck` wijzigt (in checklist en bij vti) naar de datum van

-----

**Student was niet aanwezig en heeft actief verzoek**
- `Processtatus` wijzigt naar `Geannuleerd`
- `Procesbesluit` wijzigt naar `Afgewezen`
- `Rubriekstatus na activiteit` wijzigt naar `Afgewezen: niet aanwezig op activiteit`
- `Resultaat Studiekeuzecheck` wijzigt (in checklist en bij vti) naar `ND`
- `Datum Studiekeuzecheck` wijzigt (in checklist en bij vti) naar de datum van de matchingsactiviteit
- Inschrijfverzoek van de student wordt ingetrokken
- De mededeling [M-AFW-ACT] wordt verstuurd

**Student was niet aanwezig en heeft ingetrokken verzoek**
- `Resultaat Studiekeuzecheck` wijzigt (in checklist en bij vti) naar `ND`
- `Datum Studiekeuzecheck` wijzigt (in checklist en bij vti) naar de datum van de matchingsactiviteit
