jNCOA
|CONTAINER:page__synopsis
Hier staat hoe je uit het `Dashboard aanmeldingen` een presentielijst kunt maken van de studenten die zijn uitgenodigd voor de komende matchingsactiviteit.

Deze presentielijst gebruik je bij het registreren van de aanwezigheid (zie [Inlezen presentielijst]) die de eindstatus van het proces (voldaan of afgewezen) bepaalt.
_____
|CARD
Wie, Faculteit
Wanneer, net voordat de matchingsactiviteit plaatsvindt
Hoe, groepsgewijs
Betreft, 'studenten die zijn uitgenodigd voor de eerstvolgende matchingsactiviteit.'
_____
> Tijdens de matchingsactiviteit moet geregistreerd worden wie er wel/niet aanwezig is. Het inlezen van de aanwezigheid gebeurde vorig jaar via scherm 2.3.07. Dit scherm bleek performance problemen te hebben. Daarom maken we nu gebruik van de nieuwe inleesmogelijkheid in scherm 2.3.01.

> Het inleesbestand moet aan bepaalde voorwaarden voldoen om ingelezen te kunnen worden. Hieronder geven we een manier om ervoor te zorgen dat je ingevulde presentielijst makkelijk om te zetten is naar een door OSIRIS leesbaar bestand.

_____
|COLLAPSIBLE
### Maak presentielijst:checked
Hier staat hoe je de presentielijst aanmaakt die bij [Inlezen presentielijst] gebruikt wordt om de aanwezigheid te registreren.

1. Ga naar scherm `Dashboard aanmeldingen` (2.3.08).
1. Selecteer het Dashboard `M-2-ACT-PRESENTIELIJST`.
1. Selecteer de standaardselectie `[M-2-ACT-LIJST]`
    - Bij `Vraag/checklist 2` vul 'O_DATUM_' aan met de opleidingscode.
    - Bij `Antwoordcode 2` selecteer de correcte matchingsdatum via het vergrootglas.
    - Klik op Zoeken.
1. Klik bovenin de resultatenlijst op het icoontje `Exporteer naar Microsoft Excel` en sla het bestand op.

---

**LET OP!** In dit bestand moeten de volgende twee kolommen gevuld gaan worden:

* `NA_ACTIVITEIT-SKC_DATUM: Na matchingsactiviteit - Datum matchingsactiviteit`
* `NA_ACTIVITEIT-SKC_RESULTAAT: Na matchingsactiviteit - Resultaat matchingsactiviteit`

De eerste kolom bevat de datum van de matchingsactiviteit. De tweede kolom bevat de aanwezigheid/afwezigheid, en deze moet als volgt geregistreerd worden:

- Aanwezig = `P`
- Afwezig = `ND`
