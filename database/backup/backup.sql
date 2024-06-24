-- classificacao
INSERT INTO classificacao (id, label) VALUES ('1', 'baixo');
INSERT INTO classificacao (id, label) VALUES ('2', 'pouco risco');
INSERT INTO classificacao (id, label) VALUES ('3', 'moderado');
INSERT INTO classificacao (id, label) VALUES ('4', 'severo');
INSERT INTO classificacao (id, label) VALUES ('5', 'critico');

-- setores
INSERT INTO setor (id, label) VALUES
  ('1', 'Produção/Manufatura'),
  ('2', 'Manutenção'),
  ('3', 'Logística/Suprimentos'),
  ('4', 'Qualidade'),
  ('5', 'Recursos Humanos'),
  ('6', 'Administração'),
  ('7', 'Pesquisa e Desenvolvimento (P&D)'),
  ('8', 'Vendas e Marketing');

-- pessoa
INSERT INTO public.user (id,name,email,password_hash) VALUES
  ('1','Davi Paluch','davi@email.com','a1234567@');

INSERT INTO estrategia_resolucao (id, label) VALUES
('11111111-1111-1111-1111-111111111111', 'diversificação'),
('22222222-2222-2222-2222-222222222222', 'hedge'),
('33333333-3333-3333-3333-333333333333', 'seguro'),
('44444444-4444-4444-4444-444444444444', 'transferência de risco'),
('55555555-5555-5555-5555-555555555555', 'estratégia defensiva'),
('66666666-6666-6666-6666-666666666666', 'gestão ativa'),  
('77777777-7777-7777-7777-777777777777', 'reserva de emergência'),
('88888888-8888-8888-8888-888888888888', 'análise de risco'),
('99999999-9999-9999-9999-999999999999', 'controle de alavancagem'),
('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'modelagem de cenários');

INSERT INTO status_risco (id, label) VALUES
  ('11111111-1111-1111-1111-111111111111', 'resolvido'),
  ('22222222-2222-2222-2222-222222222222', 'pendente'),
  ('33333333-3333-3333-3333-333333333333', 'mitigado'),
  ('44444444-4444-4444-4444-444444444444', 'não resolvido');
