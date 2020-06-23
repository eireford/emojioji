Emojioji
========

A place for emoji to live and be free.

Install
-------

- $ git clone https://github.com/eireford/emojioji
- $ cd emojioji
- $ git tag # shows the tagged versions
- $ git checkout tag
- $ python3 -m venv venv
- $ . venv/bin/activate

- (Or on Windows cmd)
- (> py -3 -m venv venv)
- (> venv\Scripts\activate.bat)

- $ pip install -e .

Run
---

- $ export FLASK_APP=emojioji
- $ export FLASK_ENV=development
- $ flask init-db
- $ flask run

- (Or on Windows cmd)
- (> set FLASK_APP=emojioji)
- (> set FLASK_ENV=development)
- (> flask init-dbrst)
- (> flask runset FLASK_APP=emojioji)

- Open http://127.0.0.1:5000 in a browser.

Test
----

- $ pip install '.[test]'
- $ pytest

Run with coverage report

- $ coverage run -m pytest
- $ coverage report
- $ coverage html  # open htmlcov/index.html in a browser
