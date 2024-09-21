from setuptools import find_packages, setup

setup(
    name="happybot",
    version="0.0.1",
    author="khushi",
    author_email="lamakhusee@gmail.com",
    packages=find_packages(),
    install_requires=['langchain-astradb','langchain ','langchain_google_genai','datasets','pypdf','python-dotenv','flask']
)


