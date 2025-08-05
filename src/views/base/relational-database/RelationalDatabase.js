import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const RelationalDatabase = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>MÓDULO #1 - Conceitos gerais e tipagens</strong>
          </CCardHeader>
          <CCardBody>
            <div className='mt-2'>
              <h5> O que é um banco de dados relacional? </h5>
              <p>É um tipo de banco de dados que organiza os dados em tabelas, que podem se relacionar por meio de chaves primarias ou estrangeiras.  </p>
            </div>

            <div className='mt-5'>
              <h5> Qual a diferença entre SQL e Postgres? </h5>
              <p> SQL é uma linguagem de programação padrão para criar, consultar, editar um banco de dados relacional. Já o Postgres é um sistema gerenciador de banco de dados (SGDB)  </p>
            </div>

            <div className='mt-5'>
              <h5> Tipos numéricos </h5>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary">
                      Tipo
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">
                      Descrição
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell>
                      Smallint
                    </CTableDataCell>
                    <CTableDataCell>
                      Aceita valores entre 32 mil e -32 mil
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      Int
                    </CTableDataCell>
                    <CTableDataCell>
                      Aceita valores entre 2 milhões e -2 milhões
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      Bigint
                    </CTableDataCell>
                    <CTableDataCell>
                      Aceita valores entre 9 quintilhões e -9 quintilhões
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      Numeric(p,s)
                    </CTableDataCell>
                    <CTableDataCell>
                      É utilizado para precisão exata, onde o "p" define a quantidade máxima de digitos e o "s" define a quantidade de digitos após a virgula.
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      Serial
                    </CTableDataCell>
                    <CTableDataCell>
                      É tipo inteiro com auto incremento, muito utilizado em ids
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </div>

            <div className='mt-5'>
              <h5> Tipos texto </h5>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary">
                      Tipo
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">
                      Descrição
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell>
                      Char(n)
                    </CTableDataCell>
                    <CTableDataCell>
                      Texto de tamanho fixo definido por n
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      Varchar(n)
                    </CTableDataCell>
                    <CTableDataCell>
                      Tamanho variável onde n é o quantidade máxima de caracteres.
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      Text
                    </CTableDataCell>
                    <CTableDataCell>
                      Tamanho ilimitado, ou seja a coluna não tem limite pré-definido de caracteres
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </div>

             <div className='mt-5'>
              <h5> Tipos Data/hora </h5>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary">
                      Tipo
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">
                      Descrição
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell>
                      Date
                    </CTableDataCell>
                    <CTableDataCell>
                      Armazena somente a data YYYY-MM-DD
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      Time 
                    </CTableDataCell>
                    <CTableDataCell>
                      Armazena somente hora, minutos e segundos: hh:mm:ss
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      timestamp
                    </CTableDataCell>
                    <CTableDataCell>
                      Armazena tanto data quanto horas: YYYY-MM-DD hh:mm:ss
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </div>

            <div className='mt-5'>
              <h5>Como criar um banco?</h5>
              <code>
                CREATE DATABASE database_name;
              </code>
            </div>
            <div className='mt-5'>
              <h5> O que são schemas e suas vantagens? </h5>
              <p> Schemas são basicamentes compartimentos dentro de um mesmo banco de dados, suas vantagens de utilização são: </p>
              <ul>
                <li>
                  Organização lógica, você pode agrupar tabelas dentro de um mesmo schema evitando que muitas tabelas fiquem misturadas dentro um mesmo namespace.
                </li>
                <li>
                  Isolamento, schemas permitem isolar tabelas, então tabelas com mesmo nome podem coexistir em schemas diferentes.
                </li>
                <li>
                  Permissões, com schemas um usuário pode ter acesso a schemas especificos de um banco de dados, mantendo segurança entre os módulos permitindo uma maior divisão de responsabilidade e segurança.
                </li>
              </ul>
            </div>

            <div className='mt-5'>
              <h5>Como criar um schema?</h5>
              <code>
                CREATE SCHEMA schema_name;
              </code>
            </div>
          </CCardBody>
        </CCard>

        <CCard className="mb-4">
          <CCardHeader>
            <strong>MÓDULO #2 - Tipos de relacionamento</strong>
          </CCardHeader>
          <CCardBody>
            <div className='mt-2'>
              <h5> O que é uma primary key? </h5>
              <p> É um tipo de restrição no banco de dados, onde se define que uma coluna nunca será null, será única para aquela tabela e poderá ser referênciada por outra tabela.  </p>
            </div>

            <div className='mt-5'>
              <h5> O que é uma foreign key? </h5>
              <p> É um tipo de restrição no banco de dados, onde se define que uma coluna irá "apontar" para uma coluna que é a chave primaria de outra tabela, gerando assim relação entre tabelas.  </p>
            </div>

            <div className='mt-5'>
              <h5> Relacionamento 1:1 </h5>
              <p> Cada registro da tabela A irá se relacionar com um único registro da tabela b.  </p>
              <img src="../../../assets/images/oneToOne.png" alt="Relacionamento 1 para 1" />
            </div>

            <div className='mt-5'>
              <h5> Relacionamento 1:N </h5>
              <p> Cada registro da tabela A poderá se relacionar com vários registros da tabela b.  </p>
              <img src="../../../assets/images/oneToOne.png" alt="Relacionamento 1 para N" />
            </div>

            <div className='mt-5'>
              <h5> Relacionamento N:N </h5>
              <p> Cada registro da tabela A poderá se relacionar com vários registros da tabela b, e um registro da tabela B também poderá se relacionar com vários registros da tabela A. </p>
              <img src="../../../assets/images/oneToOne.png" alt="Relacionamento N para N" />
            </div>

             <div className='mt-5'>
              <h5> O que é on delete e on update? </h5>
              <p> Essas clausulas definem para o banco o que fazendo quando um registro "pai" for apagado ou delete, vejamos nesse exemplo prático: </p>
              <p> Existem duas tabelas no banco de dados uma chamada clientes e outra pedidos, um cliente pode ter um ou muitos pedidos (1:N). Queros apagar os pedidos quando um cliente for deletado da base automaticamente:</p>
              <code>
                FOREIGN KEY (cliente_id) REFERENCES clientes(id)
                  ON DELETE CASCADE
              </code>
              <p className="mt-2"> O SQL acima diz que quando um cliente for apagado todas as suas referencias a aquela chave primária também serão apagados. </p>
            </div>

            <div className="mt-5">
              <h5> O que são constraints?</h5>
              <p> São regras definidas ao banco de dados afim de manter a integridade e validade dos dados, os principais tipos de constraints utilizadas são:</p>
              <ul>
                <li>
                  <strong>Primary key:</strong> garante que o registro de uma coluna sempre será único, não nullo, muito utilizado em ids.
                </li>
                <li>
                  <strong>Foreign key:</strong> assegura integridade referencial, é uma coluna que aponta para uma PK de uma outra tabela, estabelecendo relações.
                </li>
                <li>
                  <strong>Unique:</strong> Asseguro que o registro dessa tab ela seja único, porém diferentemente da PK, o registro pode ser nullo e uma tabela pode ter vários campos únicos.
                </li>
                <li>
                  <strong>Check:</strong> Realiza uma verificação antes de registrar ou atualizar um registro na base de dados.
                </li>
                <li>
                  <strong>Not null:</strong> Define que uma coluna jamais poderá ser null.
                </li>
                <li>
                  <strong>Default:</strong> Define um valor padrão para uma coluna caso não seja enviado.
                </li>
              </ul>
            </div>
            
          </CCardBody>
        </CCard>

        <CCard className="mb-4">
          <CCardHeader>
            <strong>MÓDULO #3 - Consultas no banco de dados</strong>
          </CCardHeader>
          <CCardBody>
            <div className='mt-5'>
              <h5> Listar todos os registro de uma tabela </h5>
              <code>
                SELECT * FROM table_name;
              </code>
            </div>

            <div className='mt-5'>
              <h5> Listar todos os registro de uma tabela, retornando campos específicos </h5>
              <code>
                SELECT column_name, column_name2 FROM table_name;
              </code>
            </div>

            <div className='mt-5'>
              <h5> Listar registros com base numa condição </h5>
              <code>
                SELECT * FROM table_name
                WHERE table_name.column_name = 'valor_desejado';
              </code>
            </div>

            <div className='mt-5'>
              <h5> Listar registros com base em duas condições </h5>
              <code>
                SELECT * FROM table_name
                WHERE table_name.column_name = 'valor_desejado'
                AND table_name = 'valor_desejado';
              </code>
            </div>

            <div className='mt-5'>
              <h5> Listar registros com base no aceite de uma ou mais condições </h5>
              <code>
                SELECT * FROM table_name
                WHERE table_name.column_name = 'valor_desejado'
                OR table_name = 'valor_desejado';
              </code>
            </div>

            <div className='mt-5'>
              <h5> Listar registros que contem parcialmente um valor </h5>
              <code>
                SELECT * FROM table_name
                WHERE table_name.column_name LIKE 'valor_desejado%';
              </code>
            </div>

            <div className='mt-5'>
              <h5> Listar registros que contem parcialmente um valor, desconsiderando letras maiuculas e minusculas </h5>
              <code>
                SELECT * FROM table_name
                WHERE table_name.column_name LIKE '%valor_desejado%';
              </code>
            </div>

            <div className='mt-5'>
              <h5> Retornar registros ordenados </h5>
              <code>
                SELECT * FROM table_name
                ORDER BY table_name.column_name DESC;
              </code>
            </div>

            <div className='mt-5'>
              <h5> Retornar registros ordenados por mais de uma coluna </h5>
              <code>
                SELECT * FROM table_name
                ORDER BY table_name.column_name DESC, table_name.column_name ASC;
              </code>
            </div>

            <div className='mt-5'>
              <h5> Retornar registros com quantidades limitadas </h5>
              <code>
                SELECT * FROM table_name
                limit 'quantidade';
              </code>
            </div>

            <div className='mt-5'>
              <h5> Retornar registros pulando uma quantidade desejada </h5>
              <code>
                SELECT * FROM table_name
                offset 'quantidade';
              </code>
            </div>

            <div className='mt-5'>
              <h5> Retornar quantidade de registros </h5>
              <code>
                SELECT COUNT(*) FROM table_name;
              </code>
            </div>

            <div className='mt-5'>
              <h5> Retornar somatório de valores de uma coluna </h5>
              <code>
                SELECT SUM(column_name) FROM table_name;
              </code>
            </div>

            <div className='mt-5'>
              <h5> Retornar média de valores de uma coluna </h5>
              <code>
                SELECT AVG(column_name) FROM table_name;
              </code>
            </div>

            <div className='mt-5'>
              <h5> Retornar valor máximo e mínimo de uma coluna</h5>
              <code>
                SELECT MIN(column_name), MAX(column_name) FROM table_name;
              </code>
            </div>

            <div className='mt-5'>
              <h5> Retornar somatório de um campo, agrupando previamente os registros</h5>
              <code>
                SELECT column_name, SUM(column_name2) FROM table_name
                GROUP BY column_name
              </code>
            </div>

            <div className='mt-5'>
              <h5> Realizar filtro após uma função de agregação </h5>
              <p> A diferença do having para o where é que o where aplica o filtro antes da função de agregação  e o having após.</p>
              <code>
                SELECT column1, SUM(column2)
                  FROM table_name
                  GROUP BY column1
                  HAVING SUM(column2) = 10;
              </code>
            </div>

            <div className='mt-5'>
              <h5>Apagar um registro no banco de dados</h5>
              <code>
                DELETE FROM table_name 
                WHERE table_name.column_name = 'value';
              </code>
            </div>

            <div className='mt-5'>
              <h5>Atualizar um registro no banco de dados</h5>
              <code>
                UPDATE table_name
                SET table_name.column_name = 'value'
                WHERE table_name.id = 'value';
              </code>
            </div>
          </CCardBody>
        </CCard>

        <CCard className="mb-4">
          <CCardHeader>
            <strong>MÓDULO #4 - Joins e relacionamentos de consulta</strong>
          </CCardHeader>
          <CCardBody>
            <div className='mt-2'>
              <h5> Inner join </h5>
              <p> É um tipo de junção entre tabelas que retorna somente os registros correspondentes da tabela da esquerda com a tabela da direita.</p>
              <code> 
                SELECT * FROM TABLE1
                INNER JOINT TABLE2
                ON TABLE1.ID = TABLE2.COLUMN_ID
              </code>
            </div>

            <div className='mt-5'>
              <h5> Left join </h5>
              <p> É um tipo de junção entre tabelas que retorna todos os registros da esquerda independente de existir registros correspondentes na tabela da direita.</p>
              <code> 
                 SELECT * FROM TABLE1
                 LEFT JOIN TABLE2
                 ON TABLE1.ID = TABLE2.COLUMN_ID;
              </code>
            </div>

            <div className='mt-5'>
              <h5> Right join </h5>
              <p> É um tipo de junção entre tableas que retorna todos os registros da direita independente de existir registros correspondentes na tabela da esquerda.</p>
              <code> 
                 SELECT * FROM TABLE1
                 LEFT JOIN TABLE2
                 ON TABLE1.ID = TABLE2.COLUMN_ID;
              </code>
            </div>

            <div className='mt-5'>
              <h5> Full outer join </h5>
              <p> É um tipo de junção que retorna todos os registros tanto da esquerda quanto da direitra independente de existirem correspondencia entre si.</p>
              <code> 
                 SELECT * FROM TABLE1
                 FULL OUTER JOIN TABLE2
                 ON TABLE1.ID = TABLE2.COLUMN_ID;
              </code>
            </div>

            <div className='mt-5'>
              <h5> Cross Join </h5>
              <p> É um tipo de junção entre tabelas que retorna todas as combinações possíveis entre a tabela da esquerda com a tabela da direita.</p>
              <code> 
                 SELECT * FROM TABLE1
                 CROSS JOIN TABLE2
                 ON TABLE1.ID = TABLE2.COLUMN_ID;
              </code>
            </div>

            <div className='mt-5'>
              <h5> Selft Join </h5>
              <p> É um conceito de junção onde você poderá apalicar INNER JOIN, LEFT JOIN, CROSS JOIN etc, porém a tabela relacionada da esquerda é a mesma tabela da direita.</p>
              <code> 
                 SELECT * FROM TABLE1
                 INNER JOIN TABLE1
                 ON TABLE1.ID = TABLE1.COLUMN_ID;
              </code>
            </div>
          </CCardBody>
        </CCard>

        <CCard className="mb-4">
          <CCardHeader>
            <strong>MÓDULO #5 - índices e performance</strong>
          </CCardHeader>
          <CCardBody>
            <div className='mt-2'>
              <h5> O que são índices? </h5>
              <p> São estruturas auxiliares que proporcionam maior velocidade e integridade na busca por registros no banco de dados.</p>
            </div>

            <div className='mt-5'>
              <h5> Sintaxe básica para criar um índice </h5>
              <code> 
                CREATE INDEX name_of_index on name_of_table(column)
              </code>
            </div>

            <div className='mt-5'>
              <h5> Sintaxe básica para criar um índice </h5>
              <code> 
                CREATE INDEX name_of_index on name_of_table(column)
              </code>
            </div>

            <div className='mt-5'>
              <h5> Sintaxe básica para criar um índice composto </h5>
              <code> 
                CREATE INDEX name_of_index on name_of_table(coulmn1, column2)
              </code>
            </div>
          </CCardBody>
        </CCard>

        <CCard className="mb-4">
          <CCardHeader>
            <strong>MÓDULO #5 - Avançando um pouco mais</strong>
          </CCardHeader>
          <CCardBody>
            <div className='mt-2'>
              <h5> O que é VACCUM? </h5>
              <p> É um comando que limpa os registros que estão marcados como mortos em um banco de dados. Isso ocorre porque o PostgresSQL não apaga fisicamente registros excluídos ele somente os marca como "mortos". O Vaccum é um rotina automática do banco de dados porém pode ser executado manualmente.</p>
            </div>

            <div className='mt-5'>
              <h5> O que é uma view? </h5>
              <p> Uma view é basicamente uma consulta nomeada no banco de dados, que se comporta como uma tabela virtual que armazena somente a definição da consulta e não os registros.</p>

              <p className='mt-2'> Criar uma view:</p>
              <code> 
                CREATE VIEW vw_name AS ...rest of query;
              </code>

              <p className='mt-2'> Retornar dados de uma view</p>
              <code> 
                SELECT * FROM vw_name;
              </code>
            </div>

            <div className='mt-5'>
              <h5> O que é uma materialized view? </h5>
              <p> Uma materialized view é uma consulta nomeada que armazena os registros resultantes de uma consulta fisicamente, ao criar a materialized view os registros são armazenados nessa tabela virtual, porém não são atualizados automaticamente, necessitando que o responsável atualize manualmente via SQL os registros.</p>

              <p className='mt-2'> Criar uma view:</p>
              <code> 
                CREATE MARIALIZED VIEW mt_vw_name AS ...rest of query;
              </code>

              <p className='mt-2'> Retornar dados de uma view</p>
              <code> 
                SELECT * FROM mt_vw_name;
              </code>

              <p className='mt-2'> Para atualizar os dados da materialized view:</p>
              <code> 
                REFRESH MATERIALIZED VIEW mt_view_name;
              </code>
            </div>

             <div className='mt-5'>
                <h5> O que são triggers no banco de dados? </h5>
                <p> Triggers são gatilhos que são disparados quando ocorre algum evento no banco de dados: INSERT, UPDATE, DELETE, TRUNCATE.</p>
            </div>

            <div className='mt-5'>
                <h5> O que são transactions? </h5>
                <p> É um bloco de comando que é executado como uma unidade atômica, ou seja, ou tudo acontece ou nada acontece.</p>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default RelationalDatabase
