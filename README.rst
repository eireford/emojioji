Emojioji
========

A place for emoji to live and be free.

Install
-------

    # clone the repository
    $ git clone https://github.com/eireford/emojioji
    $ cd emojioji
    # checkout a version
    $ git tag # shows the tagged versions
    $ git checkout tag

Create a virtualenv and activate it::

    $ python3 -m venv venv
    $ . venv/bin/activate

Or on Windows cmd::

    $ py -3 -m venv venv
    $ venv\Scripts\activate.bat

Install Emojioji::

    $ pip install -e .

Run
---

::

    $ export FLASK_APP=emojioji
    $ export FLASK_ENV=development
    $ flask init-db
    $ flask run

Or on Windows cmd::

    > set FLASK_APP=emojioji
    > set FLASK_ENV=development
    > flask init-db
    > flask runset FLASK_APP=emojioji

Open http://127.0.0.1:5000 in a browser.


Test
----

::

    $ pip install '.[test]'
    $ pytest

Run with coverage report::

    $ coverage run -m pytest
    $ coverage report
    $ coverage html  # open htmlcov/index.html in a browser