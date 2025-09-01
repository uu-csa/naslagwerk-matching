Volg deze stappen bij het aanpassen van het naslagwerk:
1. Voer wijzigingen door in de map content
2. Converteer markdown content mbv script naar html
    (deze output staat in de map docs)
3. Voer de wijziging door in je locale GIT mbv een commit actie
    - selecteer de gewijzigde bestanden die je wilt committen
    - schrijf de commit message waarin je kort toelicht wat er gewijzigd is
    - druk op de knop "commit"
4. Publiceer de wijzigingen in GitHub door te synchroniseren met GitHub

## Publiceren site online
In vscode:
1. Open terminal (ctrl-` of via menu Terminal > New terminal)
1. Navigeer naar naslagwerk script:
    ```cmd
    cd ..\naslagwerk
    ```
1. Draai build script om html aan te maken:
    ```cmd
    build site matching
    ```
1. Commit de wijzigingen (commit message: `--publiceer site`) in vscode en upload naar github

---

> **Toelichting bij commando's**  
> - `cd` -> change directory
> - `..` -> navigeer naar map hoger in mappenstructuur
> - `\naslagwerk` -> navigeer vanuit die map naar map "naslagwerk"