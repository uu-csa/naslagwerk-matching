MfDLo
|CONTAINER:page__synopsis
Op deze pagina staat een overzicht van de gevolgen van de werkinstructies op het aanmeldproces.
_____
Het uitvoeren van werkinstructies kan gevolgen hebben voor:

- Aanmeldstatus
- Aanmeldbesluit
- Rubriekstatussen
- Checklistitems

### Gevolgen van het afwijzen niet tijdig indienen formulier
Zie werkinstructie: [Afwijzen niet tijdig indienen formulier]

> * De rubriekstatus `Voorafgaand aan matchingsactiviteit` wijzigt naar `Afgewezen (formulier)`
> * De processtatus wijzigt naar `Geannuleerd`
> * Het procesbesluit wijzigt naar `Afgewezen`
> * Het inschrijfverzoek van de student wordt automatisch ingetrokken
> * De SKC-statussen bij de inschrijfregel wijzigen naar,
>     * Datum studiekeuzecheck, [datum van afwijzing]
>     * Resultaat studiekeuzecheck, `Niet deelgenomen`
>     * Toelaatbaar qua studiekeuzecheck, `Nee, geen verplichte deelname SKC`
> * De student ontvangt automatisch een afwijzingsbericht ([M_FOR_AFW])
_____
### Gevolgen van het uitnodigen voor de matchingsactiviteit
Zie werkinstructie: [Groepsgewijs uitnodigen activiteit] / [Individueel uitnodigen activiteit] / [Uitnodigen individuele matching]

> * De rubriekstatus `Voorafgaand aan matchingsactiviteit` wijzigt naar `Uitgenodigd`
> * Het checklistitem `Student uitgenodigd?` wijzigt naar 'Ja'
> 
> Bij groepsgewijs uitnodigen ontvangen studenten de [M-ACT-U-****] e-mail met daarin verdere instructies over de matchingsactiviteit en de > voorbereidingen daarvoor. Je moet voordat je deze actie uitvoert ervoor zorgen dat de juiste tekst in het sjabloon staat.
_____
### Gevolgen van het verwerken verzoek alternatieve datum
Zie werkinstructie: [Verwerken verzoek alternatieve datum]
> **De gevolgen bij toewijzing**
> 
> - De rubriekstatus `Voorafgaand aan matchingsactiviteit` wijzigt naar `VAD Toegewezen`
> 
> -----
> 
> **De gevolgen bij afwijzing**
> 
> - De rubriekstatus `Voorafgaand aan matchingsactiviteit` wijzigt naar `VAD Afgewezen`
_____
### Gevolgen van het inlezen van de presentielijst
Zie werkinstructie: [Inlezen presentielijst]
> **Student was aanwezig en heeft actief verzoek**
> 
> - `Processtatus` wijzigt naar `Afgehandeld`
> - `Procesbesluit` wijzigt naar `Voldaan`
> - `Rubriekstatus na activiteit` wijzigt naar `Deelgenomen aan activiteit`
> - `Resultaat Studiekeuzecheck` wijzigt (in checklist en bij vti) naar `P`
> - `Datum Studiekeuzecheck` wijzigt (in checklist en bij vti) naar de datum van de matchingsactiviteit
> - De mededeling [M_ACT_B_CSA] wordt verstuurd
> 
> **Student was aanwezig en heeft geen actief verzoek**
> 
> - `Resultaat Studiekeuzecheck` wijzigt (in checklist en bij vti) naar `P`
> - `Datum Studiekeuzecheck` wijzigt (in checklist en bij vti) naar de datum van de matchingsactiviteit
> 
> -----
> 
> **Student was niet aanwezig en heeft actief verzoek**
> 
> - `Processtatus` wijzigt naar `Geannuleerd`
> - `Procesbesluit` wijzigt naar `Afgewezen`
> - `Rubriekstatus na activiteit` wijzigt naar `Afgewezen: niet aanwezig op activiteit`
> - `Resultaat Studiekeuzecheck` wijzigt (in checklist en bij vti) naar `ND`
> - `Datum Studiekeuzecheck` wijzigt (in checklist en bij vti) naar de datum van de matchingsactiviteit
> - Inschrijfverzoek van de student wordt ingetrokken
> - De mededeling [M_ACT_AFW] wordt verstuurd
> 
> **Student was niet aanwezig en heeft ingetrokken verzoek**
> 
> - `Resultaat Studiekeuzecheck` wijzigt (in checklist en bij vti) naar `ND`
> - `Datum Studiekeuzecheck` wijzigt (in checklist en bij vti) naar de datum van de matchingsactiviteit
_____
### Gevolgen van het afwijzen van te late aanmelders
Zie werkinstructie: [Afwijzen te late aanmelders]
TBD
_____
### Gevolgen van registreren vrijstelling
Zie werkinstructie: [Registreren vrijstelling]

> - Rubriekstatus `na matchingsactiviteit` wijzigt naar `Vrijstelling (activiteit)`
> - `Processtatus` wijzigt naar `Afgehandeld`
> - `Procesbesluit` wijzigt naar `Voldaan`
> 
> De student krijgt de automatische e-mail [M_ACT_B_CSA]. De studiekeuzecheckvelden bij de inschrijfregel worden > automatisch gevuld.
_____
### Gevolgen van registreren ontheffing
Zie werkinstructie: [Registreren ontheffing]

> -	`Processtatus` wijzigt naar `Afgehandeld`
> -	`Procesbesluit` wijzigt naar `Voldaan`
> 
> De student krijgt géén automatische e-mail. De SKC-status bij de inschrijfregel wijzigt niet in deze stap. Deze worden door CSa groepsgewijs > ingelezen (zie Registratie SKC-statussen).
_____
### Gevolgen als student vorig jaar gematcht heeft
Zie werkinstructie: [Vorig jaar gematcht]

> - Student krijgt geen aanmeldproces
> - `Datum studiekeuzecheck` = datum vorig jaar gematcht
> - `Status toelaatbaar qua SKC` = 'Ja, vrijstelling, eerder positief resultaat'