fYT1R
Voor de registratie van het proces worden twee overkoepelende registratievelden gebruikt: processtatus en procesbesluit.

### Processtatus
De processtatus geeft aan wat de administratieve status is van het proces. Het matchingsproces kan de volgende administratieve statussen hebben:
_____
|FLEXTABLE
Status, Toelichting, Hoe
`Nog niet ingediend`, 'De student heeft een aanmeldproces maar zij heeft de vragenlijst nog niet ingevuld/ingediend.', via proces
`Ingediend`, 'De student heeft de vragenlijst ingevuld en ingediend.', via proces
`In behandeling`, 'Functioneel identiek aan `ingediend`. Komt voor bij reactivering.', via reactivering?
`Afgehandeld`, 'De aanmelding is afgehandeld. De student heeft:

* Deelgenomen aan de matching
* Vrijstelling gekregen
* Ontheffing gekregen', via rubriekstatus
`Geannuleerd`, 'De aanmelding is geannuleerd. Het inschrijfverzoek is:

* Door de student ingetrokken
* Afgewezen wegens het niet voldoen aan de matchingsvoorwaarden.
Welke situatie van toepassing is, leid je af uit het besluit bij het aanmeldproces.', via intrekking / afwijzing
_____
### Procesbesluit
Het procesbesluit geeft aan wat de uitkomst is van het proces. Het matchingsproces kent de volgende uitkomsten:
_____
|FLEXTABLE
Besluit, Toelichting, Door
*&lt;Leeg&gt;*, 'Het proces heeft (nog) geen besluit',
`Voldaan`, 'De student heeft de matching afgerond doordat zij:

1. Aan de matchingsactiviteit heeft deelgenomen
1. Vrijstelling heeft gekregen van de matching
1. Ontheffing heeft gekregen op basis van woonadres', via rubriekstatus
`Afgewezen`, 'De student is afgewezen omdat zij:

1. Het formulier niet op tijd heeft ingediend
1. Niet op de matchingsactiviteit aanwezig was
Aan welke voorwaarde de student niet voldaan heeft, kun je afleiden uit de rubrieksstatussen in de checklist.', via rubriekstatus
_____
De processtatus en het procesbesluit hangen met elkaar samen maar kunnen in verschillende combinaties voorkomen.
Om met zekerheid te kunnen beoordelen wat er aan de hand is met een aanmelding is het nodig om beiden te bekijken.
Het kan bijvoorbeeld voorkomen dat een student het besluit ‘Voldaan’ heeft en de status ‘Geannuleerd’.
In dat geval heeft de student de matching afgerond en daarna het bijbehorende inschrijfverzoek ingetrokken/geannuleerd.
Als iemand daarentegen het besluit ‘Afgewezen’ en de status ‘Geannuleerd’ heeft dan is het inschrijfverzoek ingetrokken omdat de student niet aan één van de voorwaarden voor de matching voldaan heeft.
Om te achterhalen aan welke voorwaarde een student niet voldaan heeft, moet je een laag dieper kijken naar de [Rubriekstatussen].
