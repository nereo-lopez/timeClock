CREATE VIEW `activeUsers` AS
SELECT Name, Campaign
FROM UserName
WHERE Active = 1;