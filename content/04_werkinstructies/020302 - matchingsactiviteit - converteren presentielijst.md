b9sZf
|CONTAINER:page__synopsis
Hier staat hoe je de presentielijst (zoals deze in de instructie [Maken presentielijst] is aangemaakt) na de matchingsactiviteit klaarmaakt zodat je deze in kunt lezen.
_____

---

**[Link naar conversie pagina](https://lcvriend.pythonanywhere.com/matching.html)**

---

De presentielijst bevat de volgende kolommen:

- Student nummer
- Naam student
- Proces
- Croho
- Opleiding
- Na matchingsactiviteit - Datum matchingsactiviteit
- Na matchingsactiviteit - Resultaat matchingsactiviteit

> LET OP! De laatste twee kolomnamen moeten gewijzigd worden anders herkent OSIRIS ze niet:
>
> - Na matchingsactiviteit - Datum matchingsactiviteit ---> NA_ACTIVITEIT_SKC_DATUM
> - Na matchingsactiviteit - Resultaat matchingsactiviteit ---> NA_ACTIVITEIT_SKC_RESULTAAT

De laatste twee kolommen zijn nog leeg. In de eerste kolom vul je voor alle studenten de datum waarop de matchingsactiviteit heeft plaatsgevonden in. De tweede kolom bevat de aanwezigheid/afwezigheid, en deze moet als volgt geregistreerd worden:

- Aanwezig = P
- Afwezig = ND

Sla het bestand op nadat je de presentielijst volledig en correct hebt ingevuld. OSIRIS kan de eigen Dashboard export helaas niet lezen. Daarom is nu nog een conversie nodig. Ga naar **[deze pagina](https://lcvriend.pythonanywhere.com/matching.html)**.

1. Klik onder `File Upload` op `Browse...` en selecteer het excel-bestand dat je wilt converteren.
2. Klik vervolgens op `Submit`

Het bestand wordt vervolgens automatisch geconverteerd en gedownload.

> bestandsnaam = 'geconverteerd_export_dashboard_[datum_van_vandaag].xlsx'

De gegevens worden via een encrypted verbinding naar en van de server verstuurd. De gegevens die je uploadt, worden alleen verwerkt en teruggestuurd. Geen van de gegevens worden opgeslagen op de server.

Het gedownloade bestand kun je gebruiken bij [Inlezen presentielijst].
