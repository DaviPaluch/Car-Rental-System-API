import { Request, Response } from "express";
import { container } from "tsyringe";
import { UploadCarImageUseCase } from "./UploadCarImageUseCase";

interface IFiles {
  filename: string
}


class UploadCarImageController {
  async handle(req: Request, res: Response): Promise<Response> {

    const { carId } = req.params
    const images = req.files as IFiles[]

    const uploadCarImageUseCase = container.resolve(UploadCarImageUseCase)

    const images_name = images.map((file) => file.filename)

    await uploadCarImageUseCase.execute({ carId, images_name })

    return res.status(201).send()
  }
}