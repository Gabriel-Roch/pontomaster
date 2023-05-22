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
-- Table structure for table `control_data_ajustes`
--

DROP TABLE IF EXISTS `control_data_ajustes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `control_data_ajustes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_ajuste` int DEFAULT NULL,
  `solicitante_nome` varchar(120) DEFAULT NULL,
  `matricula` varchar(80) DEFAULT NULL,
  `tipo` varchar(45) DEFAULT NULL,
  `old_date` timestamp NULL DEFAULT NULL,
  `new_date` timestamp NULL DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `ajuste_by` varchar(120) DEFAULT NULL,
  `insert_dt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `status_aprovacao` varchar(45) DEFAULT 'peding',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `control_data_ajustes`
--

LOCK TABLES `control_data_ajustes` WRITE;
/*!40000 ALTER TABLE `control_data_ajustes` DISABLE KEYS */;
INSERT INTO `control_data_ajustes` VALUES (1,8,NULL,'123456789','saida','2023-05-21 16:02:00','2023-05-21 16:02:00','wqeqwewq',NULL,'2023-05-22 01:49:45','peding'),(2,8,NULL,'123456789','saida','2023-05-21 16:02:00','2023-05-21 16:02:00','wqeqwewq',NULL,'2023-05-22 01:50:19','peding'),(3,8,NULL,'123456789','saida','2023-05-21 16:02:00','2023-05-21 16:02:00','wqeqwewq',NULL,'2023-05-22 01:51:28','peding'),(4,8,NULL,'123456789','saida','2023-05-21 16:02:00','2023-05-21 16:02:00','wqeqwewqdsadas',NULL,'2023-05-22 01:51:30','peding'),(5,8,NULL,'123456789','saida','2023-05-21 16:02:00','2023-05-22 16:02:00','Justificado',NULL,'2023-05-22 01:52:38','peding'),(6,6,NULL,'123456789','saida','2023-05-20 16:12:00','2023-05-20 16:12:00','sadasdas',NULL,'2023-05-22 01:53:12','peding'),(7,9,NULL,'181687446','entrada','2023-05-22 01:54:00','2023-05-22 01:54:00','dsdasd',NULL,'2023-05-22 01:54:18','peding'),(8,9,'Teste Teste','181687446','entrada','2023-05-22 01:54:00','2023-05-22 01:54:00','dsadas',NULL,'2023-05-22 01:57:01','peding'),(9,9,'Teste Teste','181687446','entrada','2023-05-22 01:54:00','2023-05-22 01:54:00','',NULL,'2023-05-22 02:18:26','peding'),(10,9,'Teste Teste','181687446','entrada','2023-05-22 01:54:00','2023-05-22 01:54:00','',NULL,'2023-05-22 03:24:23','peding');
/*!40000 ALTER TABLE `control_data_ajustes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-22  0:44:02
