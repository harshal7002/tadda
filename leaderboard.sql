INSERT into userTable (age,name,xp,level)
SELECT 
  round(random()*30 + 10) AS AGE,
  substr(concat(md5(random()::text), md5(random()::text)), 0, 10) AS NAME, 
  round(random()*800) AS XP,
  round(random()*8 + 1) AS LEVEL
FROM generate_series(1,1000);

Select * from
  (Select name, round(xp/level::numeric,2) as score from usertable order by score desc limit 9) as topNinePlayer
UNION
   Select name, round(xp/level::numeric,2) as score from usertable where name = '1b11785d6'