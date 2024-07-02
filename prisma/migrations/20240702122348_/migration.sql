-- CreateTable
CREATE TABLE "car_image" (
    "id" TEXT NOT NULL,
    "carId" TEXT NOT NULL,
    "image_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "car_image_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "car_image" ADD CONSTRAINT "car_image_carId_fkey" FOREIGN KEY ("carId") REFERENCES "car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
