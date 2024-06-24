-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "risco" (
    "id" TEXT NOT NULL,
    "impactoId" TEXT NOT NULL,
    "estrategia_resolucaoId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "setorId" TEXT NOT NULL,
    "plano_de_acaoId" TEXT,
    "status_riscoId" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "desc" TEXT NOT NULL,

    CONSTRAINT "risco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "status_risco" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "status_risco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notificacao" (
    "id" TEXT NOT NULL,
    "riscoId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "dataEnvio" TIMESTAMP(3) NOT NULL,
    "dataVisualizacao" TIMESTAMP(3) NOT NULL,
    "visualizado" BOOLEAN NOT NULL,

    CONSTRAINT "notificacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plano_de_acao" (
    "id" TEXT NOT NULL,
    "risco_residualId" TEXT NOT NULL,
    "status_prazoId" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "dataAlerta" TIMESTAMP(3) NOT NULL,
    "tempoDeResolucao" TEXT NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataPrevistaFim" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3) NOT NULL,
    "comentarios" TEXT NOT NULL,

    CONSTRAINT "plano_de_acao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "status_prazo" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "status_prazo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "classificacao" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "classificacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "risco_residual" (
    "id" TEXT NOT NULL,
    "classificacaoId" TEXT NOT NULL,
    "riscoMitigado" BOOLEAN NOT NULL,
    "dataResolucao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "risco_residual_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "impacto" (
    "id" TEXT NOT NULL,
    "classificacaoId" TEXT NOT NULL,
    "desc" TEXT NOT NULL,

    CONSTRAINT "impacto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estrategia_resolucao" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "estrategia_resolucao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "setor" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "setor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "risco_impactoId_key" ON "risco"("impactoId");

-- CreateIndex
CREATE UNIQUE INDEX "risco_plano_de_acaoId_key" ON "risco"("plano_de_acaoId");

-- CreateIndex
CREATE UNIQUE INDEX "plano_de_acao_risco_residualId_key" ON "plano_de_acao"("risco_residualId");

-- CreateIndex
CREATE UNIQUE INDEX "classificacao_label_key" ON "classificacao"("label");

-- CreateIndex
CREATE UNIQUE INDEX "estrategia_resolucao_label_key" ON "estrategia_resolucao"("label");

-- AddForeignKey
ALTER TABLE "risco" ADD CONSTRAINT "risco_impactoId_fkey" FOREIGN KEY ("impactoId") REFERENCES "impacto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "risco" ADD CONSTRAINT "risco_estrategia_resolucaoId_fkey" FOREIGN KEY ("estrategia_resolucaoId") REFERENCES "estrategia_resolucao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "risco" ADD CONSTRAINT "risco_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "risco" ADD CONSTRAINT "risco_setorId_fkey" FOREIGN KEY ("setorId") REFERENCES "setor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "risco" ADD CONSTRAINT "risco_plano_de_acaoId_fkey" FOREIGN KEY ("plano_de_acaoId") REFERENCES "plano_de_acao"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "risco" ADD CONSTRAINT "risco_status_riscoId_fkey" FOREIGN KEY ("status_riscoId") REFERENCES "status_risco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notificacao" ADD CONSTRAINT "notificacao_riscoId_fkey" FOREIGN KEY ("riscoId") REFERENCES "risco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notificacao" ADD CONSTRAINT "notificacao_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plano_de_acao" ADD CONSTRAINT "plano_de_acao_risco_residualId_fkey" FOREIGN KEY ("risco_residualId") REFERENCES "risco_residual"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plano_de_acao" ADD CONSTRAINT "plano_de_acao_status_prazoId_fkey" FOREIGN KEY ("status_prazoId") REFERENCES "status_prazo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "risco_residual" ADD CONSTRAINT "risco_residual_classificacaoId_fkey" FOREIGN KEY ("classificacaoId") REFERENCES "classificacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "impacto" ADD CONSTRAINT "impacto_classificacaoId_fkey" FOREIGN KEY ("classificacaoId") REFERENCES "classificacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
