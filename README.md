# NLW1
Projeto desenvolvido de acordo com a NLW1

![Interface Mobile e Web](https://blog.rocketseat.com.br/content/images/2020/06/ecoleta.png)

Ecoleta

Apresentação dos Diagramas
![Diagramas da aplicação](https://uploaddeimagens.com.br/images/002/916/783/original/Diagramas_do_NLW1_Ecoleta.png)


TypeScript
Por quê TypeScript?

Usando TypeScript, o editor consegue usar o IntelliSense e saber exatamente os tipos de dados das propriedades de um objeto.

Exemplo:
// Função que exibe dados do usuário
function displayUserInformation(user) {
	return `${user.name} - ${user.email}`;
}
export default displayUserInformation;

Desafio:
Incluir a informação da cidade e UF do usuário nesse retorno.
•	Qual o formato do objeto de usuário? Objeto, mas será que manteve o padrão desde que a função foi criada?
•	Utilizo user.city ou user.address.city?
•	Será que a cidade e UF são obrigatórios?

IntelliSense
Função IntelliSense da IDE - é a inteligência da IDE
"O editor não conhece o formato (tipo) de uma variável com Javascript puro e, por isso, nao consegue determinar suas propriedades. Exemplo:
${user.address ... string? integer? real?  }`;

Mitos e verdades sobre TypeScript
•	TypeScript diminui a produtividade? Sim e Não, porque quem tá acostumado com a tipagem dinâmica do Js MAS no TypeScript tem tipagem.
•	TypeScript é transformar JavaScript em Java ou C#? Não é verdade. Pois continuamos utilizando o Javascript em sua essência. Somente em alguns casos é necessário usar a tipagem do TypeScript.
•	O mercdado não usa TypeScript? Não é verdade. Muitas empresas e Use Cases já estão utilizando.
•	TypScript substitui o JavaScript por completo? Não! Pois o TypeScript é totalmente baseado no JavaScript e se houver mudanças no JavaScript, essas mudanças, serão refletidas no TypeScript.

Próximo passo:
CRIAR A BASE DO PROJETO COM NODE.JS
•	Criar a pasta do projeto: nlw1 -> aulas -> server
•	executar comando: npm init -y (cria o projeto tudo por padrão)
•	excutar comando: npm install express (é um microframe pra lidar com rotas) Ex: localhost:3333/users
•	criar a pasta 'src' na raíz do projeto para armazenar todo o código da aplicação dentro dessa pasta, e dentro desta, criar o arquivo server.ts

	import express from 'express'; 
	       vai pedir para instalar: npm install @types/express -D       que é uma biblioteca de definição de tipos e o -D é pra definir como ambiente de desenvolvimento.
Ao definir a biblioteca de definição de tipos, o programador já ganha os benefícios da IDE de inteligencia da tipagem.
Daqui em diante já vamos para códigos comentados

// definindo a constante app que carrega a função principal do express()
const app = express();

// pega a rota que foi acessada
app.get('/users', () => {
    console.log('Listagem de usuários');
});

// porta em que está sendo escutada
app.listen(3333);

Para executar testes, é necessário intalar outra dependência que executa typescript pois o Node.js só entende Javascript
	Execute o comando: npm install ts-node -D
	Execute o comando: npx tsc --init 
	Execute o comando: npm install typescript -D
	Execute o comando: npx ts-node src/server.ts

Para evitar precisar dar Control + C toda vez que quiser reinicar o servidor para visualizar uma alteração, execute o comando: 
	npm install ts-node-dev -D

Criar um "atalho de comando" no arquivo Package.json na seção 'scripts' com o atalho 'dev' que irá executar o comando 'ts-node-dev src/server.ts' assim poderá acessar esta funcionalidade através do comando npm run dev

 Mas... O que é React?
•	Biblioteca para construção de interfaces;
•	Utilizado para construção de Single-Page Applications;
•	Podemos chamar de framework? Sim e não, mas podemos dizer que sim por toda o ecossistema que traz com a biblioteca React , React Native e React JS já virou um framework.
•	Tudo fica dentro do Javascript;
•	React / ReactJS / React Native
•	Exemplo:
	import React from 'react';
	import  './button.css';
	import icon from './button.png';
	
	function Button() {
	      return (
		<button>
		        <img src={icon} />
		</button>
	      );
	}

Vantagens:
•	Organização do código;
		- Componentização;
•	 Divisão de responsabilidades;
		- Back-end: Regra de negócio
		- Front-end: Interface
•	Uma API - múltiplos clientes: mobile e web

Agora que já entendemos os conceitos de Single Aplications


Entendendo o React Native

Abordagem tradicional
Na abordagem tradicional, criamos uma aplicação para iOS  e outra para Android, e nesss casos, o trabalho se torna repetido tanto para criação quanto para as alterações no projeto.

Abordagem do React Native
Todo código feito é em JavaScript, esse código não é convertido em código nativo, melhor do que iswso, o dispositivo passa a entender o código JavaScript ea interface gerada é totalmente nativa.


AULA 2
Rotas e recursos

 Rota: Endereço completo da requisição
 Recurso: qual entidade estamos acessando do sistema

 GET: Buscar uma ou mais informações do back-end (SELECT)
 POST: Criar uma nova informação no back-end (INSERT)
 PUT: Atualizar uma informação existente (UPDATE)
 DELETE: Remover uma informação do back-end (DELETE)

 Exemplos:
 POST: http://localhost:3333/users = criar um usuário  
 GET: http://localhost:3333/users = listar usuários
 GET: http://localhost:3333/users/5

Nota: toda vez que for usar o response, é bom utilizar o return antes dele. Assim, fica definido que a requisição termine neste comando.


Tipos de parâmetros:
 Request param:  parâmetros que vem na própria rota que identificam um recurso
 Query param: parâmetros que vem na própria rota geralmente opcionais para filtros e paginação
 Request Body: parâmetros para criação/atualização de informações

Exemplos de parâmetros vindos das rotas:
Utilizado na rota app.get('/users/:id', (request, response)
// pega o parâmetro id vindo da rota, converte em número e armazena na const id
    const id = Number(request.params.id);

Utilizado na rota app.get('/users', (request, response)
// pega o parâmetro search vindo da rota, converte em texto e armazena na const search
    const search = String(request.query.search);

Utilizado na rota app.post('/users', (request, response) com request.body
const data = request.body;
* Para esta requisição funcionar deve-se usar a instrução app.use(express.json());


app.use(express.json());  está indicando para o express que a aplicação utilizará a linguagem json para o express entender o corpo (body) das requisições em formato json.

Escolha do banco de dados
Será utilizado banco de dados SQLite que é do tipo relacional (SQL) pois é o tipo mais utilizado nas aplicações no mercado. SQLite é leve e não será necessário instalar um SGDB no ambiente de desenvolvimento.
As informações que forem armazenadas neste banco serão mantidas em um arquivo .sqlite no próprio dispositivo em que a aplicação for instalada.

Para gerenciar as informações, será utilizado o Knexjs que é uma interface ou biblioteca (construtora de consultas) que permite trabalhar com bancos de dados SQL com uma linguagem unificada para maioria dos bancos de dados existentes: Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, e Amazon Redshift



Configurando a conexão com o banco de dados da aplicação:
Criar a pasta ‘database’ dentro de ‘src’. Criar o arquivo ‘connection.ts’ dentro de ‘database’.

Importar a biblioteca do knex, a biblioteca path para tratar os caminhos dos arquivos e criar a variável que vai guardar a conexão criada pela função knex.

import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
});

Para que a variável connection esteja disponível para outros arquivos é necessário exportá-la, então:
export default connection;


Identificando as entidades da aplicação
•	 Points (pontos de coleta) – Cada ponto terá sua logo (image), nome (name), email , whatsapp e para localização: latitude, longitude, número (number), cidade (city) e estado (uf)
•	 Items (de coleta) – Cada item terá uma imagem e um título.

Um ponto pode coletar muitos items e um item pode ser coletado por vários pontos. Então, temos aqui uma relação entre entidades do tipo Muitos para Muitos (N-N). Sendo assim tenhos que criar uma tabela intermediária que será a
•	 point_items: vai conter os point_id e os item_id

Criando as entidades (tabelas)
Com knex, podemos criar as tabelas também utilizando javascript com o recurso Migrations.
Migrations permite manter um histórico do banco de dados. Por exemplo, quando se estiver trabalhando com uma equipe relativamente grande em que cada integrante poderá deletar tabelas, adicionar e alterar campos, criar campos novos basta usar um comando do Migrations e o knex vai montar o banco de dados no mesmo formato para ambas pessoas.

Criando a tabela ‘points’
import Knex from 'knex';

export async function up(knex: Knex) {
    // CRIAR A TABELA
    return knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable(); // decimal eu não sofro
        table.decimal('longitude').notNullable();
        table.string('number').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
}

export async function down(knex: Knex) {
    // UTILIZADO PARA VOLTAR ATRÁS (DELETAR A TABELA)
    return knex.schema.dropTable('points');
}

Criando a tabela items
import Knex from 'knex';

export async function up(knex: Knex) {
    // CRIAR A TABELA
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
}

export async function down(knex: Knex) {
    // UTILIZADO PARA VOLTAR ATRÁS (DELETAR A TABELA)
    return knex.schema.dropTable('items');
}





Criando a tabela ‘point_items’: que cria o relacionamento do tipo N-N (muitos para muitos) entre as duas tabelas anteriores
import Knex from 'knex';

export async function up(knex: Knex) {
    // CRIAR A TABELA
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();
        
        table.integer('point_id')
            .notNullable()
            .references('id')
            .inTable('points');

        table.integer('item_id')
            .notNullable()
            .references('id')
            .inTable('items');
    });
}

export async function down(knex: Knex) {
    // UTILIZADO PARA VOLTAR ATRÁS (DELETAR A TABELA)
    return knex.schema.dropTable('point_items');
}
 
Funcionalidades da aplicação:
•	 Cadastro dos pontos
•	 Rota para listar os items de coleta
•	 Rota para listar os pontos, com filtro por cidade/estado/items.

Rota para listar os items de coleta:
routes.get('/items', async (request, response) => {
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {
        return {
            id: item.id,
            title: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}`,
        };
    });
    return response.json(serializedItems);
});
Cadastro dos pontos:
routes.post('/points', async (request, response) => {
    const {
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        number,
        city,
        uf,
        items
    } = request.body;

    const trx = await knex.transaction();

    const insertedIds = await trx('points').insert({
        image: 'image-fake',
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        number,
        city,
        uf
    });

    const point_id = insertedIds[0];

    const pointItems = items.map((item_id: number) => {
        return {
            item_id,
            point_id,
        };
    })

    await trx('point_items').insert(pointItems);

    return response.json({ success: true }); // resposta provisória
});

Por enquanto, estas rotas ainda estão no arquivo routes.js. Para organizar melhor, vamos desacoplar as rotas.
Criar a pasta ‘controllers’ dentro da ‘src’. 
Os controllers vão abstrair estas funcionalidades que estão no arquivo de rotas. Será criado um controller para cada recurso (entidade) mantida na aplicação. Exemplo: PointController.ts e ItemsController.ts.
Padrões de rotas utilizados na comunidade: 
 index -> listagem, 
 show -> mostrar um único item
 create -> criar um item
 update -> atualizar dados de um item
 delete -> apagar item(s)

Listar ponto específico
async show(request: Request, response: Response) {
        const { id } = request.params;

        const point = await knex('points').where('id', id).first();

        if (!point) {
            return response.status(400).json({ message: 'Ponto de coleta não encontrado.'});
        }

        const items = await knex('items')
            .join('point_items', 'items.id', '=', 'point_items.item_id')
            .where('point_items.point_id', id)
            .select('items.title');

        return response.json({ point, items });
    }

* Faltar terminar a documentação
