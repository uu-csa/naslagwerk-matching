hIn8I
|CONTAINER:page__synopsis
Als een student een ingetrokken vti opnieuw indient, dan wordt het aanmeldproces niet automatisch bijgewerkt. Hier staat hoe je de juiste status vaststelt van een gereanimeerd vti. Op basis daarvan herstel je de juiste waarden voor het matchingsproces en het vti.
_____
|CARD
Wie, Centrale Studentenadministratie
Wanneer, 'vanaf 1 oktober wekelijk, vanaf 1 juni dagelijks'
Hoe, individueel
Betreft, 'alle studenten die voldoen aan de volgende criteria:

-	actief inschrijfverzoek voor bacheloropleiding met matching
-	geannuleerd matchingsproces'
_____
Studenten waarvoor het proces gereanimeerd moet worden zijn terug te vinden in de werkvoorraad voor het betreffende collegejaar.

Er zijn de volgende reanimatie categorieën:

- Nog niet ingediend matchingsformulier, niet afgewezen
  | Voer de volgende acties uit:
    1. Verwijder het oude proces
    1. In scherm 2.3.02 start bij deze student nieuw matchingsproces
- Wel ingediend matchingsformulier, nog niet uitgenodigd voor matchingsactiviteit in de toekomst
  | Pas de volgende velden aan:
    1. Zet de processtatus op 'in behandeling'
- Wel ingediend matchingsformulier, nog niet uitgenodigd, datum matchingsactiviteit verstreken
  | Pas de volgende velden aan:
    1. Zet de processtatus op 'in behandeling'
    1. Wijzig de matchingsdatum bij de student naar de eerstvolgende mogelijkheid (sla op)
    1. Verstuur bericht [M_REANIMEER_DAT] 
- Afgewezen wegens geen deelname, maar nog geen afwijzing ontvangen
  | Pas de volgende velden aan:
    1. Zet de processtatus op 'in behandeling'
    1. Zet de rubriekstatus op `Afwijzingsbericht`
        * Hiermee wordt alsnog een afwijzingsbericht gestuurd aan de student
        * Het procesbesluit komt op 'afgewezen'
        * De processtatus komt op geannuleerd
        * Het inschrijfverzoek wordt afgewezen
- Afgewezen, geen bezwaar ingediend
  | Voer de volgende acties uit:
    1. Verstuur bericht [M_REANIMEER_NOK]
    1. Trek inschrijfregel in.
- Afgewezen, bezwaar in behandeling
  | Voer de volgende acties uit:
    1. Verstuur bericht [M_REANIMEER_B]
    1. Trek inschrijfregel in.
- Afgewezen, negatief besluit bezwaar 
  | Voer de volgende acties uit:
    1. Verstuur bericht [M_REANIMEER_N]
    1. Trek inschrijfregel in.
- Voldaan aan de matchingsvoorwaarden, hier hoeft niets meer mee gedaan te worden.
