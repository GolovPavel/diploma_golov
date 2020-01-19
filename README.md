# Diploma MEPHI

Distribution of radioactive impurities in the atmosphere.

## How to compile project (Linux)

0. Install texlive: ```sudo apt install texlive-latex-extra```.
1. Go to the root of the repository. 
2. Install special fonts: ```sudo dpkg -i scalable-cyrfonts-tex-shurph_4.16_all.deb```.
3. Go to diploma/practice folder and run ```latexmk -pdf main.tex```.

## How to compile project (Docker)

1. Pull latex docker image: ```docker pull thomasweise/docker-texlive-full```.
2. Run the docker container: ```docker run -ti -v hostPath:containerPath imageId```.
Where 
```hostPath``` and ```containerPath``` - paths for mounting;
```imageId``` - id of the pulled latex image.
3. Jump into container: ```docker exec -ti containerId bash```
Where 
```containerId``` - id of created docker container.
4. Go to ```containerPath``` and install special fonts:  ```sudo dpkg -i scalable-cyrfonts-tex-shurph_4.16_all.deb```.
5. Go to diploma/practice folder and run ```latexmk -pdf main.tex```.
