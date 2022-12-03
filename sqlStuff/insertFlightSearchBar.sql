USE [cs179G]
GO
/****** Object:  StoredProcedure [dbo].[insertFlightSearchBar]    Script Date: 12/3/2022 11:22:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[insertFlightSearchBar]
	@year int,
	@airline varchar(100),
	@origin varchar(3),
	@dest varchar(3),
	@depTime float,
	@arrTime float,
	@actualElapsedTime float,
	@month int,
	@dayOfMonth int,
	@originCity varchar(100),
	@originState varchar(50),
	@destCity varchar(100),
	@destState varchar(2),
	@depDel15 float,
	@arrDel15 float,
	@delayed int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

   INSERT INTO searchBar([year], airline, originCode, destCode, depTime, arrTime, elapsedTime, [Month], [dayofMonth], originCity, originState, destCity, destState, depDel15, arrDel15, ifDelayed)
   VALUES(@year, @airline, @origin, @dest, @depTime, @arrTime, @actualElapsedTime, @month, @dayOfMonth, @originCity, @originState, @destCity, @destState, @depDel15, @arrDel15, @delayed)
END
