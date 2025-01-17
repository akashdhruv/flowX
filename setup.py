"""Build and installation script for FlowX."""

# standard libraries
import re
from setuptools import setup, find_packages

# get long description from README
with open("README.rst", mode="r") as readme:
    long_description = readme.read()

with open("flowx/__meta__.py", mode="r") as source:
    content = source.read().strip()
    metadata = {
        key: re.search(key + r'\s*=\s*[\'"]([^\'"]*)[\'"]', content).group(1)
        for key in [
            "__pkgname__",
            "__version__",
            "__authors__",
            "__license__",
            "__description__",
        ]
    }

# core dependancies
DEPENDENCIES = [
    "cython",
    "numpy",
    "scipy",
    "numba",
    "matplotlib",
    "h5py",
    "annoy",
    "shapely",
]

setup(
    name=metadata["__pkgname__"],
    version=metadata["__version__"],
    author=metadata["__authors__"],
    description=metadata["__description__"],
    license=metadata["__license__"],
    packages=find_packages(where="./"),
    package_dir={"": "./"},
    package_data={
        "": [
            "envfile",
        ]
    },
    include_package_data=True,
    long_description=long_description,
    classifiers=[
        "Programming Language :: Python :: 3.8",
        "License :: OSI Approved :: MIT License",
    ],
    install_requires=DEPENDENCIES,
)
