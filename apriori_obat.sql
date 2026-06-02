-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 02, 2026 at 09:04 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `apriori_obat`
--

-- --------------------------------------------------------

--
-- Table structure for table `data_obat`
--

CREATE TABLE `data_obat` (
  `id_obat` int(11) NOT NULL,
  `kode_obat` int(11) NOT NULL,
  `nama_obat` varchar(100) NOT NULL,
  `jenis_obat` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `data_obat`
--

INSERT INTO `data_obat` (`id_obat`, `kode_obat`, `nama_obat`, `jenis_obat`) VALUES
(1, 1001, 'Allopurinol', 'Tablet'),
(2, 1002, 'Alpara', 'Tablet'),
(3, 1003, 'Ambroxol', 'Tablet'),
(4, 1004, 'Ambroxol Syrup', 'Sirup'),
(5, 1005, 'Amlodipine', 'Tablet'),
(6, 1006, 'Amoxicillin', 'Kapsul'),
(7, 1007, 'Antasida', 'Tablet'),
(8, 1008, 'Asam Mefenamat', 'Kapsul'),
(9, 1009, 'Betahistine', 'Tablet'),
(10, 1010, 'CTM', 'Tablet'),
(11, 1011, 'Calas', 'Tablet'),
(12, 1012, 'Cefadroxil', 'Kapsul'),
(13, 1013, 'Cefat', 'Tablet'),
(14, 1014, 'Cetirizine', 'Tablet'),
(15, 1015, 'Cotrimoxazole', 'Tablet'),
(16, 1016, 'DMP Syr', 'Sirup'),
(17, 1017, 'Dexamethasone', 'Tablet'),
(18, 1018, 'Dextromethorphan', 'Tablet'),
(19, 1019, 'Domperidone', 'Tablet'),
(20, 1020, 'Genta Salep', 'Salep'),
(21, 1021, 'Glimepiride', 'Tablet'),
(22, 1022, 'Hustab', 'Tablet'),
(23, 1023, 'Ibuprofen', 'Tablet'),
(24, 1024, 'Ketokonazole', 'Tablet'),
(25, 1025, 'Lansoprazole', 'Kapsul'),
(26, 1026, 'Meloxicam', 'Tablet'),
(27, 1027, 'Metformin', 'Tablet'),
(28, 1028, 'Methylprednisolone', 'Tablet'),
(29, 1029, 'Metronidazole', 'Tablet'),
(30, 1030, 'Natrium Diklofenak', 'Tablet'),
(31, 1031, 'Neurodex', 'Tablet'),
(32, 1032, 'OAT', 'Tablet'),
(33, 1033, 'OBH Syrup', 'Sirup'),
(34, 1034, 'Paracetamol', 'Tablet'),
(35, 1035, 'Paracetamol Syrup', 'Sirup'),
(36, 1036, 'Piroxicam', 'Kapsul'),
(37, 1037, 'Ranitidin', 'Tablet'),
(38, 1038, 'Salbutamol', 'Tablet'),
(39, 1039, 'Simvastatin', 'Tablet'),
(40, 1040, 'Vernagol', 'Tablet'),
(41, 1041, 'Vit B1', 'Tablet'),
(42, 1042, 'Vit B12', 'Tablet'),
(43, 1043, 'Vit C', 'Tablet');

-- --------------------------------------------------------

--
-- Table structure for table `data_pasien`
--

CREATE TABLE `data_pasien` (
  `id_pasien` int(11) NOT NULL,
  `kode_pasien` varchar(11) NOT NULL,
  `nama_pasien` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `data_pasien`
--

INSERT INTO `data_pasien` (`id_pasien`, `kode_pasien`, `nama_pasien`) VALUES
(1, 'P01', 'Amran Munthe'),
(2, 'P02', 'Dahliana hsb'),
(3, 'P03', 'Roshida Rambe'),
(4, 'P04', 'Roipah'),
(5, 'P05', 'Siti Aras'),
(6, 'P06', 'Budi Helmi'),
(7, 'P07', 'Nurhalimah hsb'),
(8, 'P08', 'Sumanah'),
(9, 'P09', 'Jamiah Rambe'),
(10, 'P10', 'Muliana'),
(11, 'P11', 'Muhyar hsb'),
(12, 'P12', 'Ngatinah'),
(13, 'P13', 'Rosliar Sinaga'),
(14, 'P14', 'Partin dangan'),
(15, 'P15', 'Atomia'),
(16, 'P16', 'Rosiah'),
(17, 'P17', 'Ngatinah'),
(18, 'P18', 'R. Lela Muda'),
(19, 'P19', 'Iskandar Munthe'),
(20, 'P20', 'Roliah'),
(21, 'P21', 'Siti Rogayah'),
(22, 'P22', 'Aisyah'),
(23, 'P23', 'Iyoh Efendi'),
(24, 'P24', 'Hasanuddin'),
(25, 'P25', 'Amran'),
(26, 'P26', 'Jamiah Rambe'),
(27, 'P27', 'Muliana'),
(28, 'P28', 'Muhyar hsb'),
(29, 'P29', 'Ngatinah'),
(30, 'P30', 'Rosliar Sinaga'),
(31, 'P31', 'Partin dangan'),
(32, 'P32', 'Atomia'),
(33, 'P33', 'Rosiah'),
(34, 'P34', 'Ali Asri'),
(35, 'P35', 'Amat Ritonga'),
(36, 'P36', 'Wagiyem'),
(37, 'P37', 'Azizah Munthe'),
(38, 'P38', 'Risma Tampubolon'),
(39, 'P39', 'Lismen'),
(40, 'P40', 'Roliah'),
(41, 'P41', 'Nur Santi'),
(42, 'P42', 'Sarmoni'),
(43, 'P43', 'Rosinta Martun'),
(44, 'P44', 'Nurhayati'),
(45, 'P45', 'Lusper Sihotang'),
(46, 'P46', 'Siti Arpah'),
(47, 'P47', 'Zalnani'),
(48, 'P48', 'Ngatindah'),
(49, 'P49', 'M. Ridwan'),
(50, 'P50', 'Sufya'),
(51, 'P51', 'Masbyah hsb'),
(52, 'P52', 'Hamdani Harahap'),
(53, 'P53', 'Bunga Kita'),
(54, 'P54', 'Sudirman'),
(55, 'P55', 'Jemiah'),
(56, 'P56', 'Juspadimiar'),
(57, 'P57', 'Napiah'),
(58, 'P58', 'Fandi'),
(59, 'P59', 'Lili'),
(60, 'P60', 'Amin Hamzah'),
(61, 'P61', 'Rosiah'),
(62, 'P62', 'Ali Asri'),
(63, 'P63', 'Syahbudi Nasution'),
(64, 'P64', 'Siti Rogayah'),
(65, 'P65', 'Hasanuddin'),
(66, 'P66', 'Amat Ritonga'),
(67, 'P67', 'Bilah Simamora'),
(68, 'P68', 'Syamsul Subairi'),
(69, 'P69', 'Aturan Sinaga'),
(70, 'P70', 'M. Ridwan'),
(71, 'P71', 'Hamdani Harahap'),
(72, 'P72', 'Bunga Kita'),
(73, 'P73', 'Sudirman'),
(74, 'P74', 'Jemiah'),
(75, 'P75', 'Juspadimiar'),
(76, 'P76', 'Nafsya'),
(77, 'P77', 'Pandi'),
(78, 'P78', 'Lili'),
(79, 'P79', 'Nyatinah'),
(80, 'P80', 'Rosiah'),
(81, 'P81', 'Sumanah'),
(82, 'P82', 'Muliana'),
(83, 'P83', 'Muhyar Hsb'),
(84, 'P84', 'Rosliar Sinaga'),
(85, 'P85', 'Partin Dangan'),
(86, 'P86', 'Amat Ritonga'),
(87, 'P87', 'Wagiyem'),
(88, 'P88', 'Azizah Munthe'),
(89, 'P89', 'Risma Tampubolon'),
(90, 'P90', 'Lismen'),
(91, 'P91', 'Roliah'),
(92, 'P92', 'Nur Santi'),
(93, 'P93', 'Sarmoni'),
(94, 'P94', 'Rosinta Martun'),
(95, 'P95', 'Nurhayati'),
(96, 'P96', 'Lusper Sihotang'),
(97, 'P97', 'Siti Arpah'),
(98, 'P98', 'Zalnani'),
(99, 'P99', 'Ngatindah'),
(100, 'P100', 'Ngatindah'),
(101, 'P101', 'M. Ridwan'),
(102, 'P102', 'Umiwati'),
(103, 'P103', 'Masbyah Hsb'),
(104, 'P104', 'Hamdani Harahap'),
(105, 'P105', 'Bunga Kita'),
(106, 'P106', 'Sudirman'),
(107, 'P107', 'Jemiah'),
(108, 'P108', 'Juspadimiar'),
(109, 'P109', 'Arnan'),
(110, 'P110', 'Fahri'),
(111, 'P111', 'Lili'),
(112, 'P112', 'Watini'),
(113, 'P113', 'Sarmoni'),
(114, 'P114', 'Rosinta Martun'),
(115, 'P115', 'Nurhayati'),
(116, 'P116', 'Lusper Sihotang'),
(117, 'P117', 'Siti Arpah'),
(118, 'P118', 'Zalnani'),
(119, 'P119', 'Ngatindah'),
(120, 'P120', 'Sopiah'),
(121, 'P121', 'Masbyah Hsb'),
(122, 'P122', 'Hamdani Harahap'),
(123, 'P123', 'Bunga Kita'),
(124, 'P124', 'Sudirman'),
(125, 'P125', 'Jemiah'),
(126, 'P126', 'Juspadimiar'),
(127, 'P127', 'Nanda'),
(128, 'P128', 'Supardi'),
(129, 'P129', 'Lili'),
(130, 'P130', 'Ngatindah'),
(131, 'P131', 'M. Ridwan'),
(132, 'P132', 'Sopiah '),
(133, 'P133', 'Masbyah Hsb'),
(134, 'P134', 'Hamdani Harahap'),
(135, 'P135', 'Rosiah'),
(136, 'P136', 'Jemiah'),
(137, 'P137', 'Juspadimiar'),
(138, 'P138', 'Sudirman'),
(139, 'P139', 'Fandi'),
(140, 'P140', 'Lili'),
(141, 'P141', 'Masbyah Hsb'),
(142, 'P142', 'M. Ridwan'),
(143, 'P143', 'Zalnani'),
(144, 'P144', 'Siti Arpah'),
(145, 'P145', 'Lusper Sihotang'),
(146, 'P146', 'Nurhayati'),
(147, 'P147', 'Rosinta Martun'),
(148, 'P148', 'Sarmoni'),
(149, 'P149', 'Rosinta Martun'),
(150, 'P150', 'Nurhayati'),
(151, 'P151', 'Lusper Sihotang'),
(152, 'P152', 'Siti Arpah'),
(153, 'P153', 'Zalnani'),
(154, 'P154', 'Ngatindah'),
(155, 'P155', 'M. Ridwan'),
(156, 'P156', 'Hj. Sopiah Srg'),
(157, 'P157', 'Masbyah Hsb'),
(158, 'P158', 'Hamdani Harahap'),
(159, 'P159', 'Bunga Kita'),
(160, 'P160', 'Sudirman'),
(161, 'P161', 'Jemiah'),
(162, 'P162', 'Juspadimiar'),
(163, 'P163', 'Napiah'),
(164, 'P164', 'Paolah'),
(165, 'P165', 'Lili'),
(166, 'P166', 'Jamiah Rambe'),
(167, 'P167', 'Muliana'),
(168, 'P168', 'Muhyar Hsb'),
(169, 'P169', 'Ngatinah'),
(170, 'P170', 'Rosliar Sinaga'),
(171, 'P171', 'Partin Dangan'),
(172, 'P172', 'Atomia'),
(173, 'P173', 'Rosiah'),
(174, 'P174', 'Ali Asri'),
(175, 'P175', 'Amin Hamzah'),
(176, 'P176', 'Syahbudi Nasution'),
(177, 'P177', 'Siti Rogayah'),
(178, 'P178', 'Syamsul Subairi'),
(179, 'P179', 'Sinaga'),
(180, 'P180', 'Watini'),
(181, 'P181', 'Wagiyem'),
(182, 'P182', 'Azizah Munthe'),
(183, 'P183', 'Risma Tampubolon'),
(184, 'P184', 'Lismen'),
(185, 'P185', 'Roliah'),
(186, 'P186', 'Nur Santi'),
(187, 'P187', 'Dahliana Hsb'),
(188, 'P188', 'Roshida Rambe'),
(189, 'P189', 'Roipah'),
(190, 'P190', 'Siti Aras'),
(191, 'P191', 'Budi Helmi'),
(192, 'P192', 'Nurhalimah Hsb'),
(193, 'P193', 'R. Lela Muda'),
(194, 'P194', 'Iskandar Munthe'),
(195, 'P195', 'Roliah'),
(196, 'P196', 'Siti Rogayah'),
(197, 'P197', 'Aisyah'),
(198, 'P198', 'Iyoh Efendi'),
(199, 'P199', 'Hasanuddin'),
(200, 'P200', 'Hamdan'),
(201, 'P201', 'Ali Asri'),
(202, 'P202', 'Atomia'),
(203, 'P203', 'Ngatinah'),
(204, 'P204', 'Rosliar Sinaga'),
(205, 'P205', 'Partin Dangan'),
(206, 'P206', 'Ngatinah'),
(207, 'P207', 'Rosiah'),
(208, 'P208', 'Roipah'),
(209, 'P209', 'Amin Hamzah'),
(210, 'P210', 'Napiah'),
(211, 'P211', 'Sumanah'),
(212, 'P212', 'Jamiah Rambe'),
(213, 'P213', 'Muliana'),
(214, 'P214', 'Muhyar Hsb'),
(215, 'P215', 'Rosliar Sinaga'),
(216, 'P216', 'Partin Dangan'),
(217, 'P217', 'Amat Ritonga'),
(218, 'P218', 'Wagiyem'),
(219, 'P219', 'Azizah Munthe'),
(220, 'P220', 'Risma Tampubolon'),
(221, 'P221', 'Risman'),
(222, 'P222', 'Roliah'),
(223, 'P223', 'Nur Santi'),
(224, 'P224', 'Sarmoni'),
(225, 'P225', 'Rosinta Martun'),
(226, 'P226', 'Nurhayati'),
(227, 'P227', 'Lusper Sihotang'),
(228, 'P228', 'Siti Arpah'),
(229, 'P229', 'Zalnani'),
(230, 'P230', 'Ngatindah'),
(231, 'P231', 'M. Ridwan'),
(232, 'P232', 'Sopiah Siregar'),
(233, 'P233', 'Hafsyah Hsb'),
(234, 'P234', 'Hamdani Harahap'),
(235, 'P235', 'Bunga Kita'),
(236, 'P236', 'Sudirman'),
(237, 'P237', 'Jemiah'),
(238, 'P238', 'Juspadimiar'),
(239, 'P239', 'Napiah'),
(240, 'P240', 'Paolah'),
(241, 'P241', 'Lili'),
(242, 'P242', 'Maya Hsb'),
(243, 'P243', 'Jamiah Rambe'),
(244, 'P244', 'Muliana'),
(245, 'P245', 'Mukhyar Hsb'),
(246, 'P246', 'Ngatinah'),
(247, 'P247', 'Rosliar Sinaga'),
(248, 'P248', 'Martin'),
(249, 'P249', 'Atomia'),
(250, 'P250', 'Rosiah');

-- --------------------------------------------------------

--
-- Table structure for table `data_transaksi`
--

CREATE TABLE `data_transaksi` (
  `id_transaksi` int(11) NOT NULL,
  `tanggal` date DEFAULT NULL,
  `kode_pasien` varchar(100) DEFAULT NULL,
  `nama_obat` text DEFAULT NULL,
  `diagnosa` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `data_transaksi`
--

INSERT INTO `data_transaksi` (`id_transaksi`, `tanggal`, `kode_pasien`, `nama_obat`, `diagnosa`) VALUES
(1, '2025-10-01', 'P01', 'Paracetamol, CTM, Hustab, Vit C', 'Flu'),
(2, '2025-10-01', 'P02', 'Glimepiride, Metformin, Cetirizine, Metronidazole, Genta Salep', 'DM Tipe 2'),
(3, '2025-10-02', 'P03', 'Glimepiride, Metformin, Antasida, Ranitidin, Ibuprofen', 'DM Tipe 2 + Dispepsia'),
(4, '2025-10-02', 'P04', 'Paracetamol, Cefadroxil, Simvastatin, Glimepiride, Metformin, Ranitidin', 'DM Tipe 2 + Hipertensi'),
(5, '2025-10-03', 'P05', 'Allopurinol, Amlodipine, Cetirizine, Ibuprofen, Neurodex', 'Gout Arthritis '),
(6, '2025-10-04', 'P06', 'Paracetamol Syrup, Amlodipine, CTM, Ibuprofen', 'ISPA'),
(7, '2025-10-06', 'P07', 'Paracetamol, Dextromethorphan, CTM, Antasida', 'Vertigo'),
(8, '2025-10-06', 'P08', 'Natrium Diklofenak, Vit B1', 'Cephalgia'),
(9, '2025-10-07', 'P09', 'Vernagol, Natrium Diklofenak, Antasida', 'Dispepsia'),
(10, '2025-10-07', 'P10', 'Cefat, Ibuprofen, CTM', 'Hemorrhoid'),
(11, '2025-10-08', 'P11', 'Simvastatin, Amlodipine, Natrium Diklofenak', 'Hipertensi'),
(12, '2025-10-09', 'P12', 'Ketokonazole', 'Dermatitis'),
(13, '2025-10-10', 'P13', 'Allopurinol, Natrium Diklofenak', 'Gout Arthritis'),
(14, '2025-10-10', 'P14', ' Lansoprazole, Domperidone, Antasida', 'Dispepsia'),
(15, '2025-10-10', 'P15', 'Glimepiride, Metformin, Cetirizine, Antasida, Metronidazole', 'DM Tipe 2 + Dispepsia'),
(16, '2025-10-11', 'P16', 'Paracetamol, Ibuprofen, OBH Syrup', 'ISPA'),
(17, '2025-10-11', 'P17', 'Methylprednisolone, Allopurinol,Natrium Diklofenak, Asam Mefenamat', 'Gout Arthritis'),
(18, '2025-10-11', 'P18', 'Allopurinol, Piroxicam, Natrium Diklofenak', 'Gout Arthritis'),
(19, '2025-10-13', 'P19', 'Natrium Diklofenak, Methylprednisolone,  Lansoprazole, Antasida', 'Myalgia + Dispepsia'),
(20, '2025-10-13', 'P20', 'Natrium Diklofenak, Antasida, Ranitidin', 'Myalgia'),
(21, '2025-10-13', 'P21', ' Lansoprazole, Domperidone, Antasida, Natrium Diklofenak', 'Dispepsia'),
(22, '2025-10-14', 'P22', 'Natrium Diklofenak, Vit B1', 'Myalgia'),
(23, '2025-10-15', 'P23', 'Paracetamol, CTM, Ambroxol Syrup, Antasida', 'ISPA'),
(24, '2025-10-16', 'P24', 'Allopurinol, Piroxicam, Natrium Diklofenak', 'Gout Arthritis '),
(25, '2025-10-16', 'P25', 'OAT', 'TB Paru'),
(26, '2025-10-17', 'P26', 'Vernagol, Natrium Diklofenak, Antasida', 'Dispepsia'),
(27, '2025-10-17', 'P27', 'Cefat, Ibuprofen, CTM', 'Hemorrhoid'),
(28, '2025-10-17', 'P28', 'Simvastatin, Amlodipine, Natrium Diklofenak', 'Hipertensi'),
(29, '2025-10-18', 'P29', 'Ketokonazole', 'Dermatofitosis'),
(30, '2025-10-18', 'P30', 'Allopurinol, Natrium Diklofenak', 'Gout Arthritis'),
(31, '2025-10-18', 'P31', ' Lansoprazole, Domperidone, Antasida', 'Dispepsia'),
(32, '2025-10-18', 'P32', 'Glimepiride, Metformin, Cetirizine, Antasida, Metronidazole', 'DM Tipe 2 + Dispepsia'),
(33, '2025-10-20', 'P33', 'Paracetamol, Ibuprofen, OBH Syrup', 'ISPA'),
(34, '2025-10-20', 'P34', 'OAT', 'TB Paru'),
(35, '2025-10-20', 'P35', 'Cetirizine, CTM, Paracetamol', 'Flu'),
(36, '2025-10-21', 'P36', 'Antasida, Ranitidin, Simvastatin, Allopurinol', 'Rheumatoid Arthritis'),
(37, '2025-10-21', 'P37', 'Paracetamol, CTM, Methylprednisolone', 'ISPA'),
(38, '2025-10-21', 'P38', 'Ambroxol, Cetirizine, Allopurinol,Asam Mefenamat', 'Myalgia'),
(39, '2025-10-22', 'P39', 'Metformin, Allopurinol, Ibuprofen, Simvastatin', 'DM-II'),
(40, '2025-10-22', 'P40', 'Ibuprofen, Allopurinol, Dexamethasone, OBH Syrup', 'Hiperurisemia'),
(41, '2025-10-22', 'P41', 'Simvastatin, Allopurinol, Natrium Diklofenak, Methylprednisolone', 'Rheumatoid Arthritis'),
(42, '2025-10-23', 'P42', 'Alpara, Cetirizine, Paracetamol, OBH Syrup', 'ISPA'),
(43, '2025-10-23', 'P43', 'Paracetamol, Cotrimoxazole, Vit B12, Antasida', 'Dispepsia'),
(44, '2025-10-23', 'P44', 'Salbutamol, Methylprednisolone, Paracetamol, OBH Syrup', 'Asma'),
(45, '2025-10-24', 'P45', 'Allopurinol, Ibuprofen, Cetirizine, CTM', 'Myalgia'),
(46, '2025-10-24', 'P46', 'Ibuprofen, Meloxicam, Ranitidin', 'Myalgia'),
(47, '2025-10-24', 'P47', 'Allopurinol,  Natrium Diklofenak, Asam Mefenamat, Methylprednisolone', 'Rheumatoid Arthritis'),
(48, '2025-10-25', 'P48', 'OAT', 'TB'),
(49, '2025-10-25', 'P49', 'OAT', 'TB'),
(50, '2025-10-25', 'P50', ' Lansoprazole, Antasida, Domperidone', 'Dispepsia'),
(51, '2025-10-27', 'P51', 'Amlodipine ,  Paracetamol , Cetirizine , Ambroxol ', 'Hipertensi + ISPA'),
(52, '2025-10-27', 'P52', 'Allopurinol, Piroxicam , Cetirizine , DMP Syr ', 'Gout Arthritis '),
(53, '2025-10-27', 'P53', ' Natrium Diklofenak , Calas ', 'Myalgia'),
(54, '2025-10-28', 'P54', ' Lansoprazole ', 'Dispepsia'),
(55, '2025-10-28', 'P55', ' Lansoprazole , Domperidone , Antasida , Betahistine ', 'Dispepsia'),
(56, '2025-10-28', 'P56', 'Paracetamol , Cetirizine , Ambroxol , Antasida ', 'ISPA'),
(57, '2025-10-29', 'P57', 'Amoxicillin , Paracetamol ,  Lansoprazole , Antasida ', 'Demam, Dispepsia'),
(58, '2025-10-29', 'P58', 'Paracetamol , Cetirizine , Ambroxol Syrup ', 'ISPA'),
(59, '2025-10-29', 'P59', 'Glimepiride , Metformin , Ketokonazole , Cetirizine ', 'DM Tipe 2'),
(60, '2025-10-30', 'P60', 'Ranitidin, Antasida, Domperidone', 'Dispepsia'),
(61, '2025-10-30', 'P61', 'Paracetamol, Ibuprofen, OBH Syrup', 'ISPA'),
(62, '2025-10-30', 'P62', 'OAT', 'TB Paru'),
(63, '2025-10-30', 'P63', ' Lansoprazole, Domperidone, Antasida', 'Dispepsia'),
(64, '2025-10-31', 'P64', 'Ranitidin, Antasida', 'LBP (Low Back Pain)'),
(65, '2025-10-31', 'P65', 'Allopurinol, Piroxicam, Natrium Diklofenak', 'Gout Arthritis '),
(66, '2025-10-31', 'P66', 'Cetirizine, CTM, Paracetamol', 'Flu'),
(67, '2025-11-01', 'P67', 'Antasida, Ranitidin, Simvastatin, Allopurinol', 'Rheumatoid Arthritis'),
(68, '2025-11-01', 'P68', 'Ibuprofen, Meloxicam, Ranitidin', 'Myalgia'),
(69, '2025-11-01', 'P69', 'Allopurinol,  Natrium Diklofenak, Asam Mefenamat, Methylprednisolone', 'Rheumatoid Arthritis'),
(70, '2025-11-03', 'P70', 'OAT', 'TB'),
(71, '2025-11-03', 'P71', 'Allopurinol, Piroxicam , Cetirizine , DMP Syr ', 'Gout Arthritis'),
(72, '2025-11-03', 'P72', ' Natrium Diklofenak , Calas ', 'Myalgia'),
(73, '2025-11-04', 'P73', ' Lansoprazole ', 'Dispepsia'),
(74, '2025-11-04', 'P74', ' Lansoprazole , Domperidone , Antasida , Betahistine ', 'Dispepsia'),
(75, '2025-11-04', 'P75', 'Paracetamol , Cetirizine , Ambroxol , Antasida ', 'ISPA'),
(76, '2025-11-05', 'P76', 'Amoxicillin , Paracetamol ,  Lansoprazole , Antasida ', 'Dispepsia'),
(77, '2025-11-05', 'P77', 'Paracetamol , Cetirizine , Ambroxol Syrup ', 'ISPA'),
(78, '2025-11-05', 'P78', 'Glimepiride , Metformin , Ketokonazole , Cetirizine ', 'DM Tipe 2'),
(79, '2025-11-06', 'P79', 'Methylprednisolone, Allopurinol,Natrium Diklofenak, Asam Mefenamat', 'Gout Arthritis'),
(80, '2025-11-06', 'P80', 'Paracetamol, Ibuprofen, OBH Syrup', 'ISPA'),
(81, '2025-11-06', 'P81', ' Natrium Diklofenak, Vit B1', 'Cephalgia'),
(82, '2025-11-07', 'P82', 'Cefat, Ibuprofen, CTM', 'Hemorrhoid'),
(83, '2025-11-07', 'P83', 'Simvastatin, Amlodipine,  Natrium Diklofenak', 'Hipertensi'),
(84, '2025-11-07', 'P84', 'Allopurinol, Natrium Diklofenak', 'Gout Arthritis'),
(85, '2025-11-08', 'P85', ' Lansoprazole, Domperidone, Antasida', 'Dispepsia'),
(86, '2025-11-08', 'P86', 'Cetirizine, CTM, Paracetamol', 'Flu'),
(87, '2025-11-08', 'P87', 'Antasida, Ranitidin, Simvastatin, Allopurinol', 'Rheumatoid Arthritis'),
(88, '2025-11-10', 'P88', 'Paracetamol, CTM, Methylprednisolone', 'ISPA'),
(89, '2025-11-10', 'P89', 'Ambroxol, Cetirizine, Allopurinol,Asam Mefenamat', 'Myalgia'),
(90, '2025-11-10', 'P90', 'Metformin, Allopurinol, Ibuprofen, Simvastatin', 'DM-II'),
(91, '2025-11-11', 'P91', 'Ibuprofen, Allopurinol, Dexamethasone, OBH Syrup', 'Rheumatoid Arthritis'),
(92, '2025-11-11', 'P92', 'Simvastatin, Allopurinol, Natrium Diklofenak, Methylprednisolone', 'Rheumatoid Arthritis'),
(93, '2025-11-11', 'P93', 'Alpara, Cetirizine, Paracetamol, OBH Syrup', 'ISPA'),
(94, '2025-11-12', 'P94', 'Paracetamol, Cotrimoxazole, Vit B12, Antasida', 'Dispepsia'),
(95, '2025-11-12', 'P95', 'Salbutamol, Methylprednisolone, Paracetamol, OBH Syrup', 'Asma'),
(96, '2025-11-12', 'P96', 'Allopurinol, Ibuprofen, Cetirizine, CTM', 'Myalgia'),
(97, '2025-11-13', 'P97', 'Ibuprofen, Meloxicam, Ranitidin', 'Myalgia'),
(98, '2025-11-13', 'P98', 'Allopurinol,  Natrium Diklofenak, Asam Mefenamat, Methylprednisolone', 'Rheumatoid Arthritis'),
(99, '2025-11-13', 'P99', 'OAT', 'TB'),
(100, '2025-11-14', 'P100', 'Allopurinol , Methylprednisolone ,  Natrium Diklofenak , Asam Mefenamat ', 'Gout arthritis'),
(101, '2025-11-14', 'P101', 'OAT', 'TB'),
(102, '2025-11-14', 'P102', ' Lansoprazole , Antasida , Domperidone ', 'Dispepsia'),
(103, '2025-11-15', 'P103', 'Amlodipine ,  Paracetamol , Cetirizine , Ambroxol ', 'Hipertensi + ISPA'),
(104, '2025-11-15', 'P104', 'Allopurinol, Piroxicam , Cetirizine , DMP Syr ', 'Gout Arthritis'),
(105, '2025-11-15', 'P105', ' Natrium Diklofenak , Calas ', 'Myalgia'),
(106, '2025-11-17', 'P106', ' Lansoprazole ', 'Dispepsia'),
(107, '2025-11-17', 'P107', ' Lansoprazole , Domperidone , Antasida , Betahistine ', 'Dispepsia'),
(108, '2025-11-17', 'P108', 'Paracetamol , Cetirizine , Ambroxol , Antasida ', 'ISPA'),
(109, '2025-11-18', 'P109', 'Amoxicillin , Paracetamol ,  Lansoprazole , Antasida ', 'Dispepsia'),
(110, '2025-11-18', 'P110', 'Paracetamol , Cetirizine , Ambroxol Syrup ', 'ISPA'),
(111, '2025-11-18', 'P111', 'Glimepiride , Metformin , Ketokonazole , Cetirizine ', 'DM Tipe 2'),
(112, '2025-11-19', 'P112', 'Cetirizine, CTM, Paracetamol', 'Flu'),
(113, '2025-11-19', 'P113', 'Alpara, Cetirizine, Paracetamol, OBH Syrup', 'ISPA'),
(114, '2025-11-19', 'P114', 'Paracetamol, Cotrimoxazole, Vit B12, Antasida', 'Dispepsia'),
(115, '2025-11-20', 'P115', 'Salbutamol, Methylprednisolone, Paracetamol, OBH Syrup', 'Asma'),
(116, '2025-11-20', 'P116', 'Allopurinol, Ibuprofen, Cetirizine, CTM', 'Myalgia'),
(117, '2025-11-20', 'P117', 'Ibuprofen, Meloxicam, Ranitidin', 'Myalgia'),
(118, '2025-11-21', 'P118', 'Allopurinol,  Natrium Diklofenak, Asam Mefenamat, Methylprednisolone', 'Rheumatoid Arthritis'),
(119, '2025-11-21', 'P119', 'OAT', 'TB'),
(120, '2025-11-21', 'P120', ' Lansoprazole, Antasida, Domperidone', 'Dispepsia'),
(121, '2025-11-22', 'P121', 'Amlodipine, Paracetamol, Cetirizine, Ambroxol', 'Hipertensi + ISPA'),
(122, '2025-11-22', 'P122', 'Allopurinol, Piroxicam, Cetirizine, DMP Syr', 'Gout Arthritis'),
(123, '2025-11-22', 'P123', ' Natrium Diklofenak , Calas ', 'Myalgia'),
(124, '2025-11-24', 'P124', ' Lansoprazole ', 'Dispepsia'),
(125, '2025-11-24', 'P125', ' Lansoprazole, Domperidone, Antasida, Betahistine', 'Dispepsia'),
(126, '2025-11-24', 'P126', 'Paracetamol, Cetirizine, Ambroxol, Antasida', 'ISPA'),
(127, '2025-11-25', 'P127', 'Amoxicillin, Paracetamol,  Lansoprazole, Antasida', 'Dispepsia'),
(128, '2025-11-25', 'P128', 'Paracetamol, Cetirizine, Ambroxol Syrup', 'ISPA'),
(129, '2025-11-25', 'P129', 'Glimepiride, Metformin, Ketokonazole, Cetirizine', 'DM Tipe 2'),
(130, '2025-11-26', 'P130', 'Allopurinol, Methylprednisolone,  Natrium Diklofenak, Asam Mefenamat', 'Gout Arthritis'),
(131, '2025-11-26', 'P131', 'OAT', 'OAT'),
(132, '2025-11-26', 'P132', ' Lansoprazole, Antasida, Domperidone', 'Dispepsia'),
(133, '2025-11-27', 'P133', 'Amlodipine, Paracetamol, Cetirizine, Ambroxol', 'Hipertensi + ISPA'),
(134, '2025-11-27', 'P134', 'Allopurinol, Piroxicam, Cetirizine, DMP Syr', 'Gout Arthritis'),
(135, '2025-11-27', 'P135', 'Paracetamol, Ibuprofen, OBH Syrup', 'ISPA'),
(136, '2025-11-28', 'P136', ' Lansoprazole, Domperidone, Antasida, Betahistine', 'Dispepsia'),
(137, '2025-11-28', 'P137', 'Paracetamol, Cetirizine, Ambroxol, Antasida', 'ISPA'),
(138, '2025-11-28', 'P138', ' Lansoprazole ', 'Dispepsia'),
(139, '2025-11-29', 'P139', 'Paracetamol, Cetirizine, Ambroxol Syrup', 'ISPA'),
(140, '2025-11-29', 'P140', 'Glimepiride, Metformin, Ketokonazole, Cetirizine', 'DM Tipe 2'),
(141, '2025-11-29', 'P141', 'Amlodipine, Paracetamol, Cetirizine, Ambroxol', 'Hipertensi + ISPA'),
(142, '2025-11-30', 'P142', 'OAT', 'OAT'),
(143, '2025-12-01', 'P143', 'Allopurinol,  Natrium Diklofenak, Asam Mefenamat, Methylprednisolone', 'Rheumatoid Arthritis'),
(144, '2025-12-01', 'P144', ', Ibuprofen, Meloxicam, Ranitidin', 'Myalgia'),
(145, '2025-12-01', 'P145', 'Allopurinol, Ibuprofen, Cetirizine, CTM', 'Myalgia'),
(146, '2025-12-02', 'P146', 'Salbutamol, Methylprednisolone, Paracetamol, OBH Syrup', 'Asma'),
(147, '2025-12-02', 'P147', 'Paracetamol, Cotrimoxazole, Vit B12, Antasida', 'Dispepsia'),
(148, '2025-12-02', 'P148', 'Alpara, Cetirizine, Paracetamol, OBH Syrup', 'ISPA'),
(149, '2025-12-03', 'P149', 'Paracetamol, Cotrimoxazole, Vit B12, Antasida', 'Dispepsia'),
(150, '2025-12-03', 'P150', 'Salbutamol, Methylprednisolone, Paracetamol, OBH Syrup', 'Asma'),
(151, '2025-12-03', 'P151', 'Allopurinol, Ibuprofen, Cetirizine, CTM', 'Myalgia'),
(152, '2025-12-04', 'P152', ', Ibuprofen, Meloxicam, Ranitidin', 'Myalgia'),
(153, '2025-12-04', 'P153', 'Allopurinol,  Natrium Diklofenak, Asam Mefenamat, Methylprednisolone', 'Rheumatoid Arthritis'),
(154, '2025-12-04', 'P154', 'OAT', 'TB Paru'),
(155, '2025-12-05', 'P155', 'OAT', 'TB'),
(156, '2025-12-05', 'P156', ' Lansoprazole, Antasida, Domperidone', 'Dispepsia'),
(157, '2025-12-05', 'P157', 'Amlodipine, Paracetamol, Cetirizine, Ambroxol', 'Hipertensi + ISPA'),
(158, '2025-12-06', 'P158', 'Allopurinol, Piroxicam, Cetirizine, DMP Syr', 'Gout Arthritis'),
(159, '2025-12-06', 'P159', ' Natrium Diklofenak, Calas', 'Myalgia'),
(160, '2025-12-06', 'P160', ' Lansoprazole', 'Dispepsia'),
(161, '2025-12-08', 'P161', ' Lansoprazole, Domperidone, Antasida, Betahistine', 'Dispepsia'),
(162, '2025-12-08', 'P162', 'Paracetamol, Cetirizine, Ambroxol, Antasida', 'ISPA'),
(163, '2025-12-08', 'P163', 'Amoxicillin, Paracetamol,  Lansoprazole, Antasida', 'Dispepsia'),
(164, '2025-12-09', 'P164', 'Paracetamol, Cetirizine, Ambroxol Syrup', 'ISPA'),
(165, '2025-12-09', 'P165', 'Glimepiride, Metformin, Ketokonazole, Cetirizine', 'DM Tipe 2'),
(166, '2025-12-09', 'P166', 'Vernagol,  Natrium Diklofenak, Antasida', 'Dispepsia'),
(167, '2025-12-10', 'P167', 'Cefat, Ibuprofen, CTM', 'Hemorrhoid'),
(168, '2025-12-10', 'P168', 'Simvastatin, Amlodipine,  Natrium Diklofenak', 'Hipertensi'),
(169, '2025-12-10', 'P169', 'Ketokonazole', 'Dermatofitosis'),
(170, '2025-12-11', 'P170', 'Allopurinol, Natrium Diklofenak', 'Gout Arthritis'),
(171, '2025-12-11', 'P171', ' Lansoprazole, Domperidone, Antasida', 'Dispepsia'),
(172, '2025-12-11', 'P172', 'Glimepiride, Metformin, Cetirizine, Antasida, Metronidazole', 'DM Tipe 2 + Dispepsia'),
(173, '2025-12-12', 'P173', 'Paracetamol, Ibuprofen, OBH Syrup', 'ISPA'),
(174, '2025-12-12', 'P174', 'OAT', 'TB Paru'),
(175, '2025-12-12', 'P175', 'Ranitidin, Antasida, Domperidone', 'Dispepsia'),
(176, '2025-12-13', 'P176', ' Lansoprazole, Domperidone, Antasida', 'Dispepsia'),
(177, '2025-12-13', 'P177', 'Ranitidin, Antasida', 'LBP (Nyeri Punggung)'),
(178, '2025-12-13', 'P178', 'Ibuprofen, Meloxicam, Ranitidin', 'Myalgia'),
(179, '2025-12-15', 'P179', 'Allopurinol,  Natrium Diklofenak, Asam Mefenamat, Methylprednisolone', 'Rheumatoid Arthritis'),
(180, '2025-12-15', 'P180', 'Cetirizine, CTM, Paracetamol', 'Flu'),
(181, '2025-12-15', 'P181', 'Antasida, Ranitidin, Simvastatin, Allopurinol', 'Rheumatoid Arthritis'),
(182, '2025-12-16', 'P182', 'Paracetamol, CTM, Methylprednisolone', 'Rinitis'),
(183, '2025-12-16', 'P183', 'Ambroxol, Cetirizine, Allopurinol,Asam Mefenamat', 'Myalgia'),
(184, '2025-12-16', 'P184', 'Metformin, Allopurinol, Ibuprofen, Simvastatin', 'DM-II'),
(185, '2025-12-17', 'P185', 'Ibuprofen, Allopurinol, Dexamethasone, OBH Syrup', 'Rheumatoid Arthritis'),
(186, '2025-12-17', 'P186', 'Simvastatin, Allopurinol, Natrium Diklofenak, Methylprednisolone', 'Rheumatoid Arthritis'),
(187, '2025-12-17', 'P187', 'Glimepiride, Metformin, Cetirizine, Metronidazole, Genta Salep', 'DM Tipe 2'),
(188, '2025-12-18', 'P188', 'Glimepiride, Metformin, Antasida, Ranitidin, Ibuprofen', 'DM Tipe 2 + Dispepsia'),
(189, '2025-12-18', 'P189', 'Paracetamol, Cefadroxil, Simvastatin, Glimepiride, Metformin, Ranitidin', 'DM Tipe 2 + Hipertensi'),
(190, '2025-12-18', 'P190', 'Allopurinol, Amlodipine, Cetirizine, Ibuprofen, Neurodex', 'Gout Arthritis'),
(191, '2025-12-19', 'P191', 'Paracetamol Syrup, Amlodipine, CTM, Ibuprofen', 'ISPA'),
(192, '2025-12-19', 'P192', 'Paracetamol, Dextromethorphan, CTM, Antasida', 'Vertigo'),
(193, '2025-12-19', 'P193', 'Allopurinol, Piroxicam, Natrium Diklofenak', 'Gout Arthritis'),
(194, '2025-12-20', 'P194', 'Natrium Diklofenak, Methylprednisolone,  Lansoprazole, Antasida', 'Myalgia + Dispepsia'),
(195, '2025-12-20', 'P195', 'Natrium Diklofenak, Antasida, Ranitidin', 'Myalgia'),
(196, '2025-12-20', 'P196', ' Lansoprazole, Domperidone, Antasida, Natrium Diklofenak', 'Dispepsia'),
(197, '2025-12-22', 'P197', 'Natrium Diklofenak, Vit B1', 'Myalgia'),
(198, '2025-12-22', 'P198', 'Paracetamol, CTM, Ambroxol Syrup, Antasida', 'ISPA'),
(199, '2025-12-22', 'P199', 'Allopurinol, Piroxicam, Natrium Diklofenak', 'Gout Arthritis'),
(200, '2025-12-23', 'P200', 'Paracetamol, CTM, Hustab, Vit C', 'OFB'),
(201, '2025-12-23', 'P201', 'OAT', 'TB Paru'),
(202, '2025-12-23', 'P202', 'Glimepiride, Metformin, Cetirizine, Antasida, Metronidazole', 'DM Tipe 2 + Dispepsia'),
(203, '2025-12-24', 'P203', 'Ketokonazole', 'Jamur (Skin)'),
(204, '2025-12-24', 'P204', 'Allopurinol, Natrium Diklofenak', 'Gout Arthritis'),
(205, '2025-12-24', 'P205', ' Lansoprazole, Domperidone, Antasida', 'Dispepsia'),
(206, '2026-01-05', 'P206', 'Methylprednisolone, Allopurinol,Natrium Diklofenak, Asam Mefenamat', 'Gout Arthritis'),
(207, '2026-01-05', 'P207', 'Paracetamol, Ibuprofen, OBH Syrup', 'ISPA'),
(208, '2026-01-05', 'P208', 'Cefadroxil, Paracetamol, Glimepiride, Metformin', 'DM Tipe 2'),
(209, '2026-01-06', 'P209', 'Ranitidin, Antasida, Domperidone', 'Dispepsia'),
(210, '2026-01-06', 'P210', 'Amoxicillin , Paracetamol ,  Lansoprazole ', 'Gastritis, dispepsia'),
(211, '2026-01-06', 'P211', ' Natrium Diklofenak, Vit B1', 'Cephalgia'),
(212, '2026-01-07', 'P212', 'Vernagol,  Natrium Diklofenak, Antasida', 'Dispepsia'),
(213, '2026-01-07', 'P213', 'Cefat, Ibuprofen, CTM', 'Hemorrhoid'),
(214, '2026-01-07', 'P214', 'Simvastatin, Amlodipine,  Natrium Diklofenak', 'Hipertensi'),
(215, '2026-01-08', 'P215', 'Allopurinol, Natrium Diklofenak', 'Gout Arthritis'),
(216, '2026-01-08', 'P216', ' Lansoprazole, Domperidone, Antasida', 'Dispepsia'),
(217, '2026-01-08', 'P217', 'Cetirizine, CTM, Paracetamol', 'Flu'),
(218, '2026-01-09', 'P218', 'Antasida, Ranitidin, Simvastatin, Allopurinol', 'Rheumatoid Arthritis'),
(219, '2026-01-09', 'P219', 'Paracetamol, CTM, Methylprednisolone', 'OFB'),
(220, '2026-01-09', 'P220', 'Ambroxol, Cetirizine, Allopurinol, Asam Mefenamat', 'Myalgia'),
(221, '2026-01-10', 'P221', 'Metformin, Allopurinol, Ibuprofen, Simvastatin', 'DM-II'),
(222, '2026-01-10', 'P222', 'Ibuprofen, Allopurinol, Dexamethasone, OBH Syrup', 'Rheumatoid Arthritis'),
(223, '2026-01-10', 'P223', 'Simvastatin, Allopurinol, Natrium Diklofenak, Methylprednisolone', 'Rheumatoid Arthritis'),
(224, '2026-01-12', 'P224', 'Alpara, Cetirizine, Paracetamol, OBH Syrup', 'ISPA'),
(225, '2026-01-12', 'P225', 'Paracetamol, Cotrimoxazole, Vit B12, Antasida', 'Dispepsia'),
(226, '2026-01-12', 'P226', 'Salbutamol, Methylprednisolone, Paracetamol, OBH Syrup', 'Asma'),
(227, '2026-01-13', 'P227', 'Allopurinol, Ibuprofen, Cetirizine, CTM', 'Myalgia'),
(228, '2026-01-13', 'P228', 'Ibuprofen, Meloxicam, Ranitidin', 'Myalgia'),
(229, '2026-01-13', 'P229', 'Allopurinol,  Natrium Diklofenak, Asam Mefenamat, Methylprednisolone', 'Rheumatoid Arthritis'),
(230, '2026-01-14', 'P230', 'OAT', 'TB'),
(231, '2026-01-14', 'P231', 'OAT', 'TB'),
(232, '2026-01-14', 'P232', ' Lansoprazole, Antasida, Domperidone', 'Dispepsia'),
(233, '2026-01-15', 'P233', 'Amlodipine, Paracetamol, Cetirizine, Ambroxol', 'Hipertensi + ISPA'),
(234, '2026-01-15', 'P234', 'Allopurinol, Piroxicam, Cetirizine, DMP Syr', 'Gout Arthritis'),
(235, '2026-01-15', 'P235', ' Natrium Diklofenak, Calas', 'Myalgia'),
(236, '2026-01-16', 'P236', ' Lansoprazole', 'Dispepsia'),
(237, '2026-01-16', 'P237', ' Lansoprazole, Domperidone, Antasida, Betahistine', 'Dispepsia'),
(238, '2026-01-16', 'P238', 'Paracetamol, Cetirizine, Ambroxol, Antasida', 'ISPA'),
(239, '2026-01-17', 'P239', 'Amoxicillin, Paracetamol,  Lansoprazole, Antasida', 'Gastritis'),
(240, '2026-01-17', 'P240', 'Paracetamol, Cetirizine, Ambroxol Syrup', 'ISPA'),
(241, '2026-01-17', 'P241', 'Glimepiride, Metformin, Ketokonazole, Cetirizine', 'DM Tipe 2'),
(242, '2026-01-19', 'P242', 'Amlodipine, Paracetamol, Cetirizine, Ambroxol', 'Hipertensi + ISPA'),
(243, '2026-01-19', 'P243', 'Vernagol,  Natrium Diklofenak, Antasida', 'Dispepsia'),
(244, '2026-01-19', 'P244', 'Cefat, Ibuprofen, CTM', 'Hemorrhoid'),
(245, '2026-01-20', 'P245', 'Simvastatin, Amlodipine,  Natrium Diklofenak', 'Hipertensi'),
(246, '2026-01-20', 'P246', 'Ketokonazole', 'Dermatofitosis'),
(247, '2026-01-20', 'P247', 'Allopurinol, Natrium Diklofenak', 'Gout Arthritis'),
(248, '2026-01-21', 'P248', ' Lansoprazole, Domperidone, Antasida', 'Dispepsia'),
(249, '2026-01-21', 'P249', 'Glimepiride, Metformin, Cetirizine, Antasida', 'DM Tipe 2'),
(250, '2026-01-21', 'P250', 'Paracetamol, Ibuprofen, OBH Syrup', 'ISPA');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `nama` varchar(100) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `nama`, `username`, `password`, `status`) VALUES
(0, 'Adrian Maulana', 'adrian', '$2b$10$V3awHtJ40wHQMdfejtAECe9.4Hm6xTsiwHGTo4/t.vzTFnexIKEtq', 'Super Admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `data_obat`
--
ALTER TABLE `data_obat`
  ADD PRIMARY KEY (`id_obat`),
  ADD UNIQUE KEY `kode_obat` (`kode_obat`);

--
-- Indexes for table `data_pasien`
--
ALTER TABLE `data_pasien`
  ADD PRIMARY KEY (`id_pasien`);

--
-- Indexes for table `data_transaksi`
--
ALTER TABLE `data_transaksi`
  ADD PRIMARY KEY (`id_transaksi`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `data_obat`
--
ALTER TABLE `data_obat`
  MODIFY `id_obat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `data_pasien`
--
ALTER TABLE `data_pasien`
  MODIFY `id_pasien` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=254;

--
-- AUTO_INCREMENT for table `data_transaksi`
--
ALTER TABLE `data_transaksi`
  MODIFY `id_transaksi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=254;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
