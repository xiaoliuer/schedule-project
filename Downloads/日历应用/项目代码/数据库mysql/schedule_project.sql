-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-04-13 13:45:56
-- 服务器版本： 10.1.30-MariaDB
-- PHP Version: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `schedule project`
--

-- --------------------------------------------------------

--
-- 表的结构 `labeldetail`
--

CREATE TABLE `labeldetail` (
  `label_id` int(11) NOT NULL,
  `start` varchar(20) CHARACTER SET utf8 NOT NULL,
  `final` varchar(20) CHARACTER SET utf8 NOT NULL,
  `title` varchar(50) CHARACTER SET utf8 NOT NULL,
  `content` varchar(100) CHARACTER SET utf8 NOT NULL,
  `week` varchar(20) CHARACTER SET utf8 NOT NULL,
  `labelColor` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `labeldetail`
--

INSERT INTO `labeldetail` (`label_id`, `start`, `final`, `title`, `content`, `week`, `labelColor`) VALUES
(101, '09:00', '09:15', '图书馆', '带校卡', 'Monday', 1),
(102, '11:00', '12:15', '吃鸡', '刺激战场', 'Tuesday', 2),
(106, '12:30', '13:15', '啦啦啦', '-。-！', 'Wednesday', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `labeldetail`
--
ALTER TABLE `labeldetail`
  ADD PRIMARY KEY (`label_id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `labeldetail`
--
ALTER TABLE `labeldetail`
  MODIFY `label_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
