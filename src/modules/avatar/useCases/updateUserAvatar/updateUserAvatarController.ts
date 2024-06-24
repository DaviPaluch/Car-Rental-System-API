import { Request, Response } from "express";
import { UpdateUserAvatarUseCase } from "./updateUserAvatarUseCase";
import { container } from "tsyringe";

class UpdateUserAvatarController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const userId = req.user.id;
      const avatarFile = req.file.filename;
      const typeFile = req.file.mimetype;

      const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);

      await updateUserAvatarUseCase.execute({ userId, nameFile: avatarFile, avatarFile, typeFile });

      return res.status(200).json({ message: 'Avatar updated successfully' });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { UpdateUserAvatarController };
