azIln
De matching is opgedeeld in twee processtappen.
In de eerste stap gaat het over het indienen van het matchingsformulier en het uitnodigen voor de activiteit.
In de tweede stap gaat het over de registratie van de deelname na de activiteit.
Beide processtappen hebben een eigen rubrieken die op zichzelf ook weer een status kunnen krijgen.
Deze rubriekstatussen worden automatisch of via het vullen van een checklistitem gevuld.
_____
### Rubriekstatussen
De rubriekstatus geeft aan wat de administratieve status is van een bepaalde processtap. Het matchingsproces kent de volgende rubriekstatussen:

### Registraties voorafgaand aan de matchingsactiviteit
_____
|FLEXTABLE
Status, Toelichting, Hoe
`Nog niet gestart`, 'De student heeft een aanmeldproces aan haar inschrijfverzoek gekoppeld gekregen maar zij heeft de vragenlijst nog niet ingediend.', via proces
`In behandeling`, 'De student heeft de vragenlijst ingevuld en ingediend.', via proces
`Afgewezen (formulier)`, 'De student heeft het matchingsformulier niet/niet op tijd ingediend en is om deze reden afgewezen. De processtatus is `Geannuleerd` en het procesbesluit is `Afgewezen`.', via CSa
`Uitgenodigd`, 'De student is uitgenodigd voor de matchingsactiviteit die geregistreerd staat bij `Verzochte datum matchingsactiviteit`.', via faculteit / opleiding
`Toegewezen vad`, 'De student is uitgenodigd voor een matchingsactiviteit en heeft daarna verzocht om toestemming om op een alternatieve datum te matchen. De faculteit/opleiding heeft dit verzoek beoordeeld en goedgekeurd. De datum die bij `Verzochte datum matchingsactiviteit` staat is de nieuwe datum waarop de student uitgenodigd moet worden.', via faculteit / opleiding
`Afgewezen vad`, 'De student is uitgenodigd voor een matchingsactiviteit en heeft daarna verzocht om toestemming om op een alternatieve datum te matchen. De faculteit/opleiding heeft dit verzoek beoordeeld en afgewezen. De datum die bij `Verzochte datum matchingsactiviteit` staat is de datum waarop de student is uitgenodigd.', via faculteit / opleiding
_____
### Registraties na de matchingsactiviteit
_____
|FLEXTABLE
Status, Toelichting, Hoe
`Nog niet gestart`, 'De student is nog niet uitgenodigd voor een matchingsactiviteit.', via proces
`In behandeling`, 'De student is uitgenodigd voor een matchingsactiviteit maar deze is nog niet afgerond.', via rubriekstatus
`Deelgenomen`, 'De faculteit/opleiding heeft geregistreerd dat de student op de matchingsactiviteit aanwezig was. De processtatus staat op `Afgehandeld` of op `Geannuleerd` (indien de student het inschrijfverzoek ingetrokken heeft na de matching). Het procesbesluit staat op `Voldaan`.', via faculteit / opleiding
`Afgewezen (activiteit)`, 'De student heeft het matchingsformulier niet/niet op tijd ingediend en is om deze reden afgewezen. De processtatus is `Geannuleerd` en het procesbesluit is `Afgewezen`.', via faculteit / opleiding
