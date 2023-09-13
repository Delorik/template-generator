# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

****** Informace ******

Tento projekt slouží pouze pro studium knihovny React, konkrétně se zameřuje na základy jako jsou komponenty a rozdíly oproti "klasickému psaní" HTML.
Jedná se o webovou aplikaci, která umožňuje do určité míry volit obsah, který je následně zobrazen jakožto demo webové šablony. Aplikace umožňuje jednoduše dynamicky načítat a přizpůsobovat obsah dle voleb uživatele, což považuji jako hlavní výhodu knihovny React. Aplikace má spoustu prostoru pro mnohá vylepšení. Těmi mohou být například:
- přidání vícero šablon s jiným UI designem
- umožnění volby veškerého obsahu, který šablona obsahuje
- tvorba zdrojového kódu jednostránkových web aplikací, který může uživatel stáhnout a využít pro osobní účely
- tvorba nových šablon s konfigurací na mailingová prostředí pro tvorbu kampaní, newsletterů apod.

Veškeré psané texty v aplikaci (včetně komendářů v kódu) jsou v anglickém jazyce.

****** Setup ******

Projekt běží na LTS node.js verzi (currently 18.7.1.).
Pro stažení projektu je zapotřebí mít nainstalovaný GIT, dále lze repozitář stáhnout do libovolné složky příkazem 'git clone https://github.com/Delorik/template-generator.git'
Informace o všech závislostech, které je potřeba před spuštěním nainstalovat jsou k dosažení v souboru "package-lock.json". Tyto knihovny nainstalujete pomocí příkazů 'npm install --name', kdy proměnná 'name' představuje název dané knihovny/závislosti. Např. 'npm install --jquery'.
Všechny závislosti je možné nainstalovat příkazem 'npm install'.
Následně je projekt připraven ke spuštění příkazem 'npm run dev'.