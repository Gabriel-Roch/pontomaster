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
-- Table structure for table `control_register_ponto`
--

DROP TABLE IF EXISTS `control_register_ponto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `control_register_ponto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `matricula` varchar(80) DEFAULT NULL,
  `nome` varchar(120) DEFAULT NULL,
  `dt_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `action` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `control_register_ponto`
--

LOCK TABLES `control_register_ponto` WRITE;
/*!40000 ALTER TABLE `control_register_ponto` DISABLE KEYS */;
INSERT INTO `control_register_ponto` VALUES (1,'1234598765','Gabriel Teste 5','2023-05-17 05:00:21','entrada'),(2,'1234598765','Gabriel Teste 5','2023-05-17 05:00:25','saida'),(3,'123456789','administrador','2023-05-17 05:00:52','entrada'),(4,'123456789','administrador','2023-05-17 05:00:56','saida'),(5,'123456789','administrador','2023-05-20 16:12:13','entrada'),(6,'123456789','administrador','2023-05-20 16:12:18','saida'),(7,'123456789','administrador','2023-05-21 16:02:08','entrada'),(8,'123456789','administrador','2023-05-21 16:02:10','saida'),(9,'181687446','Teste Teste','2023-05-22 01:54:07','entrada'),(10,'181687446','Teste Teste','2023-05-22 01:54:09','saida'),(11,'123456789','administrador','2023-05-22 03:12:16','entrada'),(12,'123456789','administrador','2023-05-22 03:12:20','saida'),(13,'181687446','Teste Teste','2023-05-22 03:24:04','entrada'),(14,'181687446','Teste Teste','2023-05-22 03:24:07','saida');
/*!40000 ALTER TABLE `control_register_ponto` ENABLE KEYS */;
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
