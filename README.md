# alkfejl
Frontend megtalálható ezen a linken: https://github.com/chrypulus/car-service-frontend
## Autószerviz
### Készítsünk kliens-szerver rendszert, amellyel egy autószerviz bejelentkezési naptárát, valamint munkalap kezelését tudjuk elősegíteni. A partnerek időpontokat a webes felületen keresztül kérhetnek.
* A partner regisztrálhat (név, cím, telefonszám, azonosító, jelszó megadásával), majd bejelentkezhet/kijelentkezhet. Bejelentkezést követően látható a foglalási naptár (az aktuális dátumtól), ahol szerelőnként láthatjuk a szabad, illetve foglalt időpontokat.
* Egy partner több időpontot is foglalhat, a naptárban látja a saját foglalásait, illetve a további foglalásokat, de utóbbiak esetén csupán a „foglalt” állapotot, a másik partner adatait nem. 
* Az időpont foglaláshoz ki kell választani egy szabad időpontot (minden nap 9 és 17 óra között, csak egész órára), a kategóriát (kötelező szerviz, műszaki vizsga, illetve meghibásodás), valamint lehet megjegyzést írni. Minden foglalás 1 óra időtartamú. Természetesen csak jövőbeli időpontok foglalhatóak.
* A foglalásokat később (de még az időpontja előtt) lehet törölni is. A szerelők a munkalapokat a grafikus felületen keresztül adminisztrálják.
* A szerelő bejelentkezhet (azonosító és jelszó megadásával) a programba. Sikeres bejelentkezést követően látja a rá vonatkozó foglalásokat (az aktuális dátumtól), illetve kijelentkezhet.
* Bejelentkezést  követően  listázódnak (a  munkalappal  nem  rendelkező) foglalások (időpont, foglalóneve, kategória ). Egy foglalást kiválasztva új munkalap nyitható (a partner adatai és az időpont automatikusan áttöltődnek).
* A munkalapra tetszőleges számú munkafolyamat, illetve alkatrész vihető fel kiválasztva az előre megadott adatok alapján. Ezeket törölni is lehet a felvitel után. A munkalapon látható a végösszeg, amely az egyes tételek hozzá adásával/törlésével változik. Végül a szerelő véglegesítheti a munkalapot (ehhez a program kérjen megerősítést).

### Az adatbázis az alábbi adatokat tárolja:  
* partnerek (név, cím, telefonszám, azonosító, jelszó);
* szerelők (név, azonosító, jelszó);
* foglalások (partner, időpont, szerelő, típus, megjegyzés);
* munkalapok (partner, szerelő, anyagok és alkatrészek);
* anyagok, alkatrészek, óradíj (név, egységár).

### Szakterületi fogalomjegyzék:
* Foglalás: időpontot, kategóriát, megjegyzést tárol, egy elvégzendő munkát ír le a rendelő részéről
* Munkalap: partner adatait, foglalás adatait és a munkafolyatokat tárolja, egy elvégzendő munkát ír le a szerelő részéről
* Munkafolyamatok: a munka egy részének nevét és az ehhez szükséges alkatrészeket(név, mennyiség) tárolja

### Szerepkörök:
* Partner: regisztrálás, be/kijelentkezés, időpontfoglalás, időpontmódosítás
* Szerelő: be/kijelentkezés, munkalap nyitása, munkafolyamatok felvétele/törlése

### Végpontok:
#### User:
* /user/login : bejelentkezés
* /user/register : regisztálás
* /user/logout : kijelentkezés
#### Reservation:
* /reservation : listázás, létrehozás
* /reservation/{id} : kiíratás, updatelés, törlés
#### Parts:
* /parts: listázás, létrehozás, módosítás
* /parts/id: lekérdezés, módosítás
#### Worksheet:
* /worksheet : listázás, létrehozás
* /worksheet/{id} : kiíratás, updatelés, törlés
* /worksheet/parts/id: alkatrész hozzáadása és eltávolítása a munkalapból

### Adatbázis

![UML](uml2.jpg)
