import io

from setuptools import find_packages
from setuptools import setup

with io.open("README.rst", "rt", encoding="utf8") as f:
    readme = f.read()

setup(
    name="emojioji",
    version="1.0.0",
    url="http://eireford.com/",
    license="MIT",
    maintainer="Eire Ford",
    maintainer_email="eireford@gmail.com",
    description="A place where emoji can live and be free.",
    long_description=readme,
    packages=find_packages(),
    include_package_data=True,
    zip_safe=False,
    install_requires=["flask"],
    extras_require={"test": ["pytest", "coverage"]},
)