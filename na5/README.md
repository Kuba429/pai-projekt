Aby ta część projektu działała poprawnie wymagane jest użycie serwera. Jest to spowodowane koniecznością czytania treści pliku txt. Jedyną opcją (o jakiej wiem) osiągnięcia tego w przeglądarce jest użycie protokołu http. Wspomniany wcześniej serwer 'zaserwuje' potrzebny plik za pomocą tego właśnie protokołu.

Proponuję użyć wbudowanej w domyślną wersję pythona funkcjonalności:

`python3 -m http.server 5050`

_na niektórych systemach konieczne może być zamienienie 'python3' na 'python'_

Po uruchomieniu komendy strona będzie serwowana na podanym porcie. W przypadku tego przykładu byłoby to `localhost:5050`

# TL;DR:

W tym folderze uruchom polecenie `python3 -m http.server 5050`
