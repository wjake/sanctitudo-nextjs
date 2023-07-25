/*
  Warnings:

  - Added the required column `discord` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "discord" TEXT NOT NULL;
