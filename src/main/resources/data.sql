INSERT INTO EXERCISE_INFO (id, name, description, category, youtube_Link) VALUES 
(1, 'Push-ups', 'Keep your body straight and lower it by bending your arms. Push up until your arms are straight.', 'Upper Body', 'https://www.youtube.com/embed/IODxDxX7oi4'),
(2, 'Squats', 'Stand straight with feet hip-width apart, and bend your knees as if you were going to sit.', 'Legs', 'https://www.youtube.com/embed/aclHkVaku9U'),
(3, 'Bicep Curls', 'Hold a weight in each hand and bend your elbows to lift the weights towards your shoulders.', 'Arms', 'https://www.youtube.com/embed/ykJmrZ5v0Oo'),
(4, 'Tricep Dips', 'Lower your body by bending your elbows until your upper arms and forearms create a 90 degree angle.', 'Arms', 'https://www.youtube.com/embed/6kALZikXxLc'),
(5, 'Lunges', 'Step forward with one foot and lower your body until your front knee is at a 90 degree angle.', 'Legs', 'https://www.youtube.com/embed/wrwwXE_x-pQ'),
(6, 'Planks', 'Hold your body up with your forearms and toes, keeping your body straight and holding for as long as possible.', 'Abs', 'https://www.youtube.com/embed/HjzrTRYfOtc'),
(7, 'Crunches', 'Lay on your back, bend your knees and lift your shoulders off the floor.', 'Abs', 'https://www.youtube.com/embed/nt9jwky07jc'),
(8, 'Pull-ups', 'Hold onto a bar and pull your body weight up towards the bar.', 'Upper Body', 'https://www.youtube.com/embed/eGo4IYlbE5g'),
(9, 'Overhead Press', 'Stand upright, lift a barbell or dumbbells from your shoulders until your arms are fully extended above you.', 'Upper Body', 'https://www.youtube.com/embed/F3QY5vMz_6I'),
(10, 'Deadlifts', 'Stand with your feet hip-width apart, bend at the waist, keep your back straight, and lift a barbell off the ground.', 'Legs', 'https://youtube.com/v/deadlifts'),
(11, 'Leg Press', 'Sit in a leg press machine, place your feet on the platform and push the weight away from you using your legs.', 'Legs', 'https://youtube.com/v/leg-press'),
(12, 'Bench Press', 'Lay on a bench, lower a barbell to your chest, and then press it back up until your arms are straight.', 'Upper Body', 'https://youtube.com/v/bench-press');

INSERT INTO WORKOUT (id, date_Of_Workout, total_Time, calories) VALUES
(100, '2023-07-06', 60, 300.0),
(101, '2023-07-07', 70, 350.0),
(102, '2023-07-08', 80, 400.0),
(103, '2023-07-09', 90, 450.0),
(104, '2023-07-10', 100, 500.0);

INSERT INTO EXERCISE (id, reps, exercise_Time, Workout_Id, exercise_Info_Id) VALUES
(100, 12, 10, 100, 1),
(101, 15, 20, 100, 2),
(102, 18, 30, 100, 3),
(103, 21, 40, 100, 4),
(104, 24, 50, 100, 5),
(105, 15, 10, 101, 1),
(106, 18, 20, 101, 2),
(107, 21, 30, 101, 3),
(108, 24, 40, 101, 4),
(109, 27, 50, 101, 5),
(110, 18, 10, 102, 1),
(111, 21, 20, 102, 2),
(112, 24, 30, 102, 3),
(113, 27, 40, 102, 4),
(114, 30, 50, 102, 5),
(115, 21, 10, 103, 1),
(116, 24, 20, 103, 2),
(117, 27, 30, 103, 3),
(118, 30, 40, 103, 4),
(119, 33, 50, 103, 5),
(120, 24, 10, 104, 1),
(121, 27, 20, 104, 2),
(122, 30, 30, 104, 3),
(123, 33, 40, 104, 4),
(124, 36, 50, 104, 5);
