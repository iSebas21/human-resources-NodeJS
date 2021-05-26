SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `empoyees` (
  `empoyee_id` int(11) NOT NULL,
  `empoyee_name` varchar(50) NOT NULL,
  `empoyee_lastnames` varchar(50) NOT NULL,
  `empoyee_phone` varchar(10) NOT NULL,
  `empoyee_email` varchar(50) NOT NULL,
  `empoyee_address` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `empoyees` (`empoyee_id`, `empoyee_name`, `empoyee_lastnames`, `empoyee_phone`, `empoyee_email`, `empoyee_address`) VALUES
(1, 'Alejandro', 'Contreras', '4421404780', 'ale0812@gmail.com', 'Cerrito Colorado, Querétaro'),
(2, 'Dafne', 'Ruiz', '4426504780', 'astrid@outlook.com', 'Lomas de Casa Blanca, Querétaro');
(3, 'Roberto', 'Cruz Lozano', '4426504780', 'tank3-tk3@outlook.com', 'Col. Del Trabajo, Aguascalientes');

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_mail` varchar(50) NOT NULL,
  `user_password` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `users` (`user_id`, `user_name`, `user_mail`, `user_password`) VALUES
(1, 'Sebastian Manzo Iniestra', 'sebas_092100@outlook.com', '123456');

ALTER TABLE `empoyees`
  ADD PRIMARY KEY (`empoyee_id`);

ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

ALTER TABLE `empoyees`
  MODIFY `empoyee_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;