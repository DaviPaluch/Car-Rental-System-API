import { v4 as uuidv4 } from 'uuid';
import { IClassificacaoRepository, ICreateClassificacaoDTO } from "../IClassificacaoRepository";

class Classificacao {
  id: string;
  label: string;
}

class ClassificacaoRepositoryInMemory implements IClassificacaoRepository {

  classificacao: Classificacao[] = [];

  async create({ label }: ICreateClassificacaoDTO): Promise<void> {
    const classificacao = new Classificacao();
    Object.assign(classificacao, {
      id: uuidv4(),
      label,
    });
    this.classificacao.push(classificacao);
  }

  async getById(id: string): Promise<{ id: string; label: string; }> {
    const classificacao = this.classificacao.find((classificacao) => classificacao.id === id);
    return classificacao;
  }

  async getByName(label: string): Promise<{ id: string; label: string; }> {
    const classificacao = this.classificacao.find((classificacao) => classificacao.label === label);
    return classificacao;
  }

  async list(): Promise<{ id: string; label: string; }[]> {
    return this.classificacao;
  }
}

export { ClassificacaoRepositoryInMemory }