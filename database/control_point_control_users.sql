CREATE DATABASE  IF NOT EXISTS `control_point` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `control_point`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: control_point
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `control_users`
--

DROP TABLE IF EXISTS `control_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `control_users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(120) NOT NULL,
  `name` varchar(120) DEFAULT NULL,
  `password` varchar(120) DEFAULT NULL,
  `active` varchar(45) DEFAULT 'disabled',
  `lv_access` varchar(45) DEFAULT '1',
  `matricula` varchar(45) NOT NULL,
  `dt_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`,`email`,`matricula`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `control_users`
--

LOCK TABLES `control_users` WRITE;
/*!40000 ALTER TABLE `control_users` DISABLE KEYS */;
INSERT INTO `control_users` VALUES (1,'admin@gmail.com','administrador','$2b$15$8Jct5B1d01kVRdb9Hsc5FOUyvOfAKNenRwFMhD.OIY755gW4KA0y2','enabled','3','123456789','2023-05-15 04:21:50'),(2,'teste@gmail.com','Teste Teste','$2b$15$YZMWwpCuAyV/5CKHoa/YtOzuM8Z1T6.Y2d5wi0W13ehglYcAu207C','enabled','1','181687446','2023-05-17 02:36:14'),(3,'teste1@gmail.com','Teste teste ','$2b$15$RsSAnSxUZfIZiJ/VMfqv2uERn50qxZPJGRegP3/Hal1rJTS.X/sNC','enabled','1','1737772','2023-05-17 03:33:50'),(4,'teste2@gmail.com','Teste gabriel','$2b$10$uSfeGMtUEXX4OlkEtbW.X.rdJBbLIld16ifVBmOIcHD9iDfSgmNIS','enabled','1','14845151','2023-05-17 04:53:21'),(5,'teste5@gmail.com','Gabriel Teste 5','$2b$14$FQLpqUG7bJL2MzmwbT9lj.Thty6idXKuTKaAX3batW7ygIZr7nBHS','enabled','1','1234598765','2023-05-17 04:58:55');
/*!40000 ALTER TABLE `control_users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-22  0:44:03
