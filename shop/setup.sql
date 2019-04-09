DROP TABLE produkte;

CREATE TABLE produkte (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    preis NUMERIC
);

INSERT INTO produkte(name, preis) VALUES ("Festplatte", 89.99);
INSERT INTO produkte(name, preis) VALUES ("Mouse Pad", 9.99);
INSERT INTO produkte(name, preis) VALUES ("USB-Stick", 3.69);
INSERT INTO produkte(name, preis) VALUES ("Webcam", 29.99);

SELECT * FROM produkte;