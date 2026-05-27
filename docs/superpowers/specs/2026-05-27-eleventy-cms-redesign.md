# Boberger Reitverein — Website-Modernisierung
**Spec-Datum:** 2026-05-27  
**Entwickler:** Hugo Gaul  
**Status:** Zur Freigabe durch Kundin

---

## Kurzfassung (für die Kundin)

Die bestehende Website wird in drei Schritten modernisiert. Nach Abschluss kann die Kundin Aktuelles, Texte, Preise, Bilder, Schulpferde, Vorstand und Downloads selbst über eine einfache Web-Oberfläche bearbeiten — ohne Code, ohne den Entwickler zu kontaktieren. Zusätzlich wird ein digitales Mitgliedsantragsformular eingebaut.

Die Kosten für den Betrieb bleiben gleich: AWS + Strato, keine neuen Monatsgebühren.

---

## Technische Ausgangslage

| Problem | Auswirkung heute |
|---|---|
| Navigation, Footer und `<head>` sind in jeder der 12 HTML-Seiten manuell dupliziert | Jede kleine Menü-Änderung erfordert 12 Dateien anfassen, Fehler unvermeidlich |
| Jede Seite enthält einen ~130-Zeilen Inline-`<style>`-Block | Doppelter Pflege-Aufwand, Inkonsistenz-Risiko |
| Inhalte (Schulpferde, News, Preise) sind hart in HTML kodiert | Kundin kann nichts selbst ändern |

---

## Architektur-Entscheidung: Eleventy + Decap CMS

### Static Site Generator: Eleventy (11ty)

Eleventy ist ein Build-Werkzeug, das HTML-Templates zu fertigen HTML-Seiten zusammensetzt. Der Output ist identisch mit dem heutigen Stand — reines statisches HTML, das genauso auf AWS Amplify läuft wie jetzt.

**Was sich ändert:** Nav, Footer und `<head>` existieren nur noch einmal (in Template-Dateien). Jede Inhaltsseite enthält nur noch ihren eigenen Inhalt. Eine Menü-Änderung = eine Stelle.

**Was gleich bleibt:** Das gesamte Design-System (`style.css`), alle Farben, Fonts, Layouts, das Zero-Radius-Prinzip. Die Seiten sehen nach der Migration exakt gleich aus.

### CMS: Decap CMS (Open Source, kostenlos)

Decap CMS fügt der Website eine Verwaltungs-Oberfläche hinzu, erreichbar unter:

```
https://boberger-reitverein.de/admin/
```

Die Kundin meldet sich mit ihrem GitHub-Account an (einmalige Einrichtung). Danach kann sie über eine einfache Weboberfläche — ähnlich einem Online-Formular — Inhalte bearbeiten. Jede Änderung wird automatisch gespeichert, AWS Amplify baut die Seite neu (dauert ~30 Sekunden, läuft im Hintergrund).

**Kein WordPress, kein eigener Server, kein monatlicher SaaS-Preis.**

---

## Drei Phasen

### Phase 1 — Entdopplung & Eleventy-Migration

*Voraussetzung für alles Weitere.*

**Was passiert:**
- Eleventy wird eingerichtet (Node.js + npm, lokal auf dem Entwickler-Rechner)
- Nav, Footer, `<head>`, Mobile-Menü und Scroll-Script werden je einmal als Template-Datei extrahiert
- Alle 12 HTML-Seiten werden auf Templates umgestellt — reiner Inhalt, kein duplizierter Rahmen mehr
- Alle Inline-`<style>`-Blöcke werden nach `style.css` überführt
- AWS Amplify wird auf den Build-Befehl `npm run build` umgestellt
- Das Ergebnis ist für die Kundin nicht sichtbar — die Seite sieht identisch aus

**Ergebnis für den Entwickler:** Eine Änderung = eine Stelle. Keine Driftgefahr mehr.

---

### Phase 2 — Decap CMS: Eigenständige Inhaltspflege

*Baut auf Phase 1 auf.*

**Was die Kundin nach Phase 2 selbst bearbeiten kann:**

| Bereich | Beispiel |
|---|---|
| **Aktuelles / News** | Neuen Beitrag anlegen, Bild hinzufügen, alten Beitrag löschen |
| **Texte & Preise** | Preis für Unterricht ändern, Fließtext auf beliebiger Seite anpassen |
| **Bilder** | Hero-Foto ersetzen, Bilder in Galerie/Anlage hochladen |
| **Schulpferde** | Pferd hinzufügen, Name/Rasse/Bild aktualisieren, Pferd entfernen |
| **Vorstand** | Mitglied ergänzen, Funktion ändern, Foto hochladen |
| **Downloads** | Neue PDF-Datei hochladen und verlinken |

