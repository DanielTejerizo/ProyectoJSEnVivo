-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema js
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema js
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `js` DEFAULT CHARACTER SET utf8 ;
USE `js` ;

-- -----------------------------------------------------
-- Table `js`.`Productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `js`.`Productos` (
  `titulo` VARCHAR(200) NOT NULL,
  `autor` VARCHAR(200) NOT NULL,
  `anio_publicacion` INT NOT NULL,
  `genero` VARCHAR(200) NOT NULL,
  `imagen` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`titulo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `js`.`Clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `js`.`Clientes` (
  `dni` VARCHAR(9) NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `apellidos` VARCHAR(200) NOT NULL,
  `telefono` INT NOT NULL,
  `email` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`dni`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

/*-----------------------------Clientes-------------------------------------------*/

INSERT INTO clientes (dni, nombre, apellidos, telefono, email) 
VALUES ("12345678A", "Juan", "Gómez Pérez", "983521421", "juangope@gmail.com"),
("98765432B", "María", "López García", "983251474", "marialoga@gmail.com"),
("56789012C", "Pedro", "Martínez Ruiz", "983656558", "pedromarui@hotmail.com"),
("34567890D", "Ana", "González Sánchez", "983522554", "anagosanch@gmail.com"),
("11111111E", "Laura", "Díaz López", "983254714", "lauradilope@gmail.com");

/*-----------------------------Productos---------------------------------------------------------------------------*/

INSERT INTO productos (titulo, autor, anio_publicacion, genero, imagen)
VALUES ("Cien años de soledad", "Gabriel García Márquez", 1967, "Realismo mágico", "../Img/100anios.png"),
("To Kill a Mockingbird", "Harper Lee", 1960, "Novela", "../Img/ToKillAMockinbird.png"),
("1984", "George Orwell", 1949, "Distopía", "../Img/1984.png"),
("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Ficción", "../Img/The Great Gatsby.png"),
("The Catcher in the Rye", "J.D. Salinger", 1951, "Novela", "../Img/The Catcher in the Rye.png"),
("Brave New World", "Aldous Huxley", 1932, "Ciencia ficción", "../Img/Brave New World.png"),
("The Hobbit", "J.R.R. Tolkien", 1937, "Fantasía", "../Img/The Hobbit.png"),
("The Lord of the Rings", "J.R.R. Tolkien", 1954, "Fantasía", "../Img/The Lord of the Rings.png"),
("One Hundred Years of Solitude", "Gabriel García Márquez", 1967, "Realismo mágico", "../Img/One Hundred Years of Solitude.png"),
("Pride and Prejudice", "Jane Austen", 1813, "Novela romántica", "../Img/Pride and Prejudice.png"),
("The Odyssey", "Homer", 1800, "Épico", "../Img/The Odyssey.png");