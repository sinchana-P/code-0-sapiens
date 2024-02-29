-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: college
-- ------------------------------------------------------
-- Server version	8.0.35

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
-- Table structure for table `attendance`
--

DROP TABLE IF EXISTS `attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attendance` (
  `id` varchar(20) NOT NULL,
  `sub_id` varchar(45) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `has_attended` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`,`sub_id`,`date`,`time`),
  KEY `sub_id_idx` (`sub_id`),
  CONSTRAINT `id` FOREIGN KEY (`id`) REFERENCES `user` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `sub_id` FOREIGN KEY (`sub_id`) REFERENCES `subjects` (`sub_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendance`
--

LOCK TABLES `attendance` WRITE;
/*!40000 ALTER TABLE `attendance` DISABLE KEYS */;
INSERT INTO `attendance` VALUES ('COSS001','1','2024-02-24','01:30:00',1),('COSS001','1','2024-02-25','01:30:00',1),('COSS001','1','2024-02-26','01:30:00',1),('COSS001','1','2024-02-27','01:30:00',1),('COSS001','1','2024-02-28','01:30:00',1),('COSS001','1','2024-02-29','01:30:00',1),('COSS001','1','2024-03-01','01:31:00',0),('COSS001','1','2024-03-02','01:31:00',0),('COSS002','1','2024-02-21','01:31:00',1),('COSS002','1','2024-02-24','01:30:00',1),('COSS002','1','2024-02-25','01:30:00',1),('COSS002','1','2024-02-26','01:30:00',1),('COSS002','1','2024-02-27','01:30:00',1),('COSS002','1','2024-02-28','01:30:00',1),('COSS002','1','2024-02-29','01:30:00',1),('COSS002','1','2024-03-01','01:31:00',0),('COSS002','2','2024-02-22','01:31:00',1),('COSS002','2','2024-03-01','01:31:00',1);
/*!40000 ALTER TABLE `attendance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chapter`
--

DROP TABLE IF EXISTS `chapter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chapter` (
  `chp_id` varchar(10) NOT NULL,
  `chapter_name` varchar(45) NOT NULL,
  PRIMARY KEY (`chp_id`),
  UNIQUE KEY `chapter_name_UNIQUE` (`chapter_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chapter`
--

LOCK TABLES `chapter` WRITE;
/*!40000 ALTER TABLE `chapter` DISABLE KEYS */;
INSERT INTO `chapter` VALUES ('1','chapter 1'),('2','chapter 2'),('3','chapter 3'),('4','chapter 4'),('5','chapter 5');
/*!40000 ALTER TABLE `chapter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `class`
--

DROP TABLE IF EXISTS `class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `class` (
  `class_id` varchar(10) NOT NULL,
  `class_name` varchar(45) NOT NULL,
  PRIMARY KEY (`class_id`),
  UNIQUE KEY `semester_name_UNIQUE` (`class_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `class`
--

LOCK TABLES `class` WRITE;
/*!40000 ALTER TABLE `class` DISABLE KEYS */;
INSERT INTO `class` VALUES ('10','10'),('8','8'),('9','9');
/*!40000 ALTER TABLE `class` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lesson_plan`
--

DROP TABLE IF EXISTS `lesson_plan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lesson_plan` (
  `cls_id` varchar(10) NOT NULL,
  `sub_id` varchar(10) NOT NULL,
  `mod_id` varchar(10) NOT NULL,
  `chp_id` varchar(10) NOT NULL,
  `is_completed` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`cls_id`,`sub_id`,`mod_id`,`chp_id`),
  KEY `sub_id3_idx` (`sub_id`),
  KEY `mod_id3_idx` (`mod_id`),
  KEY `chp_id3_idx` (`chp_id`),
  CONSTRAINT `chp_id3` FOREIGN KEY (`chp_id`) REFERENCES `chapter` (`chp_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `mod_id3` FOREIGN KEY (`mod_id`) REFERENCES `modules` (`mod_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `sub_id3` FOREIGN KEY (`sub_id`) REFERENCES `subjects` (`sub_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lesson_plan`
--

LOCK TABLES `lesson_plan` WRITE;
/*!40000 ALTER TABLE `lesson_plan` DISABLE KEYS */;
INSERT INTO `lesson_plan` VALUES ('10','1','1','1',0),('10','1','1','2',0),('10','1','1','3',0),('10','1','1','4',0),('10','1','1','5',0),('10','1','2','1',0),('10','1','2','2',0),('10','1','2','3',0),('10','1','2','4',0),('10','1','2','5',0),('10','2','1','1',0),('10','2','1','2',0),('10','2','1','3',0),('10','2','1','4',0),('10','2','1','5',0),('10','2','2','1',0),('10','2','2','2',0),('10','2','2','3',0),('10','2','2','4',0),('10','2','2','5',0),('8','1','1','1',0),('8','1','1','2',0),('8','1','1','3',0),('8','1','1','4',0),('8','1','1','5',0),('8','1','2','1',0),('8','1','2','2',0),('8','1','2','3',0),('8','1','2','4',0),('8','1','2','5',0),('8','2','1','1',0),('8','2','1','2',0),('8','2','1','3',0),('8','2','1','4',0),('8','2','1','5',0),('8','2','2','1',0),('8','2','2','2',0),('8','2','2','3',0),('8','2','2','4',0),('8','2','2','5',0),('9','1','1','1',1),('9','1','1','2',0),('9','1','1','3',0),('9','1','1','4',0),('9','1','1','5',0),('9','1','2','1',0),('9','1','2','2',0),('9','1','2','3',0),('9','1','2','4',0),('9','1','2','5',0),('9','2','1','1',0),('9','2','1','2',0),('9','2','1','3',0),('9','2','1','4',0),('9','2','1','5',0),('9','2','2','1',0),('9','2','2','2',0),('9','2','2','3',0),('9','2','2','4',0),('9','2','2','5',0);
/*!40000 ALTER TABLE `lesson_plan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modules`
--

DROP TABLE IF EXISTS `modules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modules` (
  `mod_id` varchar(10) NOT NULL,
  `module_name` varchar(45) NOT NULL,
  PRIMARY KEY (`mod_id`),
  UNIQUE KEY `module_name_UNIQUE` (`module_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modules`
--

LOCK TABLES `modules` WRITE;
/*!40000 ALTER TABLE `modules` DISABLE KEYS */;
INSERT INTO `modules` VALUES ('1','module 1'),('2','module 2'),('3','module 3');
/*!40000 ALTER TABLE `modules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notes`
--

DROP TABLE IF EXISTS `notes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notes` (
  `class_id` varchar(10) NOT NULL,
  `sub_id` varchar(10) NOT NULL,
  `mod_id` varchar(10) NOT NULL,
  `chp_id` varchar(10) NOT NULL,
  `pdf` varchar(1000) DEFAULT NULL,
  `link` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`class_id`,`sub_id`,`mod_id`,`chp_id`),
  KEY `sub_id2_idx` (`sub_id`),
  KEY `mod_id_idx` (`mod_id`),
  KEY `chp_id_idx` (`chp_id`),
  CONSTRAINT `chp_id` FOREIGN KEY (`chp_id`) REFERENCES `chapter` (`chp_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `mod_id` FOREIGN KEY (`mod_id`) REFERENCES `modules` (`mod_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `sem_id` FOREIGN KEY (`class_id`) REFERENCES `class` (`class_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `sub_id2` FOREIGN KEY (`sub_id`) REFERENCES `subjects` (`sub_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notes`
--

LOCK TABLES `notes` WRITE;
/*!40000 ALTER TABLE `notes` DISABLE KEYS */;
INSERT INTO `notes` VALUES ('10','1','1','1',NULL,NULL),('10','1','1','2',NULL,NULL),('10','1','1','3',NULL,NULL),('10','1','1','4',NULL,NULL),('10','1','1','5',NULL,NULL),('10','1','2','1',NULL,NULL),('10','1','2','2',NULL,NULL),('10','1','2','3',NULL,NULL),('10','1','2','4',NULL,NULL),('10','1','2','5',NULL,NULL),('10','2','1','1',NULL,NULL),('10','2','1','2',NULL,NULL),('10','2','1','3',NULL,NULL),('10','2','1','4',NULL,NULL),('10','2','1','5',NULL,NULL),('10','2','2','1',NULL,NULL),('10','2','2','2',NULL,NULL),('10','2','2','3',NULL,NULL),('10','2','2','4',NULL,NULL),('10','2','2','5',NULL,NULL),('8','1','1','1',NULL,'https://youtu.be/5T0SiJocPCI?si=oQjx0aos83eH7YcO'),('8','1','1','2','https://drive.google.com/file/d/19fw4goKHdPEJaHlxcg_ufaepjmikXtkU/view?usp=drive_link',NULL),('8','1','1','3',NULL,NULL),('8','1','1','4',NULL,NULL),('8','1','1','5',NULL,NULL),('8','1','2','1',NULL,NULL),('8','1','2','2',NULL,NULL),('8','1','2','3',NULL,NULL),('8','1','2','4',NULL,NULL),('8','1','2','5',NULL,NULL),('8','2','1','1',NULL,NULL),('8','2','1','2',NULL,NULL),('8','2','1','3',NULL,NULL),('8','2','1','4',NULL,NULL),('8','2','1','5',NULL,NULL),('8','2','2','1',NULL,NULL),('8','2','2','2',NULL,NULL),('8','2','2','3',NULL,NULL),('8','2','2','4',NULL,NULL),('8','2','2','5',NULL,NULL),('9','1','1','1',NULL,NULL),('9','1','1','2',NULL,NULL),('9','1','1','3',NULL,NULL),('9','1','1','4',NULL,NULL),('9','1','1','5',NULL,NULL),('9','1','2','1',NULL,NULL),('9','1','2','2',NULL,NULL),('9','1','2','3',NULL,NULL),('9','1','2','4',NULL,NULL),('9','1','2','5',NULL,NULL),('9','2','1','1',NULL,NULL),('9','2','1','2',NULL,NULL),('9','2','1','3',NULL,NULL),('9','2','1','4',NULL,NULL),('9','2','1','5',NULL,NULL),('9','2','2','1',NULL,NULL),('9','2','2','2',NULL,NULL),('9','2','2','3',NULL,NULL),('9','2','2','4',NULL,NULL),('9','2','2','5',NULL,NULL);
/*!40000 ALTER TABLE `notes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subjects`
--

DROP TABLE IF EXISTS `subjects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subjects` (
  `sub_id` varchar(10) NOT NULL,
  `subject_name` varchar(45) NOT NULL,
  PRIMARY KEY (`sub_id`),
  UNIQUE KEY `subject_name_UNIQUE` (`subject_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subjects`
--

LOCK TABLES `subjects` WRITE;
/*!40000 ALTER TABLE `subjects` DISABLE KEYS */;
INSERT INTO `subjects` VALUES ('1','maths'),('2','science'),('3','social');
/*!40000 ALTER TABLE `subjects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `ID` varchar(10) NOT NULL,
  `NAME` varchar(45) NOT NULL,
  `PASSWORD` varchar(45) NOT NULL,
  `ROLE` varchar(20) NOT NULL,
  `CLS_ID` varchar(45) DEFAULT NULL,
  `PHONE` bigint NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `NAME_UNIQUE` (`NAME`),
  UNIQUE KEY `PHONE_UNIQUE` (`PHONE`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('COSS001','Sinchana','sinchana','student','9',8310194465),('COSS002','Nandish','nan','student','9',8310194464),('COSS003','Ace','sinchana','student','9',8310194463),('COSS004','D\'Luffy','sinchana','student','9',8310194462),('COSS005','Monkey','sinchana','student','9',8310194461),('COSS006','Potter','sinchana','student','9',8310194460),('COSS007','Harry','sinchana','student','9',8310194469),('COST001','Sanketh','sanketh','teacher','null',9611076613);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-01  1:07:50
