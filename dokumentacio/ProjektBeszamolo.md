# Projektbeszámoló: NetBiztos

**IKT Projektmunka I. – Osztályozó vizsga projekt (1/13Sz. évfolyam)**  
**Készítők:** Magyar Bálint, Csatlós Maja, Meiszterics Dániel  
**Dátum:** 2026. augusztus 28.

---

## 1. A projekt célja

A NetBiztos projekt fő célja egy olyan modern, fiatalos és gyakorlatias oktatási felület és információs anyagcsomag létrehozása volt, amely a 10 és 18 év közötti korosztály számára érthető módon mutatja be a digitális tér legfőbb veszélyeit. Célul tűztük ki, hogy a száraz elméleti tananyag helyett azonnal alkalmazható kiberhigiéniai tanácsokat adjunk a biztonságos jelszóhasználat, a kétlépcsős azonosítás (2FA), az adathalászat felismerése és a digitális lábnyom tudatos kezelése terén.

---

## 2. Tervezési folyamat

A projektet egy közös online tervezési fázissal indítottuk Discordon, ahol meghatároztuk a feladatkövetelményeket, a célközönséget és a megvalósítandó produktumokat. 

A tervezés legfontosabb lépései:
* **Témakörök kijelölése:** A weboldal tartalmát négy fő egységre bontottuk (Főoldal, Jelszavak & 2FA, Adathalászat, Digitális Lábnyom).
* **Vizuális koncepció és arculat:** Megterveztük az egységes színvilágot (kék, sötétszürke és fehér kombináció), a tipográfiát és a Bootstrap komponensek elrendezését.
* **Mérföldkövek és ütemterv rögzítése:** Felállítottuk a határidőket a forráskutatásra, a weboldal kódolására, a hatoldalas kiadvány és a prezentáció elkészítésére, valamint a tesztelésre.
* **Verziókezelési struktúra:** Létrehoztuk a GitHub repositoryt a kért mappaszerkezettel, és meghatároztuk az egyéni Git ágak és commitok menetét.

---

## 3. Munkamegosztás

A feladatokat a csapattagok egyéni érdeklődési köreihez és erősségeihez igazodva osztottuk fel:

* **Magyar Bálint (Tartalomfelelős, Webfejlesztő):**
  * A szakmai források feldolgozása, az `index.html` és a `passwords.html` oldalak felépítése és frontend kódolása[cite: 3, 4].
  * A prezentáció tartalmi diasorának összeállítása és a Git commitok koordinálása.
* **Csatlós Maja (Webfejlesztő, Design felelős, Szövegíró):**
  * A weboldal és a digitális anyagok egységes arculatának kialakítása, a jogtiszta képek válogatása.
  * A `phishing.html` oldal kódolása és a kapcsolódó figyelmeztető szövegek megírása[cite: 2].
  * A hatoldalas digitális kiadvány (PDF) megtervezése, tördelése és illusztrálása.
* **Meiszterics Dániel (Webfejlesztő, Szövegíró):**
  * A `privacy.html` oldal kódolása és a digitális lábnyom védelmével kapcsolatos tanácsok megfogalmazása[cite: 1].
  * A prezentáció egyedi diamintájának, animációinak és átmeneteinek technikai beállítása.
  * A forrásjegyzék rendezése, a projektbeszámoló szövegezése és a repository dokumentálása.

---

## 4. Elkészített feladatok

A projekt keretében az alábbi kötelező és választott produktumok valósultak meg maradéktalanul:

* **Négyoldalas, reszponzív Bootstrap weboldal:**
  * `index.html`: Főoldal összefoglaló kártyákkal és a kiberbiztonság jelentőségével[cite: 4].
  * `passwords.html`: Gyakorlati útmutató a jelmondatokhoz, brute-force támadásokhoz és a 2FA-hoz[cite: 3].
  * `phishing.html`: Játékbeli átverések, kamu SMS-ek és gyanús linkek felismerési szabályai[cite: 2].
  * `privacy.html`: Négy aranyszabály a magánélet védelmére és a nyilvános hálózatok kezelésére[cite: 1].
* **Prezentáció (Választott produktum A):**
  * Tíz diából álló, egyedi diamintára (nem beépített sablonra) épülő bemutató diaanyag ábrákkal, diagramokkal és animációkkal.
* **Digitális kiadvány (Választott produktum C):**
  * Hatoldalas, illusztrált PDF formátumú kisokos, amely tartalmazza a jelszószabályokat, a fiókfeltörési ellenőrzőlistát és a játékosoknak szóló biztonsági tippeket.
* **GitHub repository és forráskezelés:**
  * Szabványos könyvtárszerkezet (`README.md`, `projektterv/`, `produktum/`, `dokumentacio/`, `forrasok/`), tagonként legalább három önálló committal.

---

## 5. Felmerült problémák

A fejlesztési és szerkesztési folyamat során több technikai és formai kihívással szembesültünk:

* **Navigáció és reszponzivitás:** A navigációs sáv a kezdeti teszteléskor mobilnézetben nem nyílt le megfelelően, illetve kisebb kijelzőkön a témakártyák eltérő magassága miatt szétcsúszott az elrendezés[cite: 4].
* **Arculati eltérések:** A külön szerkesztett HTML aloldalak, a prezentáció és a PDF kiadvány kezdetben eltérő színárnyalatokat és betűtípusokat használtak.
* **Git konfliktusok:** A közös munka korai szakaszában a központi fájlok egyidejű módosítása miatt kisebb merge konfliktusok keletkeztek a repositoryban.

---

## 6. Megoldások

A felmerült hibákat a következő lépésekkel hárítottuk el:

* **Bootstrap integráció javítása:** Bálint beépítette a Bootstrap JavaScript bundle fájlját a navigáció megfelelő lenyílásához, a kártyákhoz pedig flexbox segédosztályokat (`h-100`, `d-flex`, `flex-column`) rendeltünk, ami egységes magasságot biztosít minden kijelzőn[cite: 4].
* **Egységes stíluslap és design guide:** Maja rögzítette a pontos színkódokat (Bootstrap Primary és Dark hexadecimális kódok), így a weboldal, a prezentációs diaminta és a PDF kiadvány teljesen harmonikus, egységes megjelenést kapott.
* **Fejlesztési ágak és kommunikáció:** A csapattagok külön Git feature-ágakon dolgoztak az egyes aloldalakon, a módosítások összefésülése előtt pedig Discordon egyeztettünk, így megelőztük a kódütközéseket.