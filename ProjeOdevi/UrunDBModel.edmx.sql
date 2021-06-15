
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 06/13/2021 12:04:18
-- Generated from EDMX file: C:\Users\phonix\Desktop\ProjeOdevi\ProjeOdevi\UrunDBModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [eticaret];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_favoriler_urunler]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[favoriler] DROP CONSTRAINT [FK_favoriler_urunler];
GO
IF OBJECT_ID(N'[dbo].[FK_siparisler_urunler1]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[siparisler] DROP CONSTRAINT [FK_siparisler_urunler1];
GO
IF OBJECT_ID(N'[dbo].[FK_urunler_kategoriler]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[urunler] DROP CONSTRAINT [FK_urunler_kategoriler];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[favoriler]', 'U') IS NOT NULL
    DROP TABLE [dbo].[favoriler];
GO
IF OBJECT_ID(N'[dbo].[images]', 'U') IS NOT NULL
    DROP TABLE [dbo].[images];
GO
IF OBJECT_ID(N'[dbo].[kategoriler]', 'U') IS NOT NULL
    DROP TABLE [dbo].[kategoriler];
GO
IF OBJECT_ID(N'[dbo].[siparisler]', 'U') IS NOT NULL
    DROP TABLE [dbo].[siparisler];
GO
IF OBJECT_ID(N'[dbo].[sysdiagrams]', 'U') IS NOT NULL
    DROP TABLE [dbo].[sysdiagrams];
GO
IF OBJECT_ID(N'[dbo].[urunler]', 'U') IS NOT NULL
    DROP TABLE [dbo].[urunler];
GO
IF OBJECT_ID(N'[dbo].[users]', 'U') IS NOT NULL
    DROP TABLE [dbo].[users];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'favorilers'
CREATE TABLE [dbo].[favorilers] (
    [favoriId] int IDENTITY(1,1) NOT NULL,
    [urunId] int  NOT NULL
);
GO

-- Creating table 'images'
CREATE TABLE [dbo].[images] (
    [imgId] int  NOT NULL,
    [imgUrl] varchar(500)  NOT NULL
);
GO

-- Creating table 'kategorilers'
CREATE TABLE [dbo].[kategorilers] (
    [kategoriId] int IDENTITY(1,1) NOT NULL,
    [kategoriName] varchar(50)  NOT NULL,
    [imgUrl] varchar(500)  NOT NULL
);
GO

-- Creating table 'siparislers'
CREATE TABLE [dbo].[siparislers] (
    [siparisId] int IDENTITY(1,1) NOT NULL,
    [urunId] int  NOT NULL,
    [durum] varchar(50)  NOT NULL,
    [adres] varchar(500)  NOT NULL,
    [soyad] varchar(50)  NOT NULL,
    [ad] varchar(50)  NOT NULL,
    [telNo] varchar(11)  NOT NULL,
    [eMail] varchar(100)  NOT NULL
);
GO

-- Creating table 'sysdiagrams'
CREATE TABLE [dbo].[sysdiagrams] (
    [name] nvarchar(128)  NOT NULL,
    [principal_id] int  NOT NULL,
    [diagram_id] int IDENTITY(1,1) NOT NULL,
    [version] int  NULL,
    [definition] varbinary(max)  NULL
);
GO

-- Creating table 'urunlers'
CREATE TABLE [dbo].[urunlers] (
    [urunId] int IDENTITY(1,1) NOT NULL,
    [urunName] varchar(50)  NOT NULL,
    [urunAciklama] varchar(500)  NOT NULL,
    [urunFiyat] float  NOT NULL,
    [imgUrl] varchar(500)  NOT NULL,
    [kategoriId] int  NOT NULL
);
GO

-- Creating table 'users'
CREATE TABLE [dbo].[users] (
    [userId] int IDENTITY(1,1) NOT NULL,
    [userName] varchar(50)  NOT NULL,
    [userPassword] varchar(50)  NOT NULL,
    [userEmail] varchar(50)  NOT NULL,
    [yetki] int  NOT NULL,
    [apikey] varchar(100)  NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [favoriId] in table 'favorilers'
ALTER TABLE [dbo].[favorilers]
ADD CONSTRAINT [PK_favorilers]
    PRIMARY KEY CLUSTERED ([favoriId] ASC);
GO

-- Creating primary key on [imgId] in table 'images'
ALTER TABLE [dbo].[images]
ADD CONSTRAINT [PK_images]
    PRIMARY KEY CLUSTERED ([imgId] ASC);
GO

-- Creating primary key on [kategoriId] in table 'kategorilers'
ALTER TABLE [dbo].[kategorilers]
ADD CONSTRAINT [PK_kategorilers]
    PRIMARY KEY CLUSTERED ([kategoriId] ASC);
GO

-- Creating primary key on [siparisId] in table 'siparislers'
ALTER TABLE [dbo].[siparislers]
ADD CONSTRAINT [PK_siparislers]
    PRIMARY KEY CLUSTERED ([siparisId] ASC);
GO

-- Creating primary key on [diagram_id] in table 'sysdiagrams'
ALTER TABLE [dbo].[sysdiagrams]
ADD CONSTRAINT [PK_sysdiagrams]
    PRIMARY KEY CLUSTERED ([diagram_id] ASC);
GO

-- Creating primary key on [urunId] in table 'urunlers'
ALTER TABLE [dbo].[urunlers]
ADD CONSTRAINT [PK_urunlers]
    PRIMARY KEY CLUSTERED ([urunId] ASC);
GO

-- Creating primary key on [userId] in table 'users'
ALTER TABLE [dbo].[users]
ADD CONSTRAINT [PK_users]
    PRIMARY KEY CLUSTERED ([userId] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [urunId] in table 'favorilers'
ALTER TABLE [dbo].[favorilers]
ADD CONSTRAINT [FK_favoriler_urunler]
    FOREIGN KEY ([urunId])
    REFERENCES [dbo].[urunlers]
        ([urunId])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_favoriler_urunler'
CREATE INDEX [IX_FK_favoriler_urunler]
ON [dbo].[favorilers]
    ([urunId]);
GO

-- Creating foreign key on [kategoriId] in table 'urunlers'
ALTER TABLE [dbo].[urunlers]
ADD CONSTRAINT [FK_urunler_kategoriler]
    FOREIGN KEY ([kategoriId])
    REFERENCES [dbo].[kategorilers]
        ([kategoriId])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_urunler_kategoriler'
CREATE INDEX [IX_FK_urunler_kategoriler]
ON [dbo].[urunlers]
    ([kategoriId]);
GO

-- Creating foreign key on [urunId] in table 'siparislers'
ALTER TABLE [dbo].[siparislers]
ADD CONSTRAINT [FK_siparisler_urunler]
    FOREIGN KEY ([urunId])
    REFERENCES [dbo].[urunlers]
        ([urunId])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_siparisler_urunler'
CREATE INDEX [IX_FK_siparisler_urunler]
ON [dbo].[siparislers]
    ([urunId]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------