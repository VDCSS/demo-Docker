# Resumo Final — Docker: Containers e Entrega

## 📁 Estrutura da pasta

```
Pesquisas Docker/
├── guia-rapido-docker-compose.md              ← guia (~5 páginas, 279 linhas)
├── Guia_Rápido.pdf                            ← PDF do guia (5 págs, 76 KB)
├── script-apresentacao.md                     ← roteiro (12 min + 2 min Q&A)
├── Script de Apresentação — Docker & Docker Compose.pdf  ← PDF do script (7 págs, 57 KB)
├── slides-conteudo.md                         ← 12 slides
├── Slides - Docker Containers e Entrega.pdf   ← PDF dos slides (4 págs, 54 KB)
├── RESUMO-FINAL.md                            ← este arquivo
└── demo-docker/                               ← repositório GitHub funcional
    ├── app/
    │   ├── Dockerfile         ← node:20-alpine, npm install --omit=dev
    │   ├── index.js           ← rotas / e /health
    │   └── package.json       ← express + pg
    ├── compose.yaml           ← 2 serviços (app + db), healthcheck, volume nomeado
    ├── .dockerignore          ← node_modules, .git, *.md
    └── README.md              ← docs completas
```

## ✅ O que a demo faz

API Node.js que consulta a hora atual no PostgreSQL e retorna em JSON.

- `GET /` → `{"status":"ok","time":"2026-06-16T..."}`
- `GET /health` → `healthy`

O Docker Compose orquestra os dois containers (app + db) em rede isolada.

## 🔗 Links

- **Repositório:** https://github.com/VDCSS/demo-Docker
- **Documentação Docker:** https://docs.docker.com
- **Docker Compose:** https://docs.docker.com/compose
- **Play with Docker (praticar online):** https://labs.play-with-docker.com

## 🐳 Comandos para rodar a demo

```bash
git clone https://github.com/VDCSS/demo-Docker.git
cd demo-Docker
docker compose up -d --build
curl http://localhost:3000
# {"status":"ok","time":"2026-06-16T04:13:23.820Z"}
docker compose ps
docker compose logs --tail=10
docker compose down -v
```

## ⚠️ Instalação do Docker (se precisar numa máquina nova)

```bash
# Ubuntu/Debian
sudo apt install docker.io -y
sudo systemctl enable --now docker

# Pós-instalação (OBRIGATÓRIO)
sudo usermod -aG docker $USER
newgrp docker

# Verificar
docker --version
docker run hello-world
docker compose version
```

> **Atenção:** `docker compose` (espaço) é o plugin moderno. Não confundir com `docker-compose` (hífen) que é legado.

## 🔧 Dockerfile (corrigido)

O comando `npm ci` exige `package-lock.json`. Como não temos lockfile no repositório, usamos:

```dockerfile
RUN npm install --omit=dev
```

Isso instala apenas dependências de produção e não precisa de lockfile.

## 📄 Slides (12)

| Slide | Título | Conteúdo principal |
|---|---|---|
| 1 | Capa | Tema + grupo |
| 2 | O Problema | "Funciona na minha máquina" |
| 3 | Docker: Conceitos | Container, imagem, Dockerfile, VM vs container |
| 4 | Docker Compose | YAML, multi-container, up/down |
| 5 | Sistemas para Internet | Paridade dev/prod, onboarding, microsserviços, CI/CD |
| 6 | Instalação | Linux, pós-instalação, verificação |
| 7 | Comandos Essenciais | Docker + Compose |
| 8 | Caso Real: Arquitetura | Repositório, diagrama, arquivos |
| 9 | Caso Real: Demo | Comandos + output |
| 10 | Erros Comuns | 4 erros + soluções |
| 11 | Boas Práticas + Ref. | 5 práticas + links oficiais |
| 12 | Perguntas | Q&A com 4 perguntas previstas |

## 🎤 Script (12 min + 2 min Q&A)

Blocos do script no `script-apresentacao.md`:

| Bloco | Duração |
|---|---|
| Abertura | 1 min |
| O que é Docker | 1 min |
| O que é Compose | 1 min |
| Docker em SI | 2 min |
| Instalação | 1 min |
| Comandos | 1 min |
| Demo (Arquitetura + Ao Vivo) | 3 min |
| Erros + Práticas | 1 min |
| Encerramento | 1 min |
| Q&A | 2 min |

## ✅ Status final de tudo

| Item | Status |
|---|---|
| Guia rápido (markdown + PDF, 5 págs) | ✅ Finalizado |
| Slides (markdown + PDF, 12 slides) | ✅ Finalizado |
| Script de apresentação (markdown + PDF) | ✅ Finalizado |
| Repositório demo no GitHub | ✅ Funcionando |
| Demo testada (curl retornou JSON) | ✅ OK |
| Dockerfile corrigido (npm ci → npm install) | ✅ Commitado |
| README.md com descrição e Quick Start | ✅ Atualizado |
| .dockerignore | ✅ Criado |
