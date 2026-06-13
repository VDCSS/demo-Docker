# demo-docker

Aplicação Node.js + PostgreSQL com Docker Compose.

Projeto de exemplo para demonstrar o uso de containers em aplicações web reais.

## Quick Start

```bash
git clone https://github.com/VDCSS/demo-Docker.git
cd demo-Docker
docker compose up -d --build
curl http://localhost:3000
# {"status":"ok","time":"2026-06-13T..."}
docker compose down -v
```

## Pré-requisitos

- [Docker](https://docs.docker.com/engine/install/)
- [Docker Compose](https://docs.docker.com/compose/install/) (plugin)

## Como rodar

```bash
docker compose up -d --build
```

Acesse: [http://localhost:3000](http://localhost:3000)

## Endpoints

| Rota | Resposta |
|---|---|
| `GET /` | `{"status":"ok","time":"2026-06-13T..."}` |
| `GET /health` | `healthy` |

## Estrutura

```
demo-docker/
├── app/
│   ├── Dockerfile      # imagem Node.js 20 Alpine
│   ├── index.js        # servidor Express com conexão PostgreSQL
│   └── package.json    # dependências (express, pg)
├── compose.yaml        # definição dos serviços (app + db)
└── README.md           # este arquivo
```

## Serviços

| Serviço | Imagem | Porta | Função |
|---|---|---|---|
| `app` | build local (Node.js) | 3000 | API Express |
| `db` | postgres:16-alpine | 5432 | Banco de dados |

## Como parar

```bash
docker compose down -v
```

A flag `-v` remove também o volume de dados do PostgreSQL.

## Comandos úteis

```bash
# Ver logs em tempo real
docker compose logs -f

# Executar comando dentro do container do banco
docker compose exec db psql -U postgres -d meubanco

# Reconstruir as imagens
docker compose build

# Ver status dos serviços
docker compose ps
```

## Variáveis de ambiente

Definidas no `compose.yaml`:

| Variável | Valor | Descrição |
|---|---|---|
| `DB_HOST` | `db` | Nome do serviço do banco |
| `DB_USER` | `postgres` | Usuário do PostgreSQL |
| `DB_PASS` | `postgres` | Senha do PostgreSQL |
| `DB_NAME` | `meubanco` | Nome do banco de dados |