**Technisch:** Die Inhalte dieser Bereiche werden aus `_data/`-JSON/Markdown-Dateien gebaut statt aus hartem HTML. Decap CMS bearbeitet diese Dateien über seine UI; Eleventy baut daraus die fertigen Seiten.

**Login-Einrichtung:** Decap nutzt GitHub OAuth über AWS Amplify. Einmalige Einrichtung durch den Entwickler, danach hat die Kundin ihren eigenen Zugang.

---

### Phase 3 — Digitaler Mitgliedsantrag

*Unabhängig von Phase 1 & 2, kann parallel oder danach gebaut werden.*

**Umfang:**

Ein Formular auf einer eigenen Seite (`/mitglied-werden`), erreichbar über den Hauptnavigation-Punkt „Mitglied werden". Die Kundin erhält die ausgefüllten Anträge per E-Mail.

**Felder (Standard-Mitgliedsantrag):**
- Persönliche Daten: Vorname, Nachname, Geburtsdatum, Anschrift
- Kontakt: Telefon, E-Mail
- Mitgliedschaftsart (Erwachsene / Jugend / Fördermitglied)
- Bankverbindung für SEPA-Lastschrift (IBAN, Kontoinhaber, BIC)
- DSGVO-Einwilligung + Einwilligung SEPA-Lastschrift (Pflichtfelder)

**Backend:** AWS Lambda-Funktion + Amazon SES (Simple Email Service). Das Formular sendet die Daten verschlüsselt an einen AWS-Endpunkt; dieser schickt eine strukturierte E-Mail an `info@boberger-reitverein.de`. Bankdaten werden **nicht gespeichert** — nur per E-Mail übertragen und dann verworfen. Kein eigener Datenbank-Server.

**DSGVO:** Verarbeitungshinweis und Einwilligungserklärung im Formular. Datenschutzerklärung wird entsprechend ergänzt. Da Bankdaten erhoben werden, gilt erhöhte Sorgfaltspflicht — Übertragung nur via HTTPS (bereits gewährleistet durch AWS Amplify + TLS).

**Hinweis Unterschrift:** Der SEPA-Einzug erfordert eine Unterschrift. Das Formular behandelt die explizite SEPA-Einwilligungs-Checkbox als digitale Zustimmung. Wenn ein rechtssicheres schriftliches Mandat gewünscht wird, kann alternativ ein PDF-Antrag erzeugt werden, den die Kundin ausdruckt und unterschrieben einreicht. Dies wird in Phase 3 im Detail abgestimmt.

---

## Infrastruktur — bleibt gleich

| Dienst | Rolle | Ändert sich? |
|---|---|---|
| **AWS Amplify** | Hosting + automatisches Bauen nach Git-Push | Nur Build-Befehl: `npm run build` |
| **GitHub** | Code- und Content-Quelle | Neu: CMS schreibt direkt in Repo |
| **Strato** | Domain `boberger-reitverein.de` | Nein |
| **AWS Lambda + SES** | Formular-Backend (Phase 3) | Neu in Phase 3 |

Neue laufende Kosten: **keine** (Lambda/SES-Kosten bei Vereins-Volumen: unter 1 €/Monat).

---

## Zeitplan (geschätzt)

| Phase | Aufwand |
|---|---|
| Phase 1: Eleventy-Migration | 1–2 Tage |
| Phase 2: Decap CMS | 1–2 Tage |
| Phase 3: Mitgliedsantrag | 1 Tag |

Phasen 1 und 2 können direkt nacheinander umgesetzt werden. Phase 3 ist unabhängig terminierbar.

---

## Risiken & Abhängigkeiten

- **GitHub-Account der Kundin erforderlich** für Decap-CMS-Login (kostenlos, einmalige Einrichtung)
- **Kein Zwischenausfall:** Migration passiert lokal; live geht erst das fertige Ergebnis
- **Bestehende Fotos und PDFs** bleiben unangetastet und werden migriert
- **Browser-Kompatibilität:** Unverändert — Output bleibt reines HTML/CSS/JS

---

*Spec erstellt von Claude (claude-sonnet-4-6) am 2026-05-27*
