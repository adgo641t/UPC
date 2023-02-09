
DROP DATABASE IF EXISTS bd;
CREATE DATABASE bd;

USE bd;

CREATE TABLE jugadores (
id INTEGER NOT NULL,
username VARCHAR(20) NOT NULL,
pword VARCHAR(20) NOT NULL,
mail VARCHAR(50),
PRIMARY KEY(ID)
);


CREATE TABLE partidas(
id INTEGER NOT NULL,
juego INT NOT NULL,
jugadores INTEGER NOT NULL,
fecha VARCHAR(20),
hora VARCHAR(20),
ganador VARCHAR(20) NOT NULL,
PRIMARY KEY(ID)
);


CREATE TABLE registro (
id_j INTEGER NOT NULL,
id_p INTEGER NOT NULL,
FOREIGN KEY(id_j) REFERENCES jugadores(id),
FOREIGN KEY(id_p) REFERENCES partidas(id)
);

INSERT INTO jugadores (id,username,pword,mail) VALUES (1,'enric','1234','enric.guasch@estudiantat.upc.edu');

INSERT INTO jugadores (id,username,pword,mail) VALUES (2,'pau','1234','pau.gimenez@estudiantat.upc.edu');

INSERT INTO jugadores (id,username,pword,mail) VALUES (3,'gerard','1234','gerard.lopez@estudiantat.upc.edu');

INSERT INTO jugadores (id,username,pword,mail) VALUES (4,'oussama','1234','oussama.ayat@estudiantat.upc.edu');

INSERT INTO jugadores (id,username,pword,mail) VALUES (5,'alex','1234','alex.berrocal@estudiantat.upc.edu');

INSERT INTO jugadores (id,username,pword,mail) VALUES (6,'ingrid','1234','ingrid.hinno@estudiantat.upc.edu');


INSERT INTO partidas (id,juego,jugadores,fecha,hora,ganador) VALUES (1,2,2,'2022-09-26','18:32','pau');

INSERT INTO partidas (id,juego,jugadores,fecha,hora,ganador) VALUES (2,1,4,'2022-09-26','18:42','pau');

INSERT INTO partidas (id,juego,jugadores,fecha,hora,ganador) VALUES (3,2,3,'2022-09-27','11:13','gerard');

INSERT INTO partidas (id,juego,jugadores,fecha,hora,ganador) VALUES (4,2,3,'2022-09-28','09:03','pau');

INSERT INTO partidas (id,juego,jugadores,fecha,hora,ganador) VALUES (5,1,2,'2022-09-29','22:45','pau');



INSERT INTO registro (id_j,id_p) VALUES (1,1);

INSERT INTO registro (id_j,id_p) VALUES (2,1);

INSERT INTO registro (id_j,id_p) VALUES (2,4);

INSERT INTO registro (id_j,id_p) VALUES (1,2);

INSERT INTO registro (id_j,id_p) VALUES (2,2);

INSERT INTO registro (id_j,id_p) VALUES (5,2);

INSERT INTO registro (id_j,id_p) VALUES (6,2);

INSERT INTO registro (id_j,id_p) VALUES (2,3);

INSERT INTO registro (id_j,id_p) VALUES (3,3);

INSERT INTO registro (id_j,id_p) VALUES (4,3);

INSERT INTO registro (id_j,id_p) VALUES (1,4);

INSERT INTO registro (id_j,id_p) VALUES (4,4);

INSERT INTO registro (id_j,id_p) VALUES (6,4);

INSERT INTO registro (id_j,id_p) VALUES (2,5);

INSERT INTO registro (id_j,id_p) VALUES (3,5);



CREATE TABLE palabras (
palabra VARCHAR(20) NOT NULL
);

INSERT INTO palabras (palabra) VALUES ('patata');
INSERT INTO palabras (palabra) VALUES ('moneda');
INSERT INTO palabras (palabra) VALUES ('pato');
INSERT INTO palabras (palabra) VALUES ('sonrisa');
INSERT INTO palabras (palabra) VALUES ('navidad');
INSERT INTO palabras (palabra) VALUES ('coche');
INSERT INTO palabras (palabra) VALUES ('ordenador');
INSERT INTO palabras (palabra) VALUES ('vaca');
INSERT INTO palabras (palabra) VALUES ('zebra');
INSERT INTO palabras (palabra) VALUES ('iphone');
INSERT INTO palabras (palabra) VALUES ('calculadora');
INSERT INTO palabras (palabra) VALUES ('examen');
INSERT INTO palabras (palabra) VALUES ('gafas');
INSERT INTO palabras (palabra) VALUES ('perro');
INSERT INTO palabras (palabra) VALUES ('casa');
INSERT INTO palabras (palabra) VALUES ('libro');
INSERT INTO palabras (palabra) VALUES ('flor');
INSERT INTO palabras (palabra) VALUES ('mesa');
INSERT INTO palabras (palabra) VALUES ('silla');
INSERT INTO palabras (palabra) VALUES ('auriculares');
INSERT INTO palabras (palabra) VALUES ('barco');
INSERT INTO palabras (palabra) VALUES ('avion');
INSERT INTO palabras (palabra) VALUES ('luna');