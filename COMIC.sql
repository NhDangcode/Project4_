USE [COMIC]
GO
/****** Object:  Table [dbo].[CATEGORY]    Script Date: 7/6/2024 2:55:24 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CATEGORY](
	[id] [uniqueidentifier] NOT NULL,
	[slug] [nvarchar](255) NULL,
	[name] [nvarchar](255) NULL,
	[createAt] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[COMPANY]    Script Date: 7/6/2024 2:55:24 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[COMPANY](
	[id] [uniqueidentifier] NOT NULL,
	[htag] [nvarchar](255) NULL,
	[name] [nvarchar](255) NULL,
	[createAt] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DETAILORDERS]    Script Date: 7/6/2024 2:55:24 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DETAILORDERS](
	[id] [uniqueidentifier] NOT NULL,
	[quantity] [int] NOT NULL,
	[price] [decimal](38, 2) NOT NULL,
	[idOrder] [uniqueidentifier] NULL,
	[idProduct] [uniqueidentifier] NULL,
	[createAt] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ORDER]    Script Date: 7/6/2024 2:55:24 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ORDER](
	[id] [uniqueidentifier] NOT NULL,
	[status] [int] NULL,
	[total] [decimal](38, 2) NULL,
	[createAt] [datetime] NOT NULL,
	[idUser] [uniqueidentifier] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PRODUCT]    Script Date: 7/6/2024 2:55:24 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PRODUCT](
	[id] [uniqueidentifier] NOT NULL,
	[name] [nvarchar](255) NOT NULL,
	[detail] [nvarchar](255) NULL,
	[author] [nvarchar](255) NULL,
	[quantity] [int] NULL,
	[price] [decimal](18, 0) NULL,
	[type] [nvarchar](255) NULL,
	[createAt] [datetime] NULL,
	[idUser] [uniqueidentifier] NULL,
	[pathImg] [nvarchar](max) NULL,
	[idCategory] [uniqueidentifier] NULL,
	[idCompany] [uniqueidentifier] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ROLE]    Script Date: 7/6/2024 2:55:24 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ROLE](
	[id] [uniqueidentifier] NOT NULL,
	[name] [nvarchar](20) NULL,
	[createAt] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[USER]    Script Date: 7/6/2024 2:55:24 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[USER](
	[id] [uniqueidentifier] NOT NULL,
	[email] [nvarchar](40) NOT NULL,
	[name] [nvarchar](40) NULL,
	[password] [nvarchar](max) NOT NULL,
	[address] [nvarchar](max) NULL,
	[phone] [nvarchar](max) NULL,
	[pathImg] [nvarchar](max) NULL,
	[idRole] [uniqueidentifier] NULL,
	[createAt] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[CATEGORY] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[CATEGORY] ADD  DEFAULT (getdate()) FOR [createAt]
GO
ALTER TABLE [dbo].[COMPANY] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[COMPANY] ADD  DEFAULT (getdate()) FOR [createAt]
GO
ALTER TABLE [dbo].[DETAILORDERS] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[DETAILORDERS] ADD  DEFAULT (getdate()) FOR [createAt]
GO
ALTER TABLE [dbo].[ORDER] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[ORDER] ADD  DEFAULT ((0)) FOR [status]
GO
ALTER TABLE [dbo].[ORDER] ADD  DEFAULT ((0)) FOR [total]
GO
ALTER TABLE [dbo].[ORDER] ADD  DEFAULT (getdate()) FOR [createAt]
GO
ALTER TABLE [dbo].[PRODUCT] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[PRODUCT] ADD  DEFAULT (getdate()) FOR [createAt]
GO
ALTER TABLE [dbo].[ROLE] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[ROLE] ADD  DEFAULT (getdate()) FOR [createAt]
GO
ALTER TABLE [dbo].[USER] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[USER] ADD  DEFAULT (getdate()) FOR [createAt]
GO
ALTER TABLE [dbo].[DETAILORDERS]  WITH CHECK ADD FOREIGN KEY([idOrder])
REFERENCES [dbo].[ORDER] ([id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[DETAILORDERS]  WITH CHECK ADD FOREIGN KEY([idProduct])
REFERENCES [dbo].[PRODUCT] ([id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[PRODUCT]  WITH CHECK ADD FOREIGN KEY([idCategory])
REFERENCES [dbo].[CATEGORY] ([id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[PRODUCT]  WITH CHECK ADD FOREIGN KEY([idCompany])
REFERENCES [dbo].[COMPANY] ([id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[PRODUCT]  WITH CHECK ADD FOREIGN KEY([idUser])
REFERENCES [dbo].[USER] ([id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[USER]  WITH CHECK ADD FOREIGN KEY([idRole])
REFERENCES [dbo].[ROLE] ([id])
ON DELETE CASCADE
GO
